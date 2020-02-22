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
            this._btnRoll.on("click", function () {
                _this._diceOneResult = Math.floor(Math.random() * 6) + 1;
                _this._diceTwoResult = Math.floor(Math.random() * 6) + 1;
                console.log("Results " + _this._diceOneResult + " and " + _this._diceTwoResult);
            });
        };
        Play.prototype.Update = function () {
            if (this._diceOneResult && this._diceTwoResult) {
                this._diceOne.image = config.Game.ASSETS.getResult("dice_" + this._diceOneResult);
                this._diceTwo.image = config.Game.ASSETS.getResult("dice_" + this._diceTwoResult);
                this._lblDiceOne.text = "" + this._diceOneResult;
                this._lblDiceTwo.text = "" + this._diceTwoResult;
            }
        };
        return Play;
    }(objects.Scene));
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=Play.js.map