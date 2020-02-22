"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var scenes;
(function (scenes) {
    var RPG = /** @class */ (function (_super) {
        __extends(RPG, _super);
        function RPG() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        RPG.prototype.Start = function () {
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
        };
        RPG.prototype.Main = function () {
            var _this = this;
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
            this._btnRoll.on("click", function () {
                // Little bonus here :)
                createjs.Sound.play("dice_rolling");
                // Generate two random numbers between 1 and 6.
                _this._diceOneResult = Math.floor(Math.random() * 6) + 1;
                _this._diceTwoResult = Math.floor(Math.random() * 6) + 1;
                _this._diceThreeResult = Math.floor(Math.random() * 6) + 1;
                _this._diceFourResult = Math.floor(Math.random() * 6) + 1;
                // Using setInterval for a simple rolling effect.
                var intervalId = setInterval(function () {
                    var rng1 = Math.floor(Math.random() * 6) + 1, rng2 = Math.floor(Math.random() * 6) + 1, rng3 = Math.floor(Math.random() * 6) + 1, rng4 = Math.floor(Math.random() * 6) + 1;
                    _this._diceOne.image = config.Game.ASSETS.getResult("dice_" + rng1);
                    _this._diceTwo.image = config.Game.ASSETS.getResult("dice_" + rng2);
                    _this._diceThree.image = config.Game.ASSETS.getResult("dice_" + rng3);
                    _this._diceFour.image = config.Game.ASSETS.getResult("dice_" + rng4);
                    _this._lblDiceOne.text = "rolling!";
                    _this._lblDiceTwo.text = "rolling!";
                    _this._lblDiceThree.text = "rolling!";
                    _this._lblDiceFour.text = "rolling!";
                }, 150);
                // Clear the interval and display actual results.
                setTimeout(function () {
                    var results = [_this._diceOneResult, _this._diceTwoResult, _this._diceThreeResult, _this._diceFourResult];
                    clearInterval(intervalId);
                    _this._diceOne.image = config.Game.ASSETS.getResult("dice_" + _this._diceOneResult);
                    _this._diceTwo.image = config.Game.ASSETS.getResult("dice_" + _this._diceTwoResult);
                    _this._diceThree.image = config.Game.ASSETS.getResult("dice_" + _this._diceThreeResult);
                    _this._diceFour.image = config.Game.ASSETS.getResult("dice_" + _this._diceFourResult);
                    _this._lblDiceOne.text = "" + _this._diceOneResult;
                    _this._lblDiceTwo.text = "" + _this._diceTwoResult;
                    _this._lblDiceThree.text = "" + _this._diceThreeResult;
                    _this._lblDiceFour.text = "" + _this._diceFourResult;
                    // Find the lowest value and remove it from array.
                    results.splice(results.indexOf(Math.min.apply(Math, results)), 1);
                    // Display the sum of the remaining dices.
                    _this._lblResult.text = "Result: " + results.reduce(function (a, b) { return a + b; });
                }, 1000);
            });
        };
        RPG.prototype.Update = function () {
        };
        return RPG;
    }(objects.Scene));
    scenes.RPG = RPG;
})(scenes || (scenes = {}));
//# sourceMappingURL=RPG.js.map