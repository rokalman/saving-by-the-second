export class User {
    userName: String;
    flowRate: number;
    avatar: String;

    constructor(userName: String, flowRate: number, avatar: String) {
        this.userName = userName;
        this.flowRate = flowRate;
        this.avatar = avatar;
    }
}
