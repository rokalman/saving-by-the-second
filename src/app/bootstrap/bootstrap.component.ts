import { Component, OnInit } from '@angular/core';
import { User } from '../user'
import { Profile } from '../profile'
import { ShowerEntry } from '../shower-entry'
import { QuizEntry } from '../quiz-entry'
import { ProfileService } from '../profile.service'
import { CalcUtils } from '../calc-utils'
import { Router } from '@angular/router'


@Component({
  selector: 'app-bootstrap',
  templateUrl: './bootstrap.component.html',
  styleUrls: ['./bootstrap.component.css']
})
export class BootstrapComponent implements OnInit {
  readonly millisInDay: number = 60 * 60 * 24 * 1000;
  users: User[] = JSON.parse('[{"userName": "TheWaterSaver","flowRate":2.5},' + 
                              '{"userName": "TheGamerSaver","flowRate":2.0},' + 
                              '{"userName": "BobsTheBomb234","flowRate":2.0},' + 
                              '{"userName": "BestMom4Ever","flowRate":2.0}]');

  constructor(private profileService: ProfileService, private router: Router) { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    this.loadBootStrapData();
    this.router.navigateByUrl('/splash');
  }

  loadBootStrapData() {  
    window.localStorage.clear();
    let currentDate: Date = new Date();
    let me = this;
    this.users.forEach(function(user) {
      let newProfile: Profile = new Profile(user)
      newProfile.showers = me.buildRandomShowerEntries(currentDate);
      newProfile.quizzes = me.buildRandomQuizEntries(currentDate);
      me.profileService.saveProfile(newProfile);
    });
  }

  buildRandomShowerEntries(currentDate: Date):ShowerEntry[] {
    let entries: ShowerEntry[] = [];

    //Only mock the last 13 days
    for(let i:number = 1; i < 14; i++){
      let mockDate: Date = this.generateDaysBefore(currentDate,i);
      let gallons: number = this.randomGallons();
      let coins: number = CalcUtils.coinCalculator(gallons);
      entries.push(new ShowerEntry(mockDate,gallons,coins));
    }
    return entries;
  }

  buildRandomQuizEntries(currentDate: Date): QuizEntry[] {
    let entries: QuizEntry[] = [];

    //Only mock the last 13 days
    for(let i:number = 1; i < 14; i++){
      let mockDate: Date = this.generateDaysBefore(currentDate,i);
      let correct: boolean = Math.round(Math.random()) == 1;
      let coins: number = correct ? 10 : 0;
      entries.push(new QuizEntry(mockDate,correct,coins));
    }

    return entries;
  }

  randomGallons(): number {
    return 50 * Math.random();
  }

  generateDaysBefore(date: Date, days: number): Date {
    let mockDate: Date = new Date(date.getTime()-(days*this.millisInDay));
    return mockDate;
  }
}
