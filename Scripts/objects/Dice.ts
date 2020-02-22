module objects {
    export class Dice extends GameObject {

        constructor(diceNumber: String, x: number = 0, y: number = 0, isCentered: boolean = false, scale: number) {
            super(config.Game.ASSETS.getResult(`dice_${diceNumber}`), x, y, isCentered);
            this.scaleX = scale;
            this.scaleY = scale;
            this.Start();
        }

        Reset(): void {
        }

        Start(): void {
        }

        Update(): void {
        }

        protected _checkBounds(): void {
        }


    }
}
