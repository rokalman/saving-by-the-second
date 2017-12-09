import { Component, OnInit } from '@angular/core';
import { QuizServiceService } from '../quiz-service.service';
import { Quiz } from '../quiz';
import { QuizEntry } from '../quiz-entry';
import { ProfileService } from '../profile.service';
import { Profile } from '../profile';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  question: Quiz;

  answered: boolean = false;
  currentProfile: Profile;
  constructor(private quizService: QuizServiceService, private profileService: ProfileService) { 
    this.question = this.quizService.getQuestion();
    this.currentProfile = this.profileService.getDefaultProfile();
  }

  ngOnInit() {
  }

  checkAnswer(answer: number) {
    if(!this.answered){

      
      let coins: number = 0;
      let correct: boolean = false;
      let dateAnswered = new Date();

      if(answer === this.question.answer) {
        coins = 10;
        correct = true;
      }

      let entry: QuizEntry = new QuizEntry(dateAnswered,correct,coins);
      this.currentProfile.addQuizEntry(entry);
      this.answered = true;
      this.profileService.saveProfile(this.currentProfile);
    }
  }

  correct(answer: number): boolean {
    return answer === this.question.answer;
  }
}
