export class QuizEntry {
    dateAnswered: Date;
    correct: boolean;
    coins: number;

    constructor(dateAnswered: Date, correct: boolean, coins: number) {
        this.dateAnswered = dateAnswered;
        this.correct = correct;
        this.coins = coins;
    }
}
