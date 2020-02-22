module scenes {
    export class Play extends objects.Scene {
        private _diceOne: objects.Dice;
        private _diceTwo: objects.Dice;
        private _lblDiceOne: objects.Label;
        private _lblDiceTwo: objects.Label;
        private _btnRoll: objects.Button;
        private _diceOneResult: number;
        private _diceTwoResult: number;

        constructor() {
            super();
            this.Start();
        }

        public Start(): void {
            this._diceOne = new objects.Dice('blank', 180, 240, true, 0.5);
            this._diceTwo = new objects.Dice('blank', 460, 240, true, 0.5);
            this._lblDiceOne = new objects.Label('blank', '24px', 'Consolas', '#000000', 180, 315, true);
            this._lblDiceTwo = new objects.Label('blank', '24px', 'Consolas', '#000000', 460, 315, true);
            this._btnRoll = new objects.Button(config.Game.ASSETS.getResult("rollButton"), 320, 430, true);
            this.Main();
        }

        public Main(): void {
            this.addChild(this._diceOne);
            this.addChild(this._diceTwo);
            this.addChild(this._lblDiceOne);
            this.addChild(this._lblDiceTwo);
            this.addChild(this._btnRoll);

            this._btnRoll.on("click", () => {
                this._diceOneResult = Math.floor(Math.random() * 6) + 1;
                this._diceTwoResult = Math.floor(Math.random() * 6) + 1;
                console.log(`Results ${this._diceOneResult} and ${this._diceTwoResult}`);
            });
        }

        public Update(): void {
            if (this._diceOneResult && this._diceTwoResult) {

            }
        }
    }
}
