import { Injectable } from '@angular/core';

@Injectable()
export class TipServiceService {

  tips: String[] = [
    "Use a two in one shampoo and conditioner.",
    "Take a shower for 5 minutes or less.",
    "Tell 5 people about our app.",
    "Use a low flow shower head.",
    "Catch the water that is heating up in a bucket and use it for other purposes.",
    "Take a cold shower.",
    "While applying soap turn the water off. This is called a Navy shower.",
    "Look online for more ways to save shower water",
    "Go to https://evadrop.com/ and learn about the EvaDrop shower function.",
    "Install an instant water heater",
    "Install a low flow shower head",
    "Cut your hair",
    "Do not always wash your hair in the shower",
    "Do not shave in the shower",
    "Check for leaky fixtures in your showers.",
    "Install a smart shower."
  ];

  constructor() { }

  getTip(): String {
    return this.tips[Math.round(Math.random()*(this.tips.length-1))];
  }

}
