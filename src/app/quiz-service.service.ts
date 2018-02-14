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
    question.answer = 2;

    this.questions.push(question);

    question = new Quiz();
    
    question.id = 2;
    question.question = "How much of Earth's water is freshwater?";
    question.choices = ["4%","56%","2%"];
    question.answer = 3;

    this.questions.push(question);

    question = new Quiz();
    
    question.id = 3;
    question.question = "What percent of indoor water use is showering/bathing?";
    question.choices = ["27%","15%","7%"];
    question.answer = 1;

    this.questions.push(question);

    question = new Quiz();
    
    question.id = 4;
    question.question = "Per day how many gallons of water does an average American use?";
    question.choices = ["80-100","20-40","140-70"];
    question.answer = 1;

    this.questions.push(question);

    question = new Quiz();
    
    question.id = 5;
    question.question = "On average how many gallons does a shower use in 10 minutes?";
    question.choices = ["40","30","20"];
    question.answer = 3;

    this.questions.push(question);
    
    question = new Quiz();
    
    question.id = 6;
    question.question = "Per year how many gallons of water does the United States use?";
    question.choices = ["1 billion","148 trillion","300 billion"];
    question.answer = 2;

    this.questions.push(question);
    
    question = new Quiz();
    
    question.id = 7;
    question.question = "During a 5 minute shower, what percent of water can a low flow shower head save?";
    question.choices = ["40%","20%","10%"];
    question.answer = 1;

    this.questions.push(question);
    
    question = new Quiz();
    
    question.id = 8;
    question.question = "Per month how many gallons of water does the average person waist while waiting for their shower water to heat up?";
    question.choices = ["50-100","400-500","200-300"];
    question.answer = 3;

    this.questions.push(question);
    
    question = new Quiz();
    
    question.id = 9;
    question.question = "In Japan where do people frequently bathe?";
    question.choices = ["In Mud","In Natural Springs","In Lakes and Rivers"];
    question.answer = 2;

    this.questions.push(question);
    
    question = new Quiz();
    
    question.id = 10;
    question.question = "In Turkey where do people frequently bathe?";
    question.choices = ["In Hammams","In Hot Tubs","In the Rain"];
    question.answer = 1;

    this.questions.push(question);
    
    question.id = 11;
    question.question = "Once a week where do people in Finland shower?";
    question.choices = ["In Ice","In a Sauna","In a Waterfall"];
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
