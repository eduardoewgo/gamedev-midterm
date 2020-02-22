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
    var Play = /** @class */ (function (_super) {
        __extends(Play, _super);
        function Play() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        Play.prototype.Start = function () {
            this._diceOne = new objects.Dice('blank', 180, 240, true, 0.5);
            this._diceTwo = new objects.Dice('blank', 460, 240, true, 0.5);
            this._lblDiceOne = new objects.Label('blank', '24px', 'Consolas', '#000000', 180, 315, true);
            this._lblDiceTwo = new objects.Label('blank', '24px', 'Consolas', '#000000', 460, 315, true);
            this._btnRoll = new objects.Button(config.Game.ASSETS.getResult("rollButton"), 320, 430, true);
            this.Main();
        };
        Play.prototype.Main = function () {
            var _this = this;
            this.addChild(this._diceOne);
            this.addChild(this._diceTwo);
            this.addChild(this._lblDiceOne);
            this.addChild(this._lblDiceTwo);
            this.addChild(this._btnRoll);
            // Listener for Roll Button
            this._btnRoll.on("click", function () {
                // Little bonus here :)
                createjs.Sound.play("dice_rolling");
                // Generate two random numbers between 1 and 6.
                _this._diceOneResult = Math.floor(Math.random() * 6) + 1;
                _this._diceTwoResult = Math.floor(Math.random() * 6) + 1;
                console.log("Results " + _this._diceOneResult + " and " + _this._diceTwoResult);
                // Using setInterval for a simple rolling effect.
                var intervalId = setInterval(function () {
                    var rng1 = Math.floor(Math.random() * 6) + 1, rng2 = Math.floor(Math.random() * 6) + 1;
                    _this._diceOne.image = config.Game.ASSETS.getResult("dice_" + rng1);
                    _this._diceTwo.image = config.Game.ASSETS.getResult("dice_" + rng2);
                    _this._lblDiceOne.text = "rolling!";
                    _this._lblDiceTwo.text = "rolling!";
                }, 150);
                // Clear the interval and display actual results.
                setTimeout(function () {
                    clearInterval(intervalId);
                    _this._diceOne.image = config.Game.ASSETS.getResult("dice_" + _this._diceOneResult);
                    _this._diceTwo.image = config.Game.ASSETS.getResult("dice_" + _this._diceTwoResult);
                    _this._lblDiceOne.text = "" + _this._diceOneResult;
                    _this._lblDiceTwo.text = "" + _this._diceTwoResult;
                }, 1000);
            });
        };
        Play.prototype.Update = function () {
        };
        return Play;
    }(objects.Scene));
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=Play.js.map