import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TipServiceService } from '../tip-service.service'

@Component({
  selector: 'app-tipwheel',
  templateUrl: './tipwheel.component.html',
  styleUrls: ['./tipwheel.component.css']
})
export class TipwheelComponent implements OnInit {
  tip: String = "";

  constructor(private tipService: TipServiceService, private router: Router) { }

  ngOnInit() {
  }

  getTip() {
    this.tip = this.tipService.getTip();
  }

  goShower() {
    this.router.navigateByUrl('/stopwatch');
  }

}
