export class CalcUtils {
    static levelCalculator(coins: number): string {
        let level: string = "Beginner";
  
        if( coins >= 350) {
          level = "The SUPER SAVER";
        } else if ( coins >= 280 ) {
          level = "Cool Conserver";
        } else if ( coins >= 210 ) {
          level = "Average Bob";
        } else if ( coins >= 140 ) {
          level = "Willy Nilly Washer";
        }
  
        return level;
    }

    static coinCalculator(gallons: number): number {
        let coins: number = 0;
    
        if (gallons <= 10) {
          coins = 50;
          }
        else if (gallons <= 20) {
          coins = 40;   
        }
          else if (gallons <= 30) {
          coins = 30;
        }
          else if (gallons <= 40) {
          coins = 20;
        }
          else if (gallons <= 50) {
          coins = 10;
        }
          return coins;    
      }
}
