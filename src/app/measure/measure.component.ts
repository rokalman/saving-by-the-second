import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-measure',
  templateUrl: './measure.component.html',
  styleUrls: ['./measure.component.css']
})
export class MeasureComponent implements OnInit {

  steps: string[] = [
    "Find a bucket with labels showing the water level by the gallon or find the package your shower head came from to find the GPM.",
    "If you are using a bucket, fill up the bucket relatively close to the shower head for exactly 1 minute.",
    "Find the amount in gallons the in the bucket and enter that in your profile page."
  ];

  constructor(public dialogRef: MatDialogRef<MeasureComponent>) { }

  ngOnInit() {
  }

  closeDialog() {
    this.dialogRef.close();
  }

}
