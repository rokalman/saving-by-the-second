import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-competition',
  templateUrl: './competition.component.html',
  styleUrls: ['./competition.component.css']
})
export class CompetitionComponent implements OnInit {

  actions = [{
    name: "Profile",
    route: "/profile"
  },{
    name: "Tips",
    route: "/tips"
  },{
    name: "Shower Stopwatch",
    route: "/stopwatch"

  }];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  routeTo(route: string) {
    this.router.navigateByUrl(route);
  }
}
