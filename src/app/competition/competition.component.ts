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
    route: "/profile",
    cols: 1
  },{
    id: "tips",
    route: "/tips",
    cols: 1
  },{
    id: "stopwatch",
    route: "/stopwatch",
    cols: 2

  }];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  routeTo(route: string) {
    this.router.navigateByUrl(route);
  }
}
