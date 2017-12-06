export class ShowerEntry {
    dateTaken: Date;
    gallonsUsed: number;
    coins: number;

    constructor(dateTaken: Date, gallonsUsed: number, coins: number) {
        this.dateTaken = dateTaken;
        this.gallonsUsed = gallonsUsed;
        this.coins = coins;
    }
}
