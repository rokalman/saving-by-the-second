import { Component, OnInit } from '@angular/core';
import { QuizServiceService } from '../quiz-service.service';
import { Quiz } from '../quiz'

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  question: Quiz;
  constructor(private quizService: QuizServiceService) { 
    this.question = this.quizService.getQuestion();
  }

  ngOnInit() {
  }

}
