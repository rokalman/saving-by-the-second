import { Injectable } from '@angular/core';
import { Profile } from './profile'
import { ShowerEntry } from './shower-entry';
import { QuizEntry } from './quiz-entry';

@Injectable()
export class ProfileService {
  profileIds: String[] = [];
  readonly uidPrefix: string = "fll-u-411df5f3-fa49-4d45-b577-4bf0a495a27c-"
  readonly profId: string = "fll-profs-411df5f3-fa49-4d45-b577-4bf0a495a27c"

  constructor() { 
    let profIds: string = this.getProfileIdAsJSON();
    if(profIds != null) {
      this.profileIds = JSON.parse(profIds);
    } 
  }

  getDefaultProfile() : Profile {
    return this.getProfile("TheWaterSaver");
  }

  getProfile(userName: String): Profile {
    let uid: string = this.uidPrefix + userName;
    let jsonData = JSON.parse(window.localStorage.getItem(uid));

    let quizzes: QuizEntry[] = [];
    
    jsonData.quizzes.forEach(value => {
      quizzes.push(new QuizEntry(new Date(value.dateAnswered),value.correct,value.coins));
    });

    let showers: ShowerEntry[] = []
    jsonData.showers.forEach(value => {
      showers.push(new ShowerEntry(new Date(value.dateTaken),value.gallonsUsed, value.coins));
    });
    return new Profile(jsonData.user,showers, quizzes);
  }

  saveProfile(profile: Profile) {
    let uid: string = this.uidPrefix + profile.user.userName;

    window.localStorage.setItem(uid,JSON.stringify(profile));

    if(!this.profileExists(profile.user.userName)) {
      this.profileIds.push(profile.user.userName);
      this.saveProfileIds();
    }
  }

  private profileExists(userName: String): boolean {
    let profileExists: boolean = false;

    return this.profileIds.indexOf(userName) > -1;
    
  }

  private saveProfileIds() {
    window.localStorage.setItem(this.profId,JSON.stringify(this.profileIds));
  }

  private getProfileIdAsJSON(): string {
    return window.localStorage.getItem(this.profId);
  }
}
