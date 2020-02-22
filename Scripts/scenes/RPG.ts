module scenes {
    export class RPG extends objects.Scene {
        private _diceOne: objects.Dice;
        private _diceTwo: objects.Dice;
        private _diceThree: objects.Dice;
        private _diceFour: objects.Dice;

        private _lblDiceOne: objects.Label;
        private _lblDiceTwo: objects.Label;
        private _lblDiceThree: objects.Label;
        private _lblDiceFour: objects.Label;

        private _diceOneResult: number;
        private _diceTwoResult: number;
        private _diceThreeResult: number;
        private _diceFourResult: number;

        private _lblResult: objects.Label;
        private _btnRoll: objects.Button;


        constructor() {
            super();
            this.Start();
        }

        public Start(): void {
            this._diceOne = new objects.Dice('blank', 150, 180, true, 0.5);
            this._diceTwo = new objects.Dice('blank', 260, 180, true, 0.5);
            this._diceThree = new objects.Dice('blank', 370, 180, true, 0.5);
            this._diceFour = new objects.Dice('blank', 480, 180, true, 0.5);

            this._lblDiceOne = new objects.Label('blank', '24px', 'Consolas', '#000000', 140, 250, true);
            this._lblDiceTwo = new objects.Label('blank', '24px', 'Consolas', '#000000', 250, 250, true);
            this._lblDiceThree = new objects.Label('blank', '24px', 'Consolas', '#000000', 360, 250, true);
            this._lblDiceFour = new objects.Label('blank', '24px', 'Consolas', '#000000', 470, 250, true);

            this._lblResult = new objects.Label('Waiting', '24px', 'Consolas', '#000000', 320, 380, true);
            this._btnRoll = new objects.Button(config.Game.ASSETS.getResult("rollButton"), 320, 430, true);
            this.Main();
        }

        public Main(): void {
            this.addChild(this._diceOne);
            this.addChild(this._diceTwo);
            this.addChild(this._diceThree);
            this.addChild(this._diceFour);

            this.addChild(this._lblDiceOne);
            this.addChild(this._lblDiceTwo);
            this.addChild(this._lblDiceThree);
            this.addChild(this._lblDiceFour);

            this.addChild(this._lblResult);
            this.addChild(this._btnRoll);

            // Listener for Roll Button
            this._btnRoll.on("click", () => {
                // Little bonus here :)
                createjs.Sound.play("dice_rolling");

                // Generate two random numbers between 1 and 6.
                this._diceOneResult = Math.floor(Math.random() * 6) + 1;
                this._diceTwoResult = Math.floor(Math.random() * 6) + 1;
                this._diceThreeResult = Math.floor(Math.random() * 6) + 1;
                this._diceFourResult = Math.floor(Math.random() * 6) + 1;

                // Using setInterval for a simple rolling effect.
                const intervalId = setInterval(() => {
                    let rng1 = Math.floor(Math.random() * 6) + 1, rng2 = Math.floor(Math.random() * 6) + 1,
                        rng3 = Math.floor(Math.random() * 6) + 1, rng4 = Math.floor(Math.random() * 6) + 1;

                    this._diceOne.image = config.Game.ASSETS.getResult(`dice_${rng1}`) as any;
                    this._diceTwo.image = config.Game.ASSETS.getResult(`dice_${rng2}`) as any;
                    this._diceThree.image = config.Game.ASSETS.getResult(`dice_${rng3}`) as any;
                    this._diceFour.image = config.Game.ASSETS.getResult(`dice_${rng4}`) as any;

                    this._lblDiceOne.text = `rolling!`;
                    this._lblDiceTwo.text = `rolling!`;
                    this._lblDiceThree.text = `rolling!`;
                    this._lblDiceFour.text = `rolling!`;
                }, 150);

                // Clear the interval and display actual results.
                setTimeout(() => {
                    const results = [this._diceOneResult, this._diceTwoResult, this._diceThreeResult, this._diceFourResult];
                    clearInterval(intervalId);
                    this._diceOne.image = config.Game.ASSETS.getResult(`dice_${this._diceOneResult}`) as any;
                    this._diceTwo.image = config.Game.ASSETS.getResult(`dice_${this._diceTwoResult}`) as any;
                    this._diceThree.image = config.Game.ASSETS.getResult(`dice_${this._diceThreeResult}`) as any;
                    this._diceFour.image = config.Game.ASSETS.getResult(`dice_${this._diceFourResult}`) as any;

                    this._lblDiceOne.text = `${this._diceOneResult}`;
                    this._lblDiceTwo.text = `${this._diceTwoResult}`;
                    this._lblDiceThree.text = `${this._diceThreeResult}`;
                    this._lblDiceFour.text = `${this._diceFourResult}`;

                    // Find the lowest value and remove it from array.
                    results.splice(results.indexOf(Math.min(...results)), 1);

                    // Display the sum of the remaining dices.
                    this._lblResult.text = `Result: ${results.reduce((a, b) => a + b)}`;


                }, 1000);
            });
        }

        public Update(): void {

        }
    }
}
