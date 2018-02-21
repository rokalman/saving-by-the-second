import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.css']
})
export class SplashComponent implements OnInit {
  interval = null;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    this.interval = window.setInterval(() => this.routeToHome(),5000);
  }

  routeToHome() {
    window.clearInterval(this.interval);
    this.interval = null;

    this.router.navigateByUrl('/home');
  }
}
