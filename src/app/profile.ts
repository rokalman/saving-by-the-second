import { User } from './user'
import { ShowerEntry } from './shower-entry'
import { QuizEntry } from './quiz-entry'

export class Profile {
    user: User;
    showers: ShowerEntry[] = [];
    quizzes: QuizEntry[] = [] ;

    constructor(user: User, showers?: ShowerEntry[], quizzes?: QuizEntry[]) {
        this.user = user;
        this.showers = showers;
        this.quizzes = quizzes;
    }

    getTotalCoins(getAll: boolean) : number {
        let total: number = 0;
        let currentDate: number = (new Date()).getTime();
        let sevenDays: number = 60 * 60 * 24 * 1000 * 7; //seconds per min * min per hour * 24 hours * 1000 ms per second * 7 days
        this.showers.forEach(function(shower){
            let millis: number = shower.dateTaken.getTime();

            if(getAll || ((currentDate - millis) <= sevenDays)) {
                total += shower.coins;
            }
        });

        this.quizzes.forEach(function(quiz) {
            let millis: number = quiz.dateAnswered.getTime();

            if((currentDate - millis) <= sevenDays) {
                total += quiz.coins;
            }
        });

        return total;
    }

    addShowerEntry(showerEntry: ShowerEntry) {
        this.showers.push(showerEntry);
    }

    addQuizEntry(quizEntry: QuizEntry) {
        this.quizzes.push(quizEntry);
    }
}
