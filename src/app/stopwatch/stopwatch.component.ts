import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CalcUtils } from '../calc-utils';
import { ProfileService } from '../profile.service';
import { Profile } from '../profile';
import { ShowerEntry } from '../shower-entry';

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.css','../app.component.css']
})
export class StopwatchComponent implements OnInit {

  readonly START_LABEL: String = 'Start'
  readonly PAUSE_LABEL: String = 'Pause'

  readonly NO_SHOWER: String = 'I did not take a Shower'
  readonly END_LABEL: String = 'End Shower'

  currentProfile: Profile;
  toggleButtonLabel = this.START_LABEL
  endShowerLabel = this.NO_SHOWER

  interval = null

  results: boolean = false;

  seconds: number = 0;

  actualMinutes: number = 0;
  actualSeconds: number = 0;

  timer = {
    time: '00:00',
    waterUsed: 0,
    coins: 50
  }

  constructor(private profileService: ProfileService, private router: Router) {
    this.currentProfile = this.profileService.getDefaultProfile();
  }

  ngOnInit() {
  }

  toggleTimer() {
    
    if(this.interval == null) {
      this.interval = setInterval( ()=>this.updateTimer(), 1000 )
      this.toggleButtonLabel = this.PAUSE_LABEL
      this.endShowerLabel = this.END_LABEL
    } else {
      clearInterval(this.interval)
      this.interval = null
      this.toggleButtonLabel = this.START_LABEL
    }
  }

  updateTimer() {
    this.seconds++
    console.log("interval firing")
    this.timer.waterUsed = this.calculateGallons(this.currentProfile.user.flowRate,this.seconds)
    this.timer.coins = CalcUtils.coinCalculator(this.timer.waterUsed)
    this.actualMinutes = this.getMinutes(this.seconds);
    this.actualSeconds = this.getSeconds(this.seconds);

    this.timer.time = this.formatTime(this.actualMinutes, this.actualSeconds);
  }

  calculateGallons(flowRate, seconds) {
    var gallons = flowRate * seconds / 60
    gallons = Math.round(gallons*100)
    return gallons/100
  }

  formatTime(actualMinutes: number, actualSeconds): string {
    let minutes: String = String(actualMinutes).padStart(2,'0')
    let secs: String = String(actualSeconds).padStart(2,'0')

    return `${minutes}:${secs}`
  }

  getMinutes(seconds: number): number {
    return Math.round(seconds/60);
  }

  getSeconds(seconds: number): number {
    return seconds % 60;
  }

  endShower() {
    if(this.interval != null) {
      this.toggleTimer();
    }
    let shower: ShowerEntry = new ShowerEntry(new Date(), this.timer.waterUsed, this.timer.coins);
    this.currentProfile.addShowerEntry(shower);
    this.profileService.saveProfile(this.currentProfile);
    this.results = true;
  }

  goToLeaderboard() {
    this.router.navigateByUrl('/leaderboard');
  }

}
