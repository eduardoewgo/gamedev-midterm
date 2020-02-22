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
    var Start = /** @class */ (function (_super) {
        __extends(Start, _super);
        function Start() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        Start.prototype.Start = function () {
            //instantiate a new Text object
            this._welcomeLabel = new objects.Label("COMP397 - Midterm Test\n Eduardo Godoy 22/02/20", "40px", "Consolas", "#000000", 320, 180, true);
            // buttons
            this._startButton = new objects.Button(config.Game.ASSETS.getResult("startButton"), 180, 430, true);
            this._bonusButton = new objects.Button(config.Game.ASSETS.getResult("bonusButton"), 460, 430, true, 0.5);
            this.Main();
        };
        Start.prototype.Update = function () {
        };
        Start.prototype.Main = function () {
            this.addChild(this._welcomeLabel);
            this.addChild(this._startButton);
            this.addChild(this._bonusButton);
            this._startButton.on("click", function () {
                config.Game.SCENE = scenes.State.PLAY;
            });
            this._bonusButton.on("click", function () {
                config.Game.SCENE = scenes.State.RPG;
            });
        };
        return Start;
    }(objects.Scene));
    scenes.Start = Start;
})(scenes || (scenes = {}));
//# sourceMappingURL=Start.js.map