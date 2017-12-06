import { Injectable } from '@angular/core';
import { Quiz } from './quiz'
import { queryDef } from '@angular/core/src/view/query';

@Injectable()
export class QuizServiceService {

  questions: Quiz[] = [];

  constructor() {
    let question: Quiz = new Quiz();

    question.id = 1;
    question.question = "How Many gallons (on average) does it take to fill a bathtub?";
    question.choices = ["47","37","18"];
    question.answer = 1;

    this.questions.push(question);

    question = new Quiz();
    
    question.id = 2;
    question.question = "How much of Earth's water is freshwater?";
    question.choices = ["4%","56%","2%"];
    question.answer = 2;

    this.questions.push(question);

    question = new Quiz();
    
    question.id = 3;
    question.question = "What percent of indoor water use is showering/bathing?";
    question.choices = ["27%","15%","7%"];
    question.answer = 0;

    this.questions.push(question);

    question = new Quiz();
    
    question.id = 4;
    question.question = "Per day how many gallons of water does an average American use?";
    question.choices = ["70-110","20-40","140-70"];
    question.answer = 2;

    this.questions.push(question);

    question = new Quiz();
    
    question.id = 5;
    question.question = "On average how many gallons does a shower use in 10 minutes?";
    question.choices = ["40","30","20"];
    question.answer = 2;

    this.questions.push(question);
  }

  getQuestion(): Quiz {
    let rand: number = Math.round(Math.random()*(this.questions.length-1));
    return this.questions[rand];
  }

  checkAnswer(id, answer:number): boolean {
    let question: Quiz = this.questions[id-1];

    return question.answer === answer;
  }

}
