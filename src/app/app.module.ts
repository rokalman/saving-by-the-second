import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatDialogModule, MatFormFieldModule, MatIconModule, MatInputModule, MatList } from '@angular/material';
import { MatListModule } from '@angular/material/list';

import { AppComponent } from './app.component';
import { SplashComponent } from './splash/splash.component';
import { HomeComponent } from './home/home.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { QuizComponent } from './quiz/quiz.component';
import { StopwatchComponent } from './stopwatch/stopwatch.component';
import { ProfileComponent } from './profile/profile.component';
import { TipwheelComponent } from './tipwheel/tipwheel.component';
import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { ProfileService } from './profile.service';
import { CompetitionComponent } from './competition/competition.component'
import { QuizServiceService } from './quiz-service.service';
import { NavbarComponent } from './navbar/navbar.component';
import { MeasureComponent } from './measure/measure.component';
import { TipServiceService } from './tip-service.service';
import { ResultsComponent } from './results/results.component';

const appRoutes: Routes = [
  { path: 'splash', component: SplashComponent },
  { path: 'home', component: HomeComponent},
  { path: 'quiz', component: QuizComponent},
  { path: 'leaderboard', component: LeaderboardComponent},
  { path: 'stopwatch', component: StopwatchComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'competition', component: CompetitionComponent },
  { path: 'tips', component: TipwheelComponent },
  { path: 'demo', component: BootstrapComponent },
  { path: 'measure', component: MeasureComponent },
  { path: 'results', component: ResultsComponent },
  { path: '',   redirectTo: '/splash', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    SplashComponent,
    HomeComponent,
    LeaderboardComponent,
    QuizComponent,
    StopwatchComponent,
    ProfileComponent,
    TipwheelComponent,
    BootstrapComponent,
    CompetitionComponent,
    NavbarComponent,
    MeasureComponent,
    ResultsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule, 
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true, useHash: true } // For debugging
    )
  ],
  providers: [ProfileService, QuizServiceService, TipServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
