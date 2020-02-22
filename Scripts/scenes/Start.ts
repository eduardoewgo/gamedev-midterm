module scenes {
    export class Start extends objects.Scene {
        // PRIVATE INSTANCE MEMBERS
        private _welcomeLabel: objects.Label;
        private _startButton: objects.Button;
        private _bonusButton: objects.Button;

        constructor() {
            super();
            this.Start();
        }

        public Start(): void {
            //instantiate a new Text object
            this._welcomeLabel = new objects.Label("COMP397 - Midterm Test\n Eduardo Godoy 22/02/20", "40px", "Consolas", "#000000", 320, 180, true);
            // buttons
            this._startButton = new objects.Button(config.Game.ASSETS.getResult("startButton"), 180, 430, true);
            this._bonusButton = new objects.Button(config.Game.ASSETS.getResult("bonusButton"), 460, 430, true, 0.5);


            this.Main();
        }

        public Update(): void {

        }

        public Main(): void {


            this.addChild(this._welcomeLabel);
            this.addChild(this._startButton);
            this.addChild(this._bonusButton);

            this._startButton.on("click", () => {
                config.Game.SCENE = scenes.State.PLAY;
            });

            this._bonusButton.on("click", () => {
                config.Game.SCENE = scenes.State.RPG;
            });

        }


    }
}
