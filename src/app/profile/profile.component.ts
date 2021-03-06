import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { ProfileService } from '../profile.service';
import { CalcUtils } from '../calc-utils';
import { Profile } from '../profile';
import { MeasureComponent } from '../measure/measure.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  currentProfile: Profile;
  totalCoins: number;
  lastSevenCoins: number;
  level: string;


  constructor(private profileService: ProfileService, public dialog: MatDialog) { 
    this.currentProfile = this.profileService.getDefaultProfile();
    this.totalCoins = this.currentProfile.getTotalCoins(true);
    this.lastSevenCoins = this.currentProfile.getTotalCoins(false);
    this.level = CalcUtils.levelCalculator(this.lastSevenCoins);
  }

  ngOnInit() {
  }

  saveProfile() {
    this.profileService.saveProfile(this.currentProfile);
  }

  howToMeasure() {
    this.dialog.open(MeasureComponent);
  }
}
