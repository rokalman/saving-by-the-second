import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service'
import { Profile } from '../profile'

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {
  currentProfile: Profile;

  profiles: Profile[] = [];

  constructor(private profileService: ProfileService) {
    this.currentProfile = this.profileService.getDefaultProfile();

    let profs: Profile[] = [];

    this.profileService.profileIds.forEach(value => {
      let prof: Profile = this.profileService.getProfile(value);
      this.profiles.push(prof);
    }); 

    this.profiles.sort(function(a: Profile,b: Profile): number {
      return b.getTotalCoins(false)-a.getTotalCoins(false);
    });
  }


  ngOnInit() {
  }

  getCoins(profile: Profile): number {
    return profile.getTotalCoins(false);
  }

}
