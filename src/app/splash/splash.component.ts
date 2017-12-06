import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.css']
})
export class SplashComponent implements OnInit {
  inteval = null;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    this.inteval = window.setInterval(() => this.routeToHome(),2500);
  }

  routeToHome() {
    window.clearInterval(this.inteval);
    this.inteval = null;

    this.router.navigateByUrl('/home');
  }
}
