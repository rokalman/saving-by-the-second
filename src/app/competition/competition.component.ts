import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-competition',
  templateUrl: './competition.component.html',
  styleUrls: ['./competition.component.css']
})
export class CompetitionComponent implements OnInit {

  actions = [{
    id: "profile",
    route: "/profile"
  },{
    id: "tips",
    route: "/tips"
  },{
    id: "stopwatch",
    route: "/stopwatch"

  }];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  routeTo(route: string) {
    this.router.navigateByUrl(route);
  }
}
