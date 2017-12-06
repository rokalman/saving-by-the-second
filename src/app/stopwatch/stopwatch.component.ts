import { Component, OnInit } from '@angular/core';
import { CalcUtils } from '../calc-utils'
import { ProfileService } from '../profile.service'
import { Profile } from '../profile'
import { ShowerEntry } from '../shower-entry'

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

  seconds = 0;

  timer = {
    time: '00:00',
    waterUsed: 0,
    coins: 50
  }

  constructor(private profileService: ProfileService) {
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
    this.timer.time = this.formatTime(this.seconds)
  }

  calculateGallons(flowRate, seconds) {
    var gallons = flowRate * seconds / 60
    gallons = Math.round(gallons*100)
    return gallons/100
  }

  

  formatTime(seconds) {
    let minutes: String = String(Math.round(seconds/60)).padStart(2,'0')
    let secs: String = String(seconds % 60).padStart(2,'0')

    return `${minutes}:${secs}`
  }

  endShower() {
    if(this.interval != null) {
      this.toggleTimer();
    }
    let shower: ShowerEntry = new ShowerEntry(new Date(), this.timer.waterUsed, this.timer.coins);
    this.currentProfile.addShowerEntry(shower);
    this.profileService.saveProfile(this.currentProfile);
  }

}
