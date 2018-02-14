import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  actions = [{
    name: "Leaderboard",
    id: "leaderboard",
    route: "/leaderboard"
  },{
    name: "Question of the Day",
    id: "quiz",
    route: "/quiz"
  },{
    name: "Shower Competition",
    id: "showercomp",
    route: "/competition"

  }];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  routeTo(route: string) {
    this.router.navigateByUrl(route);
  }
}
