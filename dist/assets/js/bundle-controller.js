!function(e){function r(e,r,o){return 4===arguments.length?t.apply(this,arguments):void n(e,{declarative:!0,deps:r,declare:o})}function t(e,r,t,o){n(e,{declarative:!1,deps:r,executingRequire:t,execute:o})}function n(e,r){r.name=e,e in v||(v[e]=r),r.normalizedDeps=r.deps}function o(e,r){if(r[e.groupIndex]=r[e.groupIndex]||[],-1==g.call(r[e.groupIndex],e)){r[e.groupIndex].push(e);for(var t=0,n=e.normalizedDeps.length;n>t;t++){var a=e.normalizedDeps[t],u=v[a];if(u&&!u.evaluated){var d=e.groupIndex+(u.declarative!=e.declarative);if(void 0===u.groupIndex||u.groupIndex<d){if(void 0!==u.groupIndex&&(r[u.groupIndex].splice(g.call(r[u.groupIndex],u),1),0==r[u.groupIndex].length))throw new TypeError("Mixed dependency cycle detected");u.groupIndex=d}o(u,r)}}}}function a(e){var r=v[e];r.groupIndex=0;var t=[];o(r,t);for(var n=!!r.declarative==t.length%2,a=t.length-1;a>=0;a--){for(var u=t[a],i=0;i<u.length;i++){var s=u[i];n?d(s):l(s)}n=!n}}function u(e){return y[e]||(y[e]={name:e,dependencies:[],exports:{},importers:[]})}function d(r){if(!r.module){var t=r.module=u(r.name),n=r.module.exports,o=r.declare.call(e,function(e,r){if(t.locked=!0,"object"==typeof e)for(var o in e)n[o]=e[o];else n[e]=r;for(var a=0,u=t.importers.length;u>a;a++){var d=t.importers[a];if(!d.locked)for(var i=0;i<d.dependencies.length;++i)d.dependencies[i]===t&&d.setters[i](n)}return t.locked=!1,r},{id:r.name});t.setters=o.setters,t.execute=o.execute;for(var a=0,i=r.normalizedDeps.length;i>a;a++){var l,s=r.normalizedDeps[a],c=v[s],f=y[s];f?l=f.exports:c&&!c.declarative?l=c.esModule:c?(d(c),f=c.module,l=f.exports):l=p(s),f&&f.importers?(f.importers.push(t),t.dependencies.push(f)):t.dependencies.push(null),t.setters[a]&&t.setters[a](l)}}}function i(e){var r,t=v[e];if(t)t.declarative?f(e,[]):t.evaluated||l(t),r=t.module.exports;else if(r=p(e),!r)throw new Error("Unable to load dependency "+e+".");return(!t||t.declarative)&&r&&r.__useDefault?r["default"]:r}function l(r){if(!r.module){var t={},n=r.module={exports:t,id:r.name};if(!r.executingRequire)for(var o=0,a=r.normalizedDeps.length;a>o;o++){var u=r.normalizedDeps[o],d=v[u];d&&l(d)}r.evaluated=!0;var c=r.execute.call(e,function(e){for(var t=0,n=r.deps.length;n>t;t++)if(r.deps[t]==e)return i(r.normalizedDeps[t]);throw new TypeError("Module "+e+" not declared as a dependency.")},t,n);c&&(n.exports=c),t=n.exports,t&&t.__esModule?r.esModule=t:r.esModule=s(t)}}function s(r){var t={};if(("object"==typeof r||"function"==typeof r)&&r!==e)if(m)for(var n in r)"default"!==n&&c(t,r,n);else{var o=r&&r.hasOwnProperty;for(var n in r)"default"===n||o&&!r.hasOwnProperty(n)||(t[n]=r[n])}return t["default"]=r,x(t,"__useDefault",{value:!0}),t}function c(e,r,t){try{var n;(n=Object.getOwnPropertyDescriptor(r,t))&&x(e,t,n)}catch(o){return e[t]=r[t],!1}}function f(r,t){var n=v[r];if(n&&!n.evaluated&&n.declarative){t.push(r);for(var o=0,a=n.normalizedDeps.length;a>o;o++){var u=n.normalizedDeps[o];-1==g.call(t,u)&&(v[u]?f(u,t):p(u))}n.evaluated||(n.evaluated=!0,n.module.execute.call(e))}}function p(e){if(I[e])return I[e];if("@node/"==e.substr(0,6))return I[e]=s(D(e.substr(6)));var r=v[e];if(!r)throw"Module "+e+" not present.";return a(e),f(e,[]),v[e]=void 0,r.declarative&&x(r.module.exports,"__esModule",{value:!0}),I[e]=r.declarative?r.module.exports:r.esModule}var v={},g=Array.prototype.indexOf||function(e){for(var r=0,t=this.length;t>r;r++)if(this[r]===e)return r;return-1},m=!0;try{Object.getOwnPropertyDescriptor({a:0},"a")}catch(h){m=!1}var x;!function(){try{Object.defineProperty({},"a",{})&&(x=Object.defineProperty)}catch(e){x=function(e,r,t){try{e[r]=t.value||t.get.call(e)}catch(n){}}}}();var y={},D="undefined"!=typeof System&&System._nodeRequire||"undefined"!=typeof require&&require.resolve&&"undefined"!=typeof process&&require,I={"@empty":{}};return function(e,n,o,a){return function(u){u(function(u){for(var d={_nodeRequire:D,register:r,registerDynamic:t,get:p,set:function(e,r){I[e]=r},newModule:function(e){return e}},i=0;i<n.length;i++)(function(e,r){r&&r.__esModule?I[e]=r:I[e]=s(r)})(n[i],arguments[i]);a(d);var l=p(e[0]);if(e.length>1)for(var i=1;i<e.length;i++)p(e[i]);return o?l["default"]:l})}}}("undefined"!=typeof self?self:global)

(["1"], [], false, function($__System) {
var require = this.require, exports = this.exports, module = this.module;
!function(e){function r(e,r){for(var n=e.split(".");n.length;)r=r[n.shift()];return r}function n(n){if("string"==typeof n)return r(n,e);if(!(n instanceof Array))throw new Error("Global exports must be a string or array.");for(var t={},o=!0,f=0;f<n.length;f++){var i=r(n[f],e);o&&(t["default"]=i,o=!1),t[n[f].split(".").pop()]=i}return t}function t(r){if(Object.keys)Object.keys(e).forEach(r);else for(var n in e)a.call(e,n)&&r(n)}function o(r){t(function(n){if(-1==l.call(s,n)){try{var t=e[n]}catch(o){s.push(n)}r(n,t)}})}var f,i=$__System,a=Object.prototype.hasOwnProperty,l=Array.prototype.indexOf||function(e){for(var r=0,n=this.length;n>r;r++)if(this[r]===e)return r;return-1},s=["_g","sessionStorage","localStorage","clipboardData","frames","frameElement","external","mozAnimationStartTime","webkitStorageInfo","webkitIndexedDB","mozInnerScreenY","mozInnerScreenX"];i.set("@@global-helpers",i.newModule({prepareGlobal:function(r,t,i){var a=e.define;e.define=void 0;var l;if(i){l={};for(var s in i)l[s]=e[s],e[s]=i[s]}return t||(f={},o(function(e,r){f[e]=r})),function(){var r;if(t)r=n(t);else{r={};var i,s;o(function(e,n){f[e]!==n&&"undefined"!=typeof n&&(r[e]=n,"undefined"!=typeof i?s||i===n||(s=!0):i=n)}),r=s?r:i}if(l)for(var u in l)e[u]=l[u];return e.define=a,r}}}))}("undefined"!=typeof self?self:global);
$__System.register('2', ['3', '4'], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    var __extends = this && this.__extends || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var BaseMediator_1, utils_1;
    var ApplicationMediator;
    return {
        setters: [function (BaseMediator_1_1) {
            BaseMediator_1 = BaseMediator_1_1;
        }, function (utils_1_1) {
            utils_1 = utils_1_1;
        }],
        execute: function () {
            ApplicationMediator = function (_super) {
                __extends(ApplicationMediator, _super);
                function ApplicationMediator() {
                    _super.apply(this, arguments);
                }
                ApplicationMediator.prototype.onRegister = function () {
                    var _this = this;
                    // this.socket = io.connect('http://localost:4000');
                    this.socket = io.connect('https://meow-meltdown.herokuapp.com');
                    this.socket.on('controller_connected', function (event) {
                        _this.handleSocketEvent('controller_connected', event);
                    });
                    this.socket.on('games_list', function (event) {
                        _this.handleSocketEvent('games_list', event);
                    });
                    this.socket.on('start_game', function (event) {
                        _this.handleSocketEvent('start_game', event);
                    });
                    this.socket.on('start_countdown', function (event) {
                        _this.handleSocketEvent('start_countdown', event);
                    });
                    this.socket.emit('controller_connect');
                };
                ApplicationMediator.prototype.listNotificationInterests = function () {
                    return [utils_1.Notifications.REQUEST_GAMES_LIST, utils_1.Notifications.RECEIVED_GAMES_LIST, utils_1.Notifications.CONNECT_TO_GAME, utils_1.Notifications.CONNECTED_TO_GAME, utils_1.Notifications.PLAYER_SWIPE, utils_1.Notifications.PLAYER_START_GAME, utils_1.Notifications.START_GAME];
                };
                ApplicationMediator.prototype.handleNotification = function (note) {
                    var name = note.getName();
                    var body = note.getBody();
                    switch (name) {
                        case utils_1.Notifications.REQUEST_GAMES_LIST:
                            this.requestGamesList();
                            break;
                        case utils_1.Notifications.CONNECT_TO_GAME:
                            this.connectToGame(body);
                            break;
                        case utils_1.Notifications.PLAYER_SWIPE:
                            this.sendSwipe(body);
                            break;
                        case utils_1.Notifications.PLAYER_START_GAME:
                            this.sendPlayerStartGame();
                            break;
                    }
                };
                ApplicationMediator.prototype.handleSocketEvent = function (type, event) {
                    console.log('handleSocketEvent', type, event);
                    switch (type) {
                        case 'controller_connected':
                            this.appModel.gameId = event.gameId;
                            this.appModel.playerNum = event.playerNum;
                            this.sendNotification(utils_1.Notifications.CONNECTED_TO_GAME);
                            break;
                        case 'games_list':
                            this.appModel.gamesList = event.list;
                            this.sendNotification(utils_1.Notifications.RECEIVED_GAMES_LIST, this.appModel.gamesList);
                            break;
                        case 'start_game':
                            this.sendNotification(utils_1.Notifications.START_GAME);
                            break;
                        case 'start_countdown':
                            this.sendNotification(utils_1.Notifications.START_COUNTDOWN);
                            break;
                    }
                };
                ApplicationMediator.prototype.requestGamesList = function () {
                    this.socket.emit('request_games_list');
                };
                ApplicationMediator.prototype.sendSwipe = function (percent) {
                    this.socket.emit('player_swipe', { player: this.appModel.playerNum, percent: percent });
                };
                ApplicationMediator.prototype.sendPlayerStartGame = function () {
                    this.socket.emit('player_start_game');
                };
                ApplicationMediator.prototype.connectToGame = function (gameId) {
                    console.log('socket emitting controller_connect_to_game', { id: gameId });
                    this.socket.emit('controller_connect_to_game', { id: gameId });
                };
                Object.defineProperty(ApplicationMediator.prototype, "name", {
                    get: function () {
                        return ApplicationMediator.MEDIATOR_NAME;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ApplicationMediator.prototype, "controller", {
                    get: function () {
                        return this._viewComponent;
                    },
                    enumerable: true,
                    configurable: true
                });
                ApplicationMediator.MEDIATOR_NAME = 'ApplicationMediator';
                return ApplicationMediator;
            }(BaseMediator_1.BaseMediator);
            exports_1("ApplicationMediator", ApplicationMediator);
        }
    };
});
$__System.register('5', ['3', '4'], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    var __extends = this && this.__extends || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var BaseMediator_1, utils_1;
    var SplashMediator;
    return {
        setters: [function (BaseMediator_1_1) {
            BaseMediator_1 = BaseMediator_1_1;
        }, function (utils_1_1) {
            utils_1 = utils_1_1;
        }],
        execute: function () {
            SplashMediator = function (_super) {
                __extends(SplashMediator, _super);
                function SplashMediator() {
                    _super.apply(this, arguments);
                }
                SplashMediator.prototype.listNotificationInterests = function () {
                    return [utils_1.Notifications.RECEIVED_GAMES_LIST, utils_1.Notifications.CONNECT_TO_GAME, utils_1.Notifications.CONNECTED_TO_GAME];
                };
                SplashMediator.prototype.handleNotification = function (note) {
                    var name = note.getName();
                    var body = note.getBody();
                    switch (name) {
                        case utils_1.Notifications.RECEIVED_GAMES_LIST:
                            this.updateGamesList();
                            break;
                        case utils_1.Notifications.CONNECT_TO_GAME:
                            //
                            break;
                        case utils_1.Notifications.CONNECTED_TO_GAME:
                            console.log('controller connected to game ', this.appModel.gameId, ' as player ', this.appModel.playerNum);
                            this.splash.showConnection(this.appModel.gameId, this.appModel.playerNum);
                            break;
                    }
                };
                SplashMediator.prototype.requestGamesList = function () {
                    this.sendNotification(utils_1.Notifications.REQUEST_GAMES_LIST);
                };
                SplashMediator.prototype.connectToGame = function (gameId) {
                    console.log('attempting to connectto game ', gameId);
                    this.sendNotification(utils_1.Notifications.CONNECT_TO_GAME, gameId);
                };
                SplashMediator.prototype.updateGamesList = function () {
                    this.splash.refreshGamesList(this.appModel.gamesList);
                };
                SplashMediator.prototype.getGamesList = function () {
                    return this.appModel.gamesList;
                };
                Object.defineProperty(SplashMediator.prototype, "name", {
                    get: function () {
                        return SplashMediator.MEDIATOR_NAME;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(SplashMediator.prototype, "splash", {
                    get: function () {
                        return this._viewComponent;
                    },
                    enumerable: true,
                    configurable: true
                });
                SplashMediator.MEDIATOR_NAME = 'SplashMediator';
                return SplashMediator;
            }(BaseMediator_1.BaseMediator);
            exports_1("SplashMediator", SplashMediator);
        }
    };
});
$__System.register('6', ['7', '8', '5', '9', 'a'], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    var __extends = this && this.__extends || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var display_1, utils_1, SplashMediator_1, ui_1, utils_2;
    var Splash;
    return {
        setters: [function (display_1_1) {
            display_1 = display_1_1;
        }, function (utils_1_1) {
            utils_1 = utils_1_1;
        }, function (SplashMediator_1_1) {
            SplashMediator_1 = SplashMediator_1_1;
        }, function (ui_1_1) {
            ui_1 = ui_1_1;
        }, function (utils_2_1) {
            utils_2 = utils_2_1;
        }],
        execute: function () {
            Splash = function (_super) {
                __extends(Splash, _super);
                function Splash() {
                    _super.apply(this, arguments);
                    this.listContainer = null;
                    this.buttonHeight = 0;
                    this.buttons = {};
                }
                Splash.prototype.init = function () {
                    console.log('splash init!');
                    this.mediator = new SplashMediator_1.SplashMediator(this);
                };
                Splash.prototype.preload = function () {
                    console.log('splash preload');
                    this.app.asset.load(utils_2.Resources.UI_SPRITESHEET);
                };
                Splash.prototype.build = function () {
                    this.title = this.add.sprite(this.app.width * 0.5, 100, utils_2.Resources.UI_SPRITESHEET.id, 'title.png');
                    this.title.anchor.set(0.5, 0.5);
                    this.title.width = Math.min(this.app.width - 100, 737);
                    this.title.scale.y = this.title.scale.x;
                    this.title.y = this.title.height * 0.5 + 100;
                    this.splashText2 = this.addChild(new display_1.Text(this.app.width * 0.5, this.title.y + this.title.height * 0.5 + 50 * this.app.resolution, 'SELECT A GAME', utils_2.Fonts.STAG_SANS_BLACK, 32 * this.app.resolution, 0xffffff));
                    this.splashText2.anchor.set(0.5, 0.5);
                    this.listContainer = this.add.container(this.app.width * 0.5, this.splashText2.y + this.splashText2.height + 75 * this.app.resolution);
                    this.refreshGamesList(this.mediator.getGamesList());
                };
                Splash.prototype.refreshGamesList = function (gamesList) {
                    if (!this.listContainer || !gamesList) {
                        return;
                    }
                    this.listContainer.removeChildren();
                    this.buttons = {};
                    gamesList.forEach(this.addGameButton, this);
                };
                Splash.prototype.showConnection = function (gameId, playerNum) {
                    var _this = this;
                    this.buttons[gameId].setColor(Splash.COLOURS[playerNum - 1]);
                    utils_1.Time.wait(1).then(function () {
                        _this.proceedToGame();
                    });
                };
                Splash.prototype.proceedToGame = function () {
                    var _this = this;
                    utils_1.Animator.staggerTo([this.title, this.splashText2, this.listContainer], 0.5, { x: -500, ease: Back.easeIn }, 0.1).then(function () {
                        _this.app.state.to('play');
                    });
                };
                Splash.prototype.addGameButton = function (gameId) {
                    //const txt: Text = new Text(0, this.listContainer.children.length * 50, gameId, Fonts.STAG_SANS_BLACK, 36, 0);
                    var btn = new ui_1.TextButton(0, this.listContainer.children.length * (this.buttonHeight + 20), gameId, 'blue', false, this.app.width - 200);
                    this.buttons[gameId] = btn;
                    btn.interactive = true;
                    if (this.buttonHeight === 0) {
                        this.buttonHeight = btn.height;
                    }
                    btn.on('mousedown', this.onButtonPress, this).on('touchstart', this.onButtonPress, this);
                    btn.on('mouseup', this.onButtonRelease, this).on('touchend', this.onButtonRelease, this);
                    btn.on('mouseupoutside', this.onButtonReleaseOutside, this).on('touchendoutside', this.onButtonReleaseOutside, this);
                    this.listContainer.addChild(btn);
                };
                Splash.prototype.onButtonPress = function (e) {
                    var target = e.target,
                        btn = target;
                    if (!btn.enabled) {
                        return;
                    }
                    btn.down();
                };
                Splash.prototype.onButtonRelease = function (e) {
                    var target = e.target,
                        btn = target;
                    if (!btn.enabled) {
                        return;
                    }
                    btn.up(true);
                    this.mediator.connectToGame(btn.text);
                };
                Splash.prototype.onButtonReleaseOutside = function (e) {
                    var target = e.target,
                        btn = target;
                    if (!btn.enabled) {
                        return;
                    }
                    btn.up(false);
                };
                Splash.prototype.update = function () {};
                Splash.prototype.shutdown = function () {};
                Splash.COLOURS = ["pink", "blue", "green", "orange"];
                return Splash;
            }(display_1.State);
            exports_1("Splash", Splash);
        }
    };
});
$__System.register('b', ['7', 'a'], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    var __extends = this && this.__extends || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var display_1, utils_1;
    var TextButton;
    return {
        setters: [function (display_1_1) {
            display_1 = display_1_1;
        }, function (utils_1_1) {
            utils_1 = utils_1_1;
        }],
        execute: function () {
            TextButton = function (_super) {
                __extends(TextButton, _super);
                function TextButton(x, y, text, color, autoSetColor, buttonWidth) {
                    if (autoSetColor === void 0) {
                        autoSetColor = false;
                    }
                    if (buttonWidth === void 0) {
                        buttonWidth = 342.5;
                    }
                    _super.call(this, x, y);
                    this.color = color;
                    this.buttonWidth = buttonWidth;
                    this.enabled = true;
                    this._text = text;
                    this.build();
                    if (autoSetColor) {
                        this.setColor(this.color);
                    }
                }
                TextButton.prototype.build = function () {
                    this.bg = this.addChild(new display_1.Sprite(0, 0, utils_1.Resources.UI_SPRITESHEET.id, 'button_background.png'));
                    this.bg.anchor.set(0.5, 0.5);
                    this.bg.width = this.buttonWidth;
                    this.bg.scale.y = this.bg.scale.x;
                    this.bg.x = this.bg.y = 2 * this.bg.scale.x;
                    var gfx = this.addChild(new PIXI.Graphics());
                    gfx.beginFill(0xffffff);
                    gfx.drawRect(0, 0, this.buttonWidth - 6 * this.bg.scale.x, this.bg.height - 5 * this.bg.scale.x);
                    gfx.endFill();
                    this.colorBg = this.addChild(new display_1.Sprite(0, 0, gfx.generateTexture(this.app.renderer, 1)));
                    this.colorBg.anchor.set(0.5, 0.5);
                    this.colorBg.tint = 0x666666;
                    this.label = this.addChild(new display_1.Text(0, 0, this._text.toUpperCase(), utils_1.Fonts.STAG_SANS_BLACK, 24 * this.app.resolution, 0xffffff));
                    this.label.resolution = this.app.resolution;
                    this.label.anchor.set(0.5, 0.5);
                    this.removeChild(gfx);
                    gfx.destroy();
                };
                TextButton.prototype.down = function () {
                    this.colorBg.x = this.colorBg.y = this.label.x = this.label.y = 2 * this.bg.scale.x;
                    this.bg.visible = false;
                };
                TextButton.prototype.up = function (selected) {
                    if (selected === void 0) {
                        selected = false;
                    }
                    if (selected) {
                        this.enabled = false;
                    }
                    this.colorBg.x = this.colorBg.y = this.label.x = this.label.y = 0;
                    this.bg.visible = true;
                };
                TextButton.prototype.setColor = function (color) {
                    this.color = color;
                    this.colorBg.tint = utils_1.Colours.getPrimary(this.color);
                };
                Object.defineProperty(TextButton.prototype, "text", {
                    get: function () {
                        return this._text;
                    },
                    enumerable: true,
                    configurable: true
                });
                return TextButton;
            }(display_1.Container);
            exports_1("TextButton", TextButton);
        }
    };
});
$__System.register('c', ['8', 'a', '7'], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    var __extends = this && this.__extends || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var utils_1, utils_2, display_1;
    var Ribbon;
    return {
        setters: [function (utils_1_1) {
            utils_1 = utils_1_1;
        }, function (utils_2_1) {
            utils_2 = utils_2_1;
        }, function (display_1_1) {
            display_1 = display_1_1;
        }],
        execute: function () {
            Ribbon = function (_super) {
                __extends(Ribbon, _super);
                function Ribbon(x, y, color) {
                    _super.call(this, x, y);
                    this.color = color;
                    this.build();
                }
                Ribbon.prototype.build = function () {
                    var gfx = this.addChild(new PIXI.Graphics());
                    gfx.beginFill(utils_2.Colours.getDark(this.color));
                    gfx.drawCircle(0, 0, 75);
                    gfx.endFill();
                    this.bg = this.addChild(new display_1.Sprite(0, 0, gfx.generateTexture(this.app.renderer, this.app.resolution)));
                    gfx.destroy();
                    this.removeChild(gfx);
                    this.pivot.set(75, 75);
                    this.labelContainer = this.addChild(new display_1.Container(75, 75));
                    this.label = this.labelContainer.addChild(new display_1.Text(0, 0, '1', utils_2.Fonts.STAG_SANS_BLACK, 73, 0xffffff));
                    this.positionLabel = this.labelContainer.addChild(new display_1.Text(0, 0, 'ST', utils_2.Fonts.STAG_SANS_BLACK, 26, 0xffffff));
                    this.scale.set(0, 0);
                };
                Ribbon.prototype.setPosition = function (position) {
                    var posLabel;
                    switch (position) {
                        case 1:
                            posLabel = 'ST';
                            break;
                        case 2:
                            posLabel = 'ND';
                            break;
                        case 3:
                            posLabel = 'RD';
                            break;
                        case 4:
                            posLabel = 'TH';
                            break;
                    }
                    this.label.text = position.toString();
                    this.positionLabel.text = posLabel;
                    this.positionLabel.x = this.label.width + 2;
                    this.positionLabel.y = this.label.y + 10;
                    this.labelContainer.pivot.set(this.label.width, this.label.height * 0.5);
                    this.show();
                };
                Ribbon.prototype.show = function () {
                    utils_1.Animator.to(this.scale, .3, { x: 1, y: 1, ease: Back.easeOut });
                };
                return Ribbon;
            }(display_1.Container);
            exports_1("Ribbon", Ribbon);
        }
    };
});
$__System.register("d", [], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    var Device;
    return {
        setters: [],
        execute: function () {
            Device = function () {
                function Device() {}
                Object.defineProperty(Device, "mobile", {
                    get: function () {
                        return Device.mobileOS !== Device.UNKNOWN;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Device, "mobileOS", {
                    get: function () {
                        var userAgent = window.navigator.userAgent || window.navigator.vendor || window['opera'];
                        if (userAgent.match(/iPad/i) || userAgent.match(/iPhone/i) || userAgent.match(/iPod/i)) {
                            return Device.IOS;
                        } else if (userAgent.match(/Android/i)) {
                            return Device.ANDROID;
                        } else {
                            return Device.UNKNOWN;
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Device, "browser", {
                    get: function () {
                        var ua = navigator.userAgent.toLowerCase();
                        return {
                            firefox: ua.indexOf('firefox') > -1,
                            ie: ua.indexOf('ie') > -1,
                            safari: ua.indexOf('safari') > -1,
                            chrome: ua.indexOf('chrome') > -1
                        };
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Device, "pixelRatio", {
                    get: function () {
                        return typeof window.devicePixelRatio !== undefined ? window.devicePixelRatio : 1;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Device, "customPixelRatio", {
                    get: function () {
                        return Device.pixelRatio >= 1.5 ? 2 : 1;
                    },
                    enumerable: true,
                    configurable: true
                });
                Device.IOS = 'iOS';
                Device.ANDROID = 'android';
                Device.UNKNOWN = 'unknown';
                return Device;
            }();
            exports_1("Device", Device);
        }
    };
});
$__System.register("e", [], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    var Logger;
    return {
        setters: [],
        execute: function () {
            Logger = function () {
                function Logger() {}
                Logger.log = function (instance) {
                    var args = [];
                    for (var _i = 1; _i < arguments.length; _i++) {
                        args[_i - 1] = arguments[_i];
                    }
                    if (!Logger.enabled) {
                        return;
                    }
                    if (instance && instance.constructor) {
                        args.unshift(instance.constructor.toString().match(/\w+/g)[1] + ' ::');
                    }
                    return console.log.apply(console, args);
                };
                Logger.enabled = true;
                return Logger;
            }();
            exports_1("Logger", Logger);
        }
    };
});
$__System.register("f", [], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    var Notifications;
    return {
        setters: [],
        execute: function () {
            Notifications = function () {
                function Notifications() {}
                return Notifications;
            }();
            exports_1("Notifications", Notifications);
        }
    };
});
$__System.register("10", ["11"], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    var bluebird_1;
    var Animator;
    return {
        setters: [function (bluebird_1_1) {
            bluebird_1 = bluebird_1_1;
        }],
        execute: function () {
            Animator = function () {
                function Animator() {}
                Animator.to = function (target, duration, vars) {
                    return new bluebird_1.default(function (resolve, reject) {
                        vars.onComplete = resolve;
                        TweenMax.to(target, duration, vars);
                    });
                };
                Animator.from = function (target, duration, vars) {
                    return new bluebird_1.default(function (resolve, reject) {
                        vars.onComplete = function () {
                            return resolve(vars.onCompleteParams);
                        };
                        TweenMax.from(target, duration, vars);
                    });
                };
                Animator.fromTo = function (target, duration, fromVars, toVars) {
                    return new bluebird_1.default(function (resolve, reject) {
                        toVars.onComplete = function () {
                            return resolve(toVars.onCompleteParams);
                        };
                        TweenMax.fromTo(target, duration, fromVars, toVars);
                    });
                };
                Animator.staggerTo = function (targets, duration, vars, stagger, onCompleteParams) {
                    if (onCompleteParams === void 0) {
                        onCompleteParams = null;
                    }
                    return new bluebird_1.default(function (resolve, reject) {
                        TweenMax.staggerTo(targets, duration, vars, stagger, function () {
                            resolve(onCompleteParams);
                        });
                    });
                };
                Animator.staggerFrom = function (targets, duration, vars, stagger, onCompleteParams) {
                    if (onCompleteParams === void 0) {
                        onCompleteParams = null;
                    }
                    return new bluebird_1.default(function (resolve, reject) {
                        TweenMax.staggerFrom(targets, duration, vars, stagger, function () {
                            resolve(onCompleteParams);
                        });
                    });
                };
                Animator.staggerFromTo = function (targets, duration, fromVars, toVars, stagger, onCompleteParams) {
                    return new bluebird_1.default(function (resolve, reject) {
                        TweenMax.staggerFromTo(targets, duration, fromVars, toVars, stagger, function () {
                            resolve(onCompleteParams);
                        });
                    });
                };
                return Animator;
            }();
            exports_1("Animator", Animator);
        }
    };
});
$__System.registerDynamic("12", [], false, function ($__require, $__exports, $__module) {
    var _retrieveGlobal = $__System.get("@@global-helpers").prepareGlobal($__module.id, null, null);

    (function ($__global) {
        /* */
        "format global";
        /* @preserve
         * The MIT License (MIT)
         * 
         * Copyright (c) 2013-2015 Petka Antonov
         * 
         * Permission is hereby granted, free of charge, to any person obtaining a copy
         * of this software and associated documentation files (the "Software"), to deal
         * in the Software without restriction, including without limitation the rights
         * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
         * copies of the Software, and to permit persons to whom the Software is
         * furnished to do so, subject to the following conditions:
         * 
         * The above copyright notice and this permission notice shall be included in
         * all copies or substantial portions of the Software.
         * 
         * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
         * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
         * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
         * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
         * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
         * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
         * THE SOFTWARE.
         * 
         */
        /**
         * bluebird build version 3.4.6
         * Features enabled: core, race, call_get, generators, map, nodeify, promisify, props, reduce, settle, some, using, timers, filter, any, each
        */

        !function (e) {
            if ("object" == typeof exports && "undefined" != typeof module) module.exports = e();else if ("function" == typeof define && define.amd) define([], e);else {
                var f;"undefined" != typeof window ? f = window : "undefined" != typeof global ? f = global : "undefined" != typeof self && (f = self), f.Promise = e();
            }
        }(function () {
            var define, module, exports;return function e(t, n, r) {
                function s(o, u) {
                    if (!n[o]) {
                        if (!t[o]) {
                            var a = typeof _dereq_ == "function" && _dereq_;if (!u && a) return a(o, !0);if (i) return i(o, !0);var f = new Error("Cannot find module '" + o + "'");throw f.code = "MODULE_NOT_FOUND", f;
                        }var l = n[o] = { exports: {} };t[o][0].call(l.exports, function (e) {
                            var n = t[o][1][e];return s(n ? n : e);
                        }, l, l.exports, e, t, n, r);
                    }return n[o].exports;
                }var i = typeof _dereq_ == "function" && _dereq_;for (var o = 0; o < r.length; o++) s(r[o]);return s;
            }({ 1: [function (_dereq_, module, exports) {
                    "use strict";

                    module.exports = function (Promise) {
                        var SomePromiseArray = Promise._SomePromiseArray;
                        function any(promises) {
                            var ret = new SomePromiseArray(promises);
                            var promise = ret.promise();
                            ret.setHowMany(1);
                            ret.setUnwrap();
                            ret.init();
                            return promise;
                        }

                        Promise.any = function (promises) {
                            return any(promises);
                        };

                        Promise.prototype.any = function () {
                            return any(this);
                        };
                    };
                }, {}], 2: [function (_dereq_, module, exports) {
                    "use strict";

                    var firstLineError;
                    try {
                        throw new Error();
                    } catch (e) {
                        firstLineError = e;
                    }
                    var schedule = _dereq_("./schedule");
                    var Queue = _dereq_("./queue");
                    var util = _dereq_("./util");

                    function Async() {
                        this._customScheduler = false;
                        this._isTickUsed = false;
                        this._lateQueue = new Queue(16);
                        this._normalQueue = new Queue(16);
                        this._haveDrainedQueues = false;
                        this._trampolineEnabled = true;
                        var self = this;
                        this.drainQueues = function () {
                            self._drainQueues();
                        };
                        this._schedule = schedule;
                    }

                    Async.prototype.setScheduler = function (fn) {
                        var prev = this._schedule;
                        this._schedule = fn;
                        this._customScheduler = true;
                        return prev;
                    };

                    Async.prototype.hasCustomScheduler = function () {
                        return this._customScheduler;
                    };

                    Async.prototype.enableTrampoline = function () {
                        this._trampolineEnabled = true;
                    };

                    Async.prototype.disableTrampolineIfNecessary = function () {
                        if (util.hasDevTools) {
                            this._trampolineEnabled = false;
                        }
                    };

                    Async.prototype.haveItemsQueued = function () {
                        return this._isTickUsed || this._haveDrainedQueues;
                    };

                    Async.prototype.fatalError = function (e, isNode) {
                        if (isNode) {
                            process.stderr.write("Fatal " + (e instanceof Error ? e.stack : e) + "\n");
                            process.exit(2);
                        } else {
                            this.throwLater(e);
                        }
                    };

                    Async.prototype.throwLater = function (fn, arg) {
                        if (arguments.length === 1) {
                            arg = fn;
                            fn = function () {
                                throw arg;
                            };
                        }
                        if (typeof setTimeout !== "undefined") {
                            setTimeout(function () {
                                fn(arg);
                            }, 0);
                        } else try {
                            this._schedule(function () {
                                fn(arg);
                            });
                        } catch (e) {
                            throw new Error("No async scheduler available\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
                        }
                    };

                    function AsyncInvokeLater(fn, receiver, arg) {
                        this._lateQueue.push(fn, receiver, arg);
                        this._queueTick();
                    }

                    function AsyncInvoke(fn, receiver, arg) {
                        this._normalQueue.push(fn, receiver, arg);
                        this._queueTick();
                    }

                    function AsyncSettlePromises(promise) {
                        this._normalQueue._pushOne(promise);
                        this._queueTick();
                    }

                    if (!util.hasDevTools) {
                        Async.prototype.invokeLater = AsyncInvokeLater;
                        Async.prototype.invoke = AsyncInvoke;
                        Async.prototype.settlePromises = AsyncSettlePromises;
                    } else {
                        Async.prototype.invokeLater = function (fn, receiver, arg) {
                            if (this._trampolineEnabled) {
                                AsyncInvokeLater.call(this, fn, receiver, arg);
                            } else {
                                this._schedule(function () {
                                    setTimeout(function () {
                                        fn.call(receiver, arg);
                                    }, 100);
                                });
                            }
                        };

                        Async.prototype.invoke = function (fn, receiver, arg) {
                            if (this._trampolineEnabled) {
                                AsyncInvoke.call(this, fn, receiver, arg);
                            } else {
                                this._schedule(function () {
                                    fn.call(receiver, arg);
                                });
                            }
                        };

                        Async.prototype.settlePromises = function (promise) {
                            if (this._trampolineEnabled) {
                                AsyncSettlePromises.call(this, promise);
                            } else {
                                this._schedule(function () {
                                    promise._settlePromises();
                                });
                            }
                        };
                    }

                    Async.prototype.invokeFirst = function (fn, receiver, arg) {
                        this._normalQueue.unshift(fn, receiver, arg);
                        this._queueTick();
                    };

                    Async.prototype._drainQueue = function (queue) {
                        while (queue.length() > 0) {
                            var fn = queue.shift();
                            if (typeof fn !== "function") {
                                fn._settlePromises();
                                continue;
                            }
                            var receiver = queue.shift();
                            var arg = queue.shift();
                            fn.call(receiver, arg);
                        }
                    };

                    Async.prototype._drainQueues = function () {
                        this._drainQueue(this._normalQueue);
                        this._reset();
                        this._haveDrainedQueues = true;
                        this._drainQueue(this._lateQueue);
                    };

                    Async.prototype._queueTick = function () {
                        if (!this._isTickUsed) {
                            this._isTickUsed = true;
                            this._schedule(this.drainQueues);
                        }
                    };

                    Async.prototype._reset = function () {
                        this._isTickUsed = false;
                    };

                    module.exports = Async;
                    module.exports.firstLineError = firstLineError;
                }, { "./queue": 26, "./schedule": 29, "./util": 36 }], 3: [function (_dereq_, module, exports) {
                    "use strict";

                    module.exports = function (Promise, INTERNAL, tryConvertToPromise, debug) {
                        var calledBind = false;
                        var rejectThis = function (_, e) {
                            this._reject(e);
                        };

                        var targetRejected = function (e, context) {
                            context.promiseRejectionQueued = true;
                            context.bindingPromise._then(rejectThis, rejectThis, null, this, e);
                        };

                        var bindingResolved = function (thisArg, context) {
                            if ((this._bitField & 50397184) === 0) {
                                this._resolveCallback(context.target);
                            }
                        };

                        var bindingRejected = function (e, context) {
                            if (!context.promiseRejectionQueued) this._reject(e);
                        };

                        Promise.prototype.bind = function (thisArg) {
                            if (!calledBind) {
                                calledBind = true;
                                Promise.prototype._propagateFrom = debug.propagateFromFunction();
                                Promise.prototype._boundValue = debug.boundValueFunction();
                            }
                            var maybePromise = tryConvertToPromise(thisArg);
                            var ret = new Promise(INTERNAL);
                            ret._propagateFrom(this, 1);
                            var target = this._target();
                            ret._setBoundTo(maybePromise);
                            if (maybePromise instanceof Promise) {
                                var context = {
                                    promiseRejectionQueued: false,
                                    promise: ret,
                                    target: target,
                                    bindingPromise: maybePromise
                                };
                                target._then(INTERNAL, targetRejected, undefined, ret, context);
                                maybePromise._then(bindingResolved, bindingRejected, undefined, ret, context);
                                ret._setOnCancel(maybePromise);
                            } else {
                                ret._resolveCallback(target);
                            }
                            return ret;
                        };

                        Promise.prototype._setBoundTo = function (obj) {
                            if (obj !== undefined) {
                                this._bitField = this._bitField | 2097152;
                                this._boundTo = obj;
                            } else {
                                this._bitField = this._bitField & ~2097152;
                            }
                        };

                        Promise.prototype._isBound = function () {
                            return (this._bitField & 2097152) === 2097152;
                        };

                        Promise.bind = function (thisArg, value) {
                            return Promise.resolve(value).bind(thisArg);
                        };
                    };
                }, {}], 4: [function (_dereq_, module, exports) {
                    "use strict";

                    var old;
                    if (typeof Promise !== "undefined") old = Promise;
                    function noConflict() {
                        try {
                            if (Promise === bluebird) Promise = old;
                        } catch (e) {}
                        return bluebird;
                    }
                    var bluebird = _dereq_("./promise")();
                    bluebird.noConflict = noConflict;
                    module.exports = bluebird;
                }, { "./promise": 22 }], 5: [function (_dereq_, module, exports) {
                    "use strict";

                    var cr = Object.create;
                    if (cr) {
                        var callerCache = cr(null);
                        var getterCache = cr(null);
                        callerCache[" size"] = getterCache[" size"] = 0;
                    }

                    module.exports = function (Promise) {
                        var util = _dereq_("./util");
                        var canEvaluate = util.canEvaluate;
                        var isIdentifier = util.isIdentifier;

                        var getMethodCaller;
                        var getGetter;
                        if (!true) {
                            var makeMethodCaller = function (methodName) {
                                return new Function("ensureMethod", "                                    \n\
        return function(obj) {                                               \n\
            'use strict'                                                     \n\
            var len = this.length;                                           \n\
            ensureMethod(obj, 'methodName');                                 \n\
            switch(len) {                                                    \n\
                case 1: return obj.methodName(this[0]);                      \n\
                case 2: return obj.methodName(this[0], this[1]);             \n\
                case 3: return obj.methodName(this[0], this[1], this[2]);    \n\
                case 0: return obj.methodName();                             \n\
                default:                                                     \n\
                    return obj.methodName.apply(obj, this);                  \n\
            }                                                                \n\
        };                                                                   \n\
        ".replace(/methodName/g, methodName))(ensureMethod);
                            };

                            var makeGetter = function (propertyName) {
                                return new Function("obj", "                                             \n\
        'use strict';                                                        \n\
        return obj.propertyName;                                             \n\
        ".replace("propertyName", propertyName));
                            };

                            var getCompiled = function (name, compiler, cache) {
                                var ret = cache[name];
                                if (typeof ret !== "function") {
                                    if (!isIdentifier(name)) {
                                        return null;
                                    }
                                    ret = compiler(name);
                                    cache[name] = ret;
                                    cache[" size"]++;
                                    if (cache[" size"] > 512) {
                                        var keys = Object.keys(cache);
                                        for (var i = 0; i < 256; ++i) delete cache[keys[i]];
                                        cache[" size"] = keys.length - 256;
                                    }
                                }
                                return ret;
                            };

                            getMethodCaller = function (name) {
                                return getCompiled(name, makeMethodCaller, callerCache);
                            };

                            getGetter = function (name) {
                                return getCompiled(name, makeGetter, getterCache);
                            };
                        }

                        function ensureMethod(obj, methodName) {
                            var fn;
                            if (obj != null) fn = obj[methodName];
                            if (typeof fn !== "function") {
                                var message = "Object " + util.classString(obj) + " has no method '" + util.toString(methodName) + "'";
                                throw new Promise.TypeError(message);
                            }
                            return fn;
                        }

                        function caller(obj) {
                            var methodName = this.pop();
                            var fn = ensureMethod(obj, methodName);
                            return fn.apply(obj, this);
                        }
                        Promise.prototype.call = function (methodName) {
                            var args = [].slice.call(arguments, 1);;
                            if (!true) {
                                if (canEvaluate) {
                                    var maybeCaller = getMethodCaller(methodName);
                                    if (maybeCaller !== null) {
                                        return this._then(maybeCaller, undefined, undefined, args, undefined);
                                    }
                                }
                            }
                            args.push(methodName);
                            return this._then(caller, undefined, undefined, args, undefined);
                        };

                        function namedGetter(obj) {
                            return obj[this];
                        }
                        function indexedGetter(obj) {
                            var index = +this;
                            if (index < 0) index = Math.max(0, index + obj.length);
                            return obj[index];
                        }
                        Promise.prototype.get = function (propertyName) {
                            var isIndex = typeof propertyName === "number";
                            var getter;
                            if (!isIndex) {
                                if (canEvaluate) {
                                    var maybeGetter = getGetter(propertyName);
                                    getter = maybeGetter !== null ? maybeGetter : namedGetter;
                                } else {
                                    getter = namedGetter;
                                }
                            } else {
                                getter = indexedGetter;
                            }
                            return this._then(getter, undefined, undefined, propertyName, undefined);
                        };
                    };
                }, { "./util": 36 }], 6: [function (_dereq_, module, exports) {
                    "use strict";

                    module.exports = function (Promise, PromiseArray, apiRejection, debug) {
                        var util = _dereq_("./util");
                        var tryCatch = util.tryCatch;
                        var errorObj = util.errorObj;
                        var async = Promise._async;

                        Promise.prototype["break"] = Promise.prototype.cancel = function () {
                            if (!debug.cancellation()) return this._warn("cancellation is disabled");

                            var promise = this;
                            var child = promise;
                            while (promise._isCancellable()) {
                                if (!promise._cancelBy(child)) {
                                    if (child._isFollowing()) {
                                        child._followee().cancel();
                                    } else {
                                        child._cancelBranched();
                                    }
                                    break;
                                }

                                var parent = promise._cancellationParent;
                                if (parent == null || !parent._isCancellable()) {
                                    if (promise._isFollowing()) {
                                        promise._followee().cancel();
                                    } else {
                                        promise._cancelBranched();
                                    }
                                    break;
                                } else {
                                    if (promise._isFollowing()) promise._followee().cancel();
                                    promise._setWillBeCancelled();
                                    child = promise;
                                    promise = parent;
                                }
                            }
                        };

                        Promise.prototype._branchHasCancelled = function () {
                            this._branchesRemainingToCancel--;
                        };

                        Promise.prototype._enoughBranchesHaveCancelled = function () {
                            return this._branchesRemainingToCancel === undefined || this._branchesRemainingToCancel <= 0;
                        };

                        Promise.prototype._cancelBy = function (canceller) {
                            if (canceller === this) {
                                this._branchesRemainingToCancel = 0;
                                this._invokeOnCancel();
                                return true;
                            } else {
                                this._branchHasCancelled();
                                if (this._enoughBranchesHaveCancelled()) {
                                    this._invokeOnCancel();
                                    return true;
                                }
                            }
                            return false;
                        };

                        Promise.prototype._cancelBranched = function () {
                            if (this._enoughBranchesHaveCancelled()) {
                                this._cancel();
                            }
                        };

                        Promise.prototype._cancel = function () {
                            if (!this._isCancellable()) return;
                            this._setCancelled();
                            async.invoke(this._cancelPromises, this, undefined);
                        };

                        Promise.prototype._cancelPromises = function () {
                            if (this._length() > 0) this._settlePromises();
                        };

                        Promise.prototype._unsetOnCancel = function () {
                            this._onCancelField = undefined;
                        };

                        Promise.prototype._isCancellable = function () {
                            return this.isPending() && !this._isCancelled();
                        };

                        Promise.prototype.isCancellable = function () {
                            return this.isPending() && !this.isCancelled();
                        };

                        Promise.prototype._doInvokeOnCancel = function (onCancelCallback, internalOnly) {
                            if (util.isArray(onCancelCallback)) {
                                for (var i = 0; i < onCancelCallback.length; ++i) {
                                    this._doInvokeOnCancel(onCancelCallback[i], internalOnly);
                                }
                            } else if (onCancelCallback !== undefined) {
                                if (typeof onCancelCallback === "function") {
                                    if (!internalOnly) {
                                        var e = tryCatch(onCancelCallback).call(this._boundValue());
                                        if (e === errorObj) {
                                            this._attachExtraTrace(e.e);
                                            async.throwLater(e.e);
                                        }
                                    }
                                } else {
                                    onCancelCallback._resultCancelled(this);
                                }
                            }
                        };

                        Promise.prototype._invokeOnCancel = function () {
                            var onCancelCallback = this._onCancel();
                            this._unsetOnCancel();
                            async.invoke(this._doInvokeOnCancel, this, onCancelCallback);
                        };

                        Promise.prototype._invokeInternalOnCancel = function () {
                            if (this._isCancellable()) {
                                this._doInvokeOnCancel(this._onCancel(), true);
                                this._unsetOnCancel();
                            }
                        };

                        Promise.prototype._resultCancelled = function () {
                            this.cancel();
                        };
                    };
                }, { "./util": 36 }], 7: [function (_dereq_, module, exports) {
                    "use strict";

                    module.exports = function (NEXT_FILTER) {
                        var util = _dereq_("./util");
                        var getKeys = _dereq_("./es5").keys;
                        var tryCatch = util.tryCatch;
                        var errorObj = util.errorObj;

                        function catchFilter(instances, cb, promise) {
                            return function (e) {
                                var boundTo = promise._boundValue();
                                predicateLoop: for (var i = 0; i < instances.length; ++i) {
                                    var item = instances[i];

                                    if (item === Error || item != null && item.prototype instanceof Error) {
                                        if (e instanceof item) {
                                            return tryCatch(cb).call(boundTo, e);
                                        }
                                    } else if (typeof item === "function") {
                                        var matchesPredicate = tryCatch(item).call(boundTo, e);
                                        if (matchesPredicate === errorObj) {
                                            return matchesPredicate;
                                        } else if (matchesPredicate) {
                                            return tryCatch(cb).call(boundTo, e);
                                        }
                                    } else if (util.isObject(e)) {
                                        var keys = getKeys(item);
                                        for (var j = 0; j < keys.length; ++j) {
                                            var key = keys[j];
                                            if (item[key] != e[key]) {
                                                continue predicateLoop;
                                            }
                                        }
                                        return tryCatch(cb).call(boundTo, e);
                                    }
                                }
                                return NEXT_FILTER;
                            };
                        }

                        return catchFilter;
                    };
                }, { "./es5": 13, "./util": 36 }], 8: [function (_dereq_, module, exports) {
                    "use strict";

                    module.exports = function (Promise) {
                        var longStackTraces = false;
                        var contextStack = [];

                        Promise.prototype._promiseCreated = function () {};
                        Promise.prototype._pushContext = function () {};
                        Promise.prototype._popContext = function () {
                            return null;
                        };
                        Promise._peekContext = Promise.prototype._peekContext = function () {};

                        function Context() {
                            this._trace = new Context.CapturedTrace(peekContext());
                        }
                        Context.prototype._pushContext = function () {
                            if (this._trace !== undefined) {
                                this._trace._promiseCreated = null;
                                contextStack.push(this._trace);
                            }
                        };

                        Context.prototype._popContext = function () {
                            if (this._trace !== undefined) {
                                var trace = contextStack.pop();
                                var ret = trace._promiseCreated;
                                trace._promiseCreated = null;
                                return ret;
                            }
                            return null;
                        };

                        function createContext() {
                            if (longStackTraces) return new Context();
                        }

                        function peekContext() {
                            var lastIndex = contextStack.length - 1;
                            if (lastIndex >= 0) {
                                return contextStack[lastIndex];
                            }
                            return undefined;
                        }
                        Context.CapturedTrace = null;
                        Context.create = createContext;
                        Context.deactivateLongStackTraces = function () {};
                        Context.activateLongStackTraces = function () {
                            var Promise_pushContext = Promise.prototype._pushContext;
                            var Promise_popContext = Promise.prototype._popContext;
                            var Promise_PeekContext = Promise._peekContext;
                            var Promise_peekContext = Promise.prototype._peekContext;
                            var Promise_promiseCreated = Promise.prototype._promiseCreated;
                            Context.deactivateLongStackTraces = function () {
                                Promise.prototype._pushContext = Promise_pushContext;
                                Promise.prototype._popContext = Promise_popContext;
                                Promise._peekContext = Promise_PeekContext;
                                Promise.prototype._peekContext = Promise_peekContext;
                                Promise.prototype._promiseCreated = Promise_promiseCreated;
                                longStackTraces = false;
                            };
                            longStackTraces = true;
                            Promise.prototype._pushContext = Context.prototype._pushContext;
                            Promise.prototype._popContext = Context.prototype._popContext;
                            Promise._peekContext = Promise.prototype._peekContext = peekContext;
                            Promise.prototype._promiseCreated = function () {
                                var ctx = this._peekContext();
                                if (ctx && ctx._promiseCreated == null) ctx._promiseCreated = this;
                            };
                        };
                        return Context;
                    };
                }, {}], 9: [function (_dereq_, module, exports) {
                    "use strict";

                    module.exports = function (Promise, Context) {
                        var getDomain = Promise._getDomain;
                        var async = Promise._async;
                        var Warning = _dereq_("./errors").Warning;
                        var util = _dereq_("./util");
                        var canAttachTrace = util.canAttachTrace;
                        var unhandledRejectionHandled;
                        var possiblyUnhandledRejection;
                        var bluebirdFramePattern = /[\\\/]bluebird[\\\/]js[\\\/](release|debug|instrumented)/;
                        var nodeFramePattern = /\((?:timers\.js):\d+:\d+\)/;
                        var parseLinePattern = /[\/<\(](.+?):(\d+):(\d+)\)?\s*$/;
                        var stackFramePattern = null;
                        var formatStack = null;
                        var indentStackFrames = false;
                        var printWarning;
                        var debugging = !!(util.env("BLUEBIRD_DEBUG") != 0 && (true || util.env("BLUEBIRD_DEBUG") || util.env("NODE_ENV") === "development"));

                        var warnings = !!(util.env("BLUEBIRD_WARNINGS") != 0 && (debugging || util.env("BLUEBIRD_WARNINGS")));

                        var longStackTraces = !!(util.env("BLUEBIRD_LONG_STACK_TRACES") != 0 && (debugging || util.env("BLUEBIRD_LONG_STACK_TRACES")));

                        var wForgottenReturn = util.env("BLUEBIRD_W_FORGOTTEN_RETURN") != 0 && (warnings || !!util.env("BLUEBIRD_W_FORGOTTEN_RETURN"));

                        Promise.prototype.suppressUnhandledRejections = function () {
                            var target = this._target();
                            target._bitField = target._bitField & ~1048576 | 524288;
                        };

                        Promise.prototype._ensurePossibleRejectionHandled = function () {
                            if ((this._bitField & 524288) !== 0) return;
                            this._setRejectionIsUnhandled();
                            async.invokeLater(this._notifyUnhandledRejection, this, undefined);
                        };

                        Promise.prototype._notifyUnhandledRejectionIsHandled = function () {
                            fireRejectionEvent("rejectionHandled", unhandledRejectionHandled, undefined, this);
                        };

                        Promise.prototype._setReturnedNonUndefined = function () {
                            this._bitField = this._bitField | 268435456;
                        };

                        Promise.prototype._returnedNonUndefined = function () {
                            return (this._bitField & 268435456) !== 0;
                        };

                        Promise.prototype._notifyUnhandledRejection = function () {
                            if (this._isRejectionUnhandled()) {
                                var reason = this._settledValue();
                                this._setUnhandledRejectionIsNotified();
                                fireRejectionEvent("unhandledRejection", possiblyUnhandledRejection, reason, this);
                            }
                        };

                        Promise.prototype._setUnhandledRejectionIsNotified = function () {
                            this._bitField = this._bitField | 262144;
                        };

                        Promise.prototype._unsetUnhandledRejectionIsNotified = function () {
                            this._bitField = this._bitField & ~262144;
                        };

                        Promise.prototype._isUnhandledRejectionNotified = function () {
                            return (this._bitField & 262144) > 0;
                        };

                        Promise.prototype._setRejectionIsUnhandled = function () {
                            this._bitField = this._bitField | 1048576;
                        };

                        Promise.prototype._unsetRejectionIsUnhandled = function () {
                            this._bitField = this._bitField & ~1048576;
                            if (this._isUnhandledRejectionNotified()) {
                                this._unsetUnhandledRejectionIsNotified();
                                this._notifyUnhandledRejectionIsHandled();
                            }
                        };

                        Promise.prototype._isRejectionUnhandled = function () {
                            return (this._bitField & 1048576) > 0;
                        };

                        Promise.prototype._warn = function (message, shouldUseOwnTrace, promise) {
                            return warn(message, shouldUseOwnTrace, promise || this);
                        };

                        Promise.onPossiblyUnhandledRejection = function (fn) {
                            var domain = getDomain();
                            possiblyUnhandledRejection = typeof fn === "function" ? domain === null ? fn : util.domainBind(domain, fn) : undefined;
                        };

                        Promise.onUnhandledRejectionHandled = function (fn) {
                            var domain = getDomain();
                            unhandledRejectionHandled = typeof fn === "function" ? domain === null ? fn : util.domainBind(domain, fn) : undefined;
                        };

                        var disableLongStackTraces = function () {};
                        Promise.longStackTraces = function () {
                            if (async.haveItemsQueued() && !config.longStackTraces) {
                                throw new Error("cannot enable long stack traces after promises have been created\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
                            }
                            if (!config.longStackTraces && longStackTracesIsSupported()) {
                                var Promise_captureStackTrace = Promise.prototype._captureStackTrace;
                                var Promise_attachExtraTrace = Promise.prototype._attachExtraTrace;
                                config.longStackTraces = true;
                                disableLongStackTraces = function () {
                                    if (async.haveItemsQueued() && !config.longStackTraces) {
                                        throw new Error("cannot enable long stack traces after promises have been created\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
                                    }
                                    Promise.prototype._captureStackTrace = Promise_captureStackTrace;
                                    Promise.prototype._attachExtraTrace = Promise_attachExtraTrace;
                                    Context.deactivateLongStackTraces();
                                    async.enableTrampoline();
                                    config.longStackTraces = false;
                                };
                                Promise.prototype._captureStackTrace = longStackTracesCaptureStackTrace;
                                Promise.prototype._attachExtraTrace = longStackTracesAttachExtraTrace;
                                Context.activateLongStackTraces();
                                async.disableTrampolineIfNecessary();
                            }
                        };

                        Promise.hasLongStackTraces = function () {
                            return config.longStackTraces && longStackTracesIsSupported();
                        };

                        var fireDomEvent = function () {
                            try {
                                if (typeof CustomEvent === "function") {
                                    var event = new CustomEvent("CustomEvent");
                                    util.global.dispatchEvent(event);
                                    return function (name, event) {
                                        var domEvent = new CustomEvent(name.toLowerCase(), {
                                            detail: event,
                                            cancelable: true
                                        });
                                        return !util.global.dispatchEvent(domEvent);
                                    };
                                } else if (typeof Event === "function") {
                                    var event = new Event("CustomEvent");
                                    util.global.dispatchEvent(event);
                                    return function (name, event) {
                                        var domEvent = new Event(name.toLowerCase(), {
                                            cancelable: true
                                        });
                                        domEvent.detail = event;
                                        return !util.global.dispatchEvent(domEvent);
                                    };
                                } else {
                                    var event = document.createEvent("CustomEvent");
                                    event.initCustomEvent("testingtheevent", false, true, {});
                                    util.global.dispatchEvent(event);
                                    return function (name, event) {
                                        var domEvent = document.createEvent("CustomEvent");
                                        domEvent.initCustomEvent(name.toLowerCase(), false, true, event);
                                        return !util.global.dispatchEvent(domEvent);
                                    };
                                }
                            } catch (e) {}
                            return function () {
                                return false;
                            };
                        }();

                        var fireGlobalEvent = function () {
                            if (util.isNode) {
                                return function () {
                                    return process.emit.apply(process, arguments);
                                };
                            } else {
                                if (!util.global) {
                                    return function () {
                                        return false;
                                    };
                                }
                                return function (name) {
                                    var methodName = "on" + name.toLowerCase();
                                    var method = util.global[methodName];
                                    if (!method) return false;
                                    method.apply(util.global, [].slice.call(arguments, 1));
                                    return true;
                                };
                            }
                        }();

                        function generatePromiseLifecycleEventObject(name, promise) {
                            return { promise: promise };
                        }

                        var eventToObjectGenerator = {
                            promiseCreated: generatePromiseLifecycleEventObject,
                            promiseFulfilled: generatePromiseLifecycleEventObject,
                            promiseRejected: generatePromiseLifecycleEventObject,
                            promiseResolved: generatePromiseLifecycleEventObject,
                            promiseCancelled: generatePromiseLifecycleEventObject,
                            promiseChained: function (name, promise, child) {
                                return { promise: promise, child: child };
                            },
                            warning: function (name, warning) {
                                return { warning: warning };
                            },
                            unhandledRejection: function (name, reason, promise) {
                                return { reason: reason, promise: promise };
                            },
                            rejectionHandled: generatePromiseLifecycleEventObject
                        };

                        var activeFireEvent = function (name) {
                            var globalEventFired = false;
                            try {
                                globalEventFired = fireGlobalEvent.apply(null, arguments);
                            } catch (e) {
                                async.throwLater(e);
                                globalEventFired = true;
                            }

                            var domEventFired = false;
                            try {
                                domEventFired = fireDomEvent(name, eventToObjectGenerator[name].apply(null, arguments));
                            } catch (e) {
                                async.throwLater(e);
                                domEventFired = true;
                            }

                            return domEventFired || globalEventFired;
                        };

                        Promise.config = function (opts) {
                            opts = Object(opts);
                            if ("longStackTraces" in opts) {
                                if (opts.longStackTraces) {
                                    Promise.longStackTraces();
                                } else if (!opts.longStackTraces && Promise.hasLongStackTraces()) {
                                    disableLongStackTraces();
                                }
                            }
                            if ("warnings" in opts) {
                                var warningsOption = opts.warnings;
                                config.warnings = !!warningsOption;
                                wForgottenReturn = config.warnings;

                                if (util.isObject(warningsOption)) {
                                    if ("wForgottenReturn" in warningsOption) {
                                        wForgottenReturn = !!warningsOption.wForgottenReturn;
                                    }
                                }
                            }
                            if ("cancellation" in opts && opts.cancellation && !config.cancellation) {
                                if (async.haveItemsQueued()) {
                                    throw new Error("cannot enable cancellation after promises are in use");
                                }
                                Promise.prototype._clearCancellationData = cancellationClearCancellationData;
                                Promise.prototype._propagateFrom = cancellationPropagateFrom;
                                Promise.prototype._onCancel = cancellationOnCancel;
                                Promise.prototype._setOnCancel = cancellationSetOnCancel;
                                Promise.prototype._attachCancellationCallback = cancellationAttachCancellationCallback;
                                Promise.prototype._execute = cancellationExecute;
                                propagateFromFunction = cancellationPropagateFrom;
                                config.cancellation = true;
                            }
                            if ("monitoring" in opts) {
                                if (opts.monitoring && !config.monitoring) {
                                    config.monitoring = true;
                                    Promise.prototype._fireEvent = activeFireEvent;
                                } else if (!opts.monitoring && config.monitoring) {
                                    config.monitoring = false;
                                    Promise.prototype._fireEvent = defaultFireEvent;
                                }
                            }
                        };

                        function defaultFireEvent() {
                            return false;
                        }

                        Promise.prototype._fireEvent = defaultFireEvent;
                        Promise.prototype._execute = function (executor, resolve, reject) {
                            try {
                                executor(resolve, reject);
                            } catch (e) {
                                return e;
                            }
                        };
                        Promise.prototype._onCancel = function () {};
                        Promise.prototype._setOnCancel = function (handler) {
                            ;
                        };
                        Promise.prototype._attachCancellationCallback = function (onCancel) {
                            ;
                        };
                        Promise.prototype._captureStackTrace = function () {};
                        Promise.prototype._attachExtraTrace = function () {};
                        Promise.prototype._clearCancellationData = function () {};
                        Promise.prototype._propagateFrom = function (parent, flags) {
                            ;
                            ;
                        };

                        function cancellationExecute(executor, resolve, reject) {
                            var promise = this;
                            try {
                                executor(resolve, reject, function (onCancel) {
                                    if (typeof onCancel !== "function") {
                                        throw new TypeError("onCancel must be a function, got: " + util.toString(onCancel));
                                    }
                                    promise._attachCancellationCallback(onCancel);
                                });
                            } catch (e) {
                                return e;
                            }
                        }

                        function cancellationAttachCancellationCallback(onCancel) {
                            if (!this._isCancellable()) return this;

                            var previousOnCancel = this._onCancel();
                            if (previousOnCancel !== undefined) {
                                if (util.isArray(previousOnCancel)) {
                                    previousOnCancel.push(onCancel);
                                } else {
                                    this._setOnCancel([previousOnCancel, onCancel]);
                                }
                            } else {
                                this._setOnCancel(onCancel);
                            }
                        }

                        function cancellationOnCancel() {
                            return this._onCancelField;
                        }

                        function cancellationSetOnCancel(onCancel) {
                            this._onCancelField = onCancel;
                        }

                        function cancellationClearCancellationData() {
                            this._cancellationParent = undefined;
                            this._onCancelField = undefined;
                        }

                        function cancellationPropagateFrom(parent, flags) {
                            if ((flags & 1) !== 0) {
                                this._cancellationParent = parent;
                                var branchesRemainingToCancel = parent._branchesRemainingToCancel;
                                if (branchesRemainingToCancel === undefined) {
                                    branchesRemainingToCancel = 0;
                                }
                                parent._branchesRemainingToCancel = branchesRemainingToCancel + 1;
                            }
                            if ((flags & 2) !== 0 && parent._isBound()) {
                                this._setBoundTo(parent._boundTo);
                            }
                        }

                        function bindingPropagateFrom(parent, flags) {
                            if ((flags & 2) !== 0 && parent._isBound()) {
                                this._setBoundTo(parent._boundTo);
                            }
                        }
                        var propagateFromFunction = bindingPropagateFrom;

                        function boundValueFunction() {
                            var ret = this._boundTo;
                            if (ret !== undefined) {
                                if (ret instanceof Promise) {
                                    if (ret.isFulfilled()) {
                                        return ret.value();
                                    } else {
                                        return undefined;
                                    }
                                }
                            }
                            return ret;
                        }

                        function longStackTracesCaptureStackTrace() {
                            this._trace = new CapturedTrace(this._peekContext());
                        }

                        function longStackTracesAttachExtraTrace(error, ignoreSelf) {
                            if (canAttachTrace(error)) {
                                var trace = this._trace;
                                if (trace !== undefined) {
                                    if (ignoreSelf) trace = trace._parent;
                                }
                                if (trace !== undefined) {
                                    trace.attachExtraTrace(error);
                                } else if (!error.__stackCleaned__) {
                                    var parsed = parseStackAndMessage(error);
                                    util.notEnumerableProp(error, "stack", parsed.message + "\n" + parsed.stack.join("\n"));
                                    util.notEnumerableProp(error, "__stackCleaned__", true);
                                }
                            }
                        }

                        function checkForgottenReturns(returnValue, promiseCreated, name, promise, parent) {
                            if (returnValue === undefined && promiseCreated !== null && wForgottenReturn) {
                                if (parent !== undefined && parent._returnedNonUndefined()) return;
                                if ((promise._bitField & 65535) === 0) return;

                                if (name) name = name + " ";
                                var handlerLine = "";
                                var creatorLine = "";
                                if (promiseCreated._trace) {
                                    var traceLines = promiseCreated._trace.stack.split("\n");
                                    var stack = cleanStack(traceLines);
                                    for (var i = stack.length - 1; i >= 0; --i) {
                                        var line = stack[i];
                                        if (!nodeFramePattern.test(line)) {
                                            var lineMatches = line.match(parseLinePattern);
                                            if (lineMatches) {
                                                handlerLine = "at " + lineMatches[1] + ":" + lineMatches[2] + ":" + lineMatches[3] + " ";
                                            }
                                            break;
                                        }
                                    }

                                    if (stack.length > 0) {
                                        var firstUserLine = stack[0];
                                        for (var i = 0; i < traceLines.length; ++i) {

                                            if (traceLines[i] === firstUserLine) {
                                                if (i > 0) {
                                                    creatorLine = "\n" + traceLines[i - 1];
                                                }
                                                break;
                                            }
                                        }
                                    }
                                }
                                var msg = "a promise was created in a " + name + "handler " + handlerLine + "but was not returned from it, " + "see http://goo.gl/rRqMUw" + creatorLine;
                                promise._warn(msg, true, promiseCreated);
                            }
                        }

                        function deprecated(name, replacement) {
                            var message = name + " is deprecated and will be removed in a future version.";
                            if (replacement) message += " Use " + replacement + " instead.";
                            return warn(message);
                        }

                        function warn(message, shouldUseOwnTrace, promise) {
                            if (!config.warnings) return;
                            var warning = new Warning(message);
                            var ctx;
                            if (shouldUseOwnTrace) {
                                promise._attachExtraTrace(warning);
                            } else if (config.longStackTraces && (ctx = Promise._peekContext())) {
                                ctx.attachExtraTrace(warning);
                            } else {
                                var parsed = parseStackAndMessage(warning);
                                warning.stack = parsed.message + "\n" + parsed.stack.join("\n");
                            }

                            if (!activeFireEvent("warning", warning)) {
                                formatAndLogError(warning, "", true);
                            }
                        }

                        function reconstructStack(message, stacks) {
                            for (var i = 0; i < stacks.length - 1; ++i) {
                                stacks[i].push("From previous event:");
                                stacks[i] = stacks[i].join("\n");
                            }
                            if (i < stacks.length) {
                                stacks[i] = stacks[i].join("\n");
                            }
                            return message + "\n" + stacks.join("\n");
                        }

                        function removeDuplicateOrEmptyJumps(stacks) {
                            for (var i = 0; i < stacks.length; ++i) {
                                if (stacks[i].length === 0 || i + 1 < stacks.length && stacks[i][0] === stacks[i + 1][0]) {
                                    stacks.splice(i, 1);
                                    i--;
                                }
                            }
                        }

                        function removeCommonRoots(stacks) {
                            var current = stacks[0];
                            for (var i = 1; i < stacks.length; ++i) {
                                var prev = stacks[i];
                                var currentLastIndex = current.length - 1;
                                var currentLastLine = current[currentLastIndex];
                                var commonRootMeetPoint = -1;

                                for (var j = prev.length - 1; j >= 0; --j) {
                                    if (prev[j] === currentLastLine) {
                                        commonRootMeetPoint = j;
                                        break;
                                    }
                                }

                                for (var j = commonRootMeetPoint; j >= 0; --j) {
                                    var line = prev[j];
                                    if (current[currentLastIndex] === line) {
                                        current.pop();
                                        currentLastIndex--;
                                    } else {
                                        break;
                                    }
                                }
                                current = prev;
                            }
                        }

                        function cleanStack(stack) {
                            var ret = [];
                            for (var i = 0; i < stack.length; ++i) {
                                var line = stack[i];
                                var isTraceLine = "    (No stack trace)" === line || stackFramePattern.test(line);
                                var isInternalFrame = isTraceLine && shouldIgnore(line);
                                if (isTraceLine && !isInternalFrame) {
                                    if (indentStackFrames && line.charAt(0) !== " ") {
                                        line = "    " + line;
                                    }
                                    ret.push(line);
                                }
                            }
                            return ret;
                        }

                        function stackFramesAsArray(error) {
                            var stack = error.stack.replace(/\s+$/g, "").split("\n");
                            for (var i = 0; i < stack.length; ++i) {
                                var line = stack[i];
                                if ("    (No stack trace)" === line || stackFramePattern.test(line)) {
                                    break;
                                }
                            }
                            if (i > 0) {
                                stack = stack.slice(i);
                            }
                            return stack;
                        }

                        function parseStackAndMessage(error) {
                            var stack = error.stack;
                            var message = error.toString();
                            stack = typeof stack === "string" && stack.length > 0 ? stackFramesAsArray(error) : ["    (No stack trace)"];
                            return {
                                message: message,
                                stack: cleanStack(stack)
                            };
                        }

                        function formatAndLogError(error, title, isSoft) {
                            if (typeof console !== "undefined") {
                                var message;
                                if (util.isObject(error)) {
                                    var stack = error.stack;
                                    message = title + formatStack(stack, error);
                                } else {
                                    message = title + String(error);
                                }
                                if (typeof printWarning === "function") {
                                    printWarning(message, isSoft);
                                } else if (typeof console.log === "function" || typeof console.log === "object") {
                                    console.log(message);
                                }
                            }
                        }

                        function fireRejectionEvent(name, localHandler, reason, promise) {
                            var localEventFired = false;
                            try {
                                if (typeof localHandler === "function") {
                                    localEventFired = true;
                                    if (name === "rejectionHandled") {
                                        localHandler(promise);
                                    } else {
                                        localHandler(reason, promise);
                                    }
                                }
                            } catch (e) {
                                async.throwLater(e);
                            }

                            if (name === "unhandledRejection") {
                                if (!activeFireEvent(name, reason, promise) && !localEventFired) {
                                    formatAndLogError(reason, "Unhandled rejection ");
                                }
                            } else {
                                activeFireEvent(name, promise);
                            }
                        }

                        function formatNonError(obj) {
                            var str;
                            if (typeof obj === "function") {
                                str = "[function " + (obj.name || "anonymous") + "]";
                            } else {
                                str = obj && typeof obj.toString === "function" ? obj.toString() : util.toString(obj);
                                var ruselessToString = /\[object [a-zA-Z0-9$_]+\]/;
                                if (ruselessToString.test(str)) {
                                    try {
                                        var newStr = JSON.stringify(obj);
                                        str = newStr;
                                    } catch (e) {}
                                }
                                if (str.length === 0) {
                                    str = "(empty array)";
                                }
                            }
                            return "(<" + snip(str) + ">, no stack trace)";
                        }

                        function snip(str) {
                            var maxChars = 41;
                            if (str.length < maxChars) {
                                return str;
                            }
                            return str.substr(0, maxChars - 3) + "...";
                        }

                        function longStackTracesIsSupported() {
                            return typeof captureStackTrace === "function";
                        }

                        var shouldIgnore = function () {
                            return false;
                        };
                        var parseLineInfoRegex = /[\/<\(]([^:\/]+):(\d+):(?:\d+)\)?\s*$/;
                        function parseLineInfo(line) {
                            var matches = line.match(parseLineInfoRegex);
                            if (matches) {
                                return {
                                    fileName: matches[1],
                                    line: parseInt(matches[2], 10)
                                };
                            }
                        }

                        function setBounds(firstLineError, lastLineError) {
                            if (!longStackTracesIsSupported()) return;
                            var firstStackLines = firstLineError.stack.split("\n");
                            var lastStackLines = lastLineError.stack.split("\n");
                            var firstIndex = -1;
                            var lastIndex = -1;
                            var firstFileName;
                            var lastFileName;
                            for (var i = 0; i < firstStackLines.length; ++i) {
                                var result = parseLineInfo(firstStackLines[i]);
                                if (result) {
                                    firstFileName = result.fileName;
                                    firstIndex = result.line;
                                    break;
                                }
                            }
                            for (var i = 0; i < lastStackLines.length; ++i) {
                                var result = parseLineInfo(lastStackLines[i]);
                                if (result) {
                                    lastFileName = result.fileName;
                                    lastIndex = result.line;
                                    break;
                                }
                            }
                            if (firstIndex < 0 || lastIndex < 0 || !firstFileName || !lastFileName || firstFileName !== lastFileName || firstIndex >= lastIndex) {
                                return;
                            }

                            shouldIgnore = function (line) {
                                if (bluebirdFramePattern.test(line)) return true;
                                var info = parseLineInfo(line);
                                if (info) {
                                    if (info.fileName === firstFileName && firstIndex <= info.line && info.line <= lastIndex) {
                                        return true;
                                    }
                                }
                                return false;
                            };
                        }

                        function CapturedTrace(parent) {
                            this._parent = parent;
                            this._promisesCreated = 0;
                            var length = this._length = 1 + (parent === undefined ? 0 : parent._length);
                            captureStackTrace(this, CapturedTrace);
                            if (length > 32) this.uncycle();
                        }
                        util.inherits(CapturedTrace, Error);
                        Context.CapturedTrace = CapturedTrace;

                        CapturedTrace.prototype.uncycle = function () {
                            var length = this._length;
                            if (length < 2) return;
                            var nodes = [];
                            var stackToIndex = {};

                            for (var i = 0, node = this; node !== undefined; ++i) {
                                nodes.push(node);
                                node = node._parent;
                            }
                            length = this._length = i;
                            for (var i = length - 1; i >= 0; --i) {
                                var stack = nodes[i].stack;
                                if (stackToIndex[stack] === undefined) {
                                    stackToIndex[stack] = i;
                                }
                            }
                            for (var i = 0; i < length; ++i) {
                                var currentStack = nodes[i].stack;
                                var index = stackToIndex[currentStack];
                                if (index !== undefined && index !== i) {
                                    if (index > 0) {
                                        nodes[index - 1]._parent = undefined;
                                        nodes[index - 1]._length = 1;
                                    }
                                    nodes[i]._parent = undefined;
                                    nodes[i]._length = 1;
                                    var cycleEdgeNode = i > 0 ? nodes[i - 1] : this;

                                    if (index < length - 1) {
                                        cycleEdgeNode._parent = nodes[index + 1];
                                        cycleEdgeNode._parent.uncycle();
                                        cycleEdgeNode._length = cycleEdgeNode._parent._length + 1;
                                    } else {
                                        cycleEdgeNode._parent = undefined;
                                        cycleEdgeNode._length = 1;
                                    }
                                    var currentChildLength = cycleEdgeNode._length + 1;
                                    for (var j = i - 2; j >= 0; --j) {
                                        nodes[j]._length = currentChildLength;
                                        currentChildLength++;
                                    }
                                    return;
                                }
                            }
                        };

                        CapturedTrace.prototype.attachExtraTrace = function (error) {
                            if (error.__stackCleaned__) return;
                            this.uncycle();
                            var parsed = parseStackAndMessage(error);
                            var message = parsed.message;
                            var stacks = [parsed.stack];

                            var trace = this;
                            while (trace !== undefined) {
                                stacks.push(cleanStack(trace.stack.split("\n")));
                                trace = trace._parent;
                            }
                            removeCommonRoots(stacks);
                            removeDuplicateOrEmptyJumps(stacks);
                            util.notEnumerableProp(error, "stack", reconstructStack(message, stacks));
                            util.notEnumerableProp(error, "__stackCleaned__", true);
                        };

                        var captureStackTrace = function stackDetection() {
                            var v8stackFramePattern = /^\s*at\s*/;
                            var v8stackFormatter = function (stack, error) {
                                if (typeof stack === "string") return stack;

                                if (error.name !== undefined && error.message !== undefined) {
                                    return error.toString();
                                }
                                return formatNonError(error);
                            };

                            if (typeof Error.stackTraceLimit === "number" && typeof Error.captureStackTrace === "function") {
                                Error.stackTraceLimit += 6;
                                stackFramePattern = v8stackFramePattern;
                                formatStack = v8stackFormatter;
                                var captureStackTrace = Error.captureStackTrace;

                                shouldIgnore = function (line) {
                                    return bluebirdFramePattern.test(line);
                                };
                                return function (receiver, ignoreUntil) {
                                    Error.stackTraceLimit += 6;
                                    captureStackTrace(receiver, ignoreUntil);
                                    Error.stackTraceLimit -= 6;
                                };
                            }
                            var err = new Error();

                            if (typeof err.stack === "string" && err.stack.split("\n")[0].indexOf("stackDetection@") >= 0) {
                                stackFramePattern = /@/;
                                formatStack = v8stackFormatter;
                                indentStackFrames = true;
                                return function captureStackTrace(o) {
                                    o.stack = new Error().stack;
                                };
                            }

                            var hasStackAfterThrow;
                            try {
                                throw new Error();
                            } catch (e) {
                                hasStackAfterThrow = "stack" in e;
                            }
                            if (!("stack" in err) && hasStackAfterThrow && typeof Error.stackTraceLimit === "number") {
                                stackFramePattern = v8stackFramePattern;
                                formatStack = v8stackFormatter;
                                return function captureStackTrace(o) {
                                    Error.stackTraceLimit += 6;
                                    try {
                                        throw new Error();
                                    } catch (e) {
                                        o.stack = e.stack;
                                    }
                                    Error.stackTraceLimit -= 6;
                                };
                            }

                            formatStack = function (stack, error) {
                                if (typeof stack === "string") return stack;

                                if ((typeof error === "object" || typeof error === "function") && error.name !== undefined && error.message !== undefined) {
                                    return error.toString();
                                }
                                return formatNonError(error);
                            };

                            return null;
                        }([]);

                        if (typeof console !== "undefined" && typeof console.warn !== "undefined") {
                            printWarning = function (message) {
                                console.warn(message);
                            };
                            if (util.isNode && process.stderr.isTTY) {
                                printWarning = function (message, isSoft) {
                                    var color = isSoft ? "\u001b[33m" : "\u001b[31m";
                                    console.warn(color + message + "\u001b[0m\n");
                                };
                            } else if (!util.isNode && typeof new Error().stack === "string") {
                                printWarning = function (message, isSoft) {
                                    console.warn("%c" + message, isSoft ? "color: darkorange" : "color: red");
                                };
                            }
                        }

                        var config = {
                            warnings: warnings,
                            longStackTraces: false,
                            cancellation: false,
                            monitoring: false
                        };

                        if (longStackTraces) Promise.longStackTraces();

                        return {
                            longStackTraces: function () {
                                return config.longStackTraces;
                            },
                            warnings: function () {
                                return config.warnings;
                            },
                            cancellation: function () {
                                return config.cancellation;
                            },
                            monitoring: function () {
                                return config.monitoring;
                            },
                            propagateFromFunction: function () {
                                return propagateFromFunction;
                            },
                            boundValueFunction: function () {
                                return boundValueFunction;
                            },
                            checkForgottenReturns: checkForgottenReturns,
                            setBounds: setBounds,
                            warn: warn,
                            deprecated: deprecated,
                            CapturedTrace: CapturedTrace,
                            fireDomEvent: fireDomEvent,
                            fireGlobalEvent: fireGlobalEvent
                        };
                    };
                }, { "./errors": 12, "./util": 36 }], 10: [function (_dereq_, module, exports) {
                    "use strict";

                    module.exports = function (Promise) {
                        function returner() {
                            return this.value;
                        }
                        function thrower() {
                            throw this.reason;
                        }

                        Promise.prototype["return"] = Promise.prototype.thenReturn = function (value) {
                            if (value instanceof Promise) value.suppressUnhandledRejections();
                            return this._then(returner, undefined, undefined, { value: value }, undefined);
                        };

                        Promise.prototype["throw"] = Promise.prototype.thenThrow = function (reason) {
                            return this._then(thrower, undefined, undefined, { reason: reason }, undefined);
                        };

                        Promise.prototype.catchThrow = function (reason) {
                            if (arguments.length <= 1) {
                                return this._then(undefined, thrower, undefined, { reason: reason }, undefined);
                            } else {
                                var _reason = arguments[1];
                                var handler = function () {
                                    throw _reason;
                                };
                                return this.caught(reason, handler);
                            }
                        };

                        Promise.prototype.catchReturn = function (value) {
                            if (arguments.length <= 1) {
                                if (value instanceof Promise) value.suppressUnhandledRejections();
                                return this._then(undefined, returner, undefined, { value: value }, undefined);
                            } else {
                                var _value = arguments[1];
                                if (_value instanceof Promise) _value.suppressUnhandledRejections();
                                var handler = function () {
                                    return _value;
                                };
                                return this.caught(value, handler);
                            }
                        };
                    };
                }, {}], 11: [function (_dereq_, module, exports) {
                    "use strict";

                    module.exports = function (Promise, INTERNAL) {
                        var PromiseReduce = Promise.reduce;
                        var PromiseAll = Promise.all;

                        function promiseAllThis() {
                            return PromiseAll(this);
                        }

                        function PromiseMapSeries(promises, fn) {
                            return PromiseReduce(promises, fn, INTERNAL, INTERNAL);
                        }

                        Promise.prototype.each = function (fn) {
                            return PromiseReduce(this, fn, INTERNAL, 0)._then(promiseAllThis, undefined, undefined, this, undefined);
                        };

                        Promise.prototype.mapSeries = function (fn) {
                            return PromiseReduce(this, fn, INTERNAL, INTERNAL);
                        };

                        Promise.each = function (promises, fn) {
                            return PromiseReduce(promises, fn, INTERNAL, 0)._then(promiseAllThis, undefined, undefined, promises, undefined);
                        };

                        Promise.mapSeries = PromiseMapSeries;
                    };
                }, {}], 12: [function (_dereq_, module, exports) {
                    "use strict";

                    var es5 = _dereq_("./es5");
                    var Objectfreeze = es5.freeze;
                    var util = _dereq_("./util");
                    var inherits = util.inherits;
                    var notEnumerableProp = util.notEnumerableProp;

                    function subError(nameProperty, defaultMessage) {
                        function SubError(message) {
                            if (!(this instanceof SubError)) return new SubError(message);
                            notEnumerableProp(this, "message", typeof message === "string" ? message : defaultMessage);
                            notEnumerableProp(this, "name", nameProperty);
                            if (Error.captureStackTrace) {
                                Error.captureStackTrace(this, this.constructor);
                            } else {
                                Error.call(this);
                            }
                        }
                        inherits(SubError, Error);
                        return SubError;
                    }

                    var _TypeError, _RangeError;
                    var Warning = subError("Warning", "warning");
                    var CancellationError = subError("CancellationError", "cancellation error");
                    var TimeoutError = subError("TimeoutError", "timeout error");
                    var AggregateError = subError("AggregateError", "aggregate error");
                    try {
                        _TypeError = TypeError;
                        _RangeError = RangeError;
                    } catch (e) {
                        _TypeError = subError("TypeError", "type error");
                        _RangeError = subError("RangeError", "range error");
                    }

                    var methods = ("join pop push shift unshift slice filter forEach some " + "every map indexOf lastIndexOf reduce reduceRight sort reverse").split(" ");

                    for (var i = 0; i < methods.length; ++i) {
                        if (typeof Array.prototype[methods[i]] === "function") {
                            AggregateError.prototype[methods[i]] = Array.prototype[methods[i]];
                        }
                    }

                    es5.defineProperty(AggregateError.prototype, "length", {
                        value: 0,
                        configurable: false,
                        writable: true,
                        enumerable: true
                    });
                    AggregateError.prototype["isOperational"] = true;
                    var level = 0;
                    AggregateError.prototype.toString = function () {
                        var indent = Array(level * 4 + 1).join(" ");
                        var ret = "\n" + indent + "AggregateError of:" + "\n";
                        level++;
                        indent = Array(level * 4 + 1).join(" ");
                        for (var i = 0; i < this.length; ++i) {
                            var str = this[i] === this ? "[Circular AggregateError]" : this[i] + "";
                            var lines = str.split("\n");
                            for (var j = 0; j < lines.length; ++j) {
                                lines[j] = indent + lines[j];
                            }
                            str = lines.join("\n");
                            ret += str + "\n";
                        }
                        level--;
                        return ret;
                    };

                    function OperationalError(message) {
                        if (!(this instanceof OperationalError)) return new OperationalError(message);
                        notEnumerableProp(this, "name", "OperationalError");
                        notEnumerableProp(this, "message", message);
                        this.cause = message;
                        this["isOperational"] = true;

                        if (message instanceof Error) {
                            notEnumerableProp(this, "message", message.message);
                            notEnumerableProp(this, "stack", message.stack);
                        } else if (Error.captureStackTrace) {
                            Error.captureStackTrace(this, this.constructor);
                        }
                    }
                    inherits(OperationalError, Error);

                    var errorTypes = Error["__BluebirdErrorTypes__"];
                    if (!errorTypes) {
                        errorTypes = Objectfreeze({
                            CancellationError: CancellationError,
                            TimeoutError: TimeoutError,
                            OperationalError: OperationalError,
                            RejectionError: OperationalError,
                            AggregateError: AggregateError
                        });
                        es5.defineProperty(Error, "__BluebirdErrorTypes__", {
                            value: errorTypes,
                            writable: false,
                            enumerable: false,
                            configurable: false
                        });
                    }

                    module.exports = {
                        Error: Error,
                        TypeError: _TypeError,
                        RangeError: _RangeError,
                        CancellationError: errorTypes.CancellationError,
                        OperationalError: errorTypes.OperationalError,
                        TimeoutError: errorTypes.TimeoutError,
                        AggregateError: errorTypes.AggregateError,
                        Warning: Warning
                    };
                }, { "./es5": 13, "./util": 36 }], 13: [function (_dereq_, module, exports) {
                    var isES5 = function () {
                        "use strict";

                        return this === undefined;
                    }();

                    if (isES5) {
                        module.exports = {
                            freeze: Object.freeze,
                            defineProperty: Object.defineProperty,
                            getDescriptor: Object.getOwnPropertyDescriptor,
                            keys: Object.keys,
                            names: Object.getOwnPropertyNames,
                            getPrototypeOf: Object.getPrototypeOf,
                            isArray: Array.isArray,
                            isES5: isES5,
                            propertyIsWritable: function (obj, prop) {
                                var descriptor = Object.getOwnPropertyDescriptor(obj, prop);
                                return !!(!descriptor || descriptor.writable || descriptor.set);
                            }
                        };
                    } else {
                        var has = {}.hasOwnProperty;
                        var str = {}.toString;
                        var proto = {}.constructor.prototype;

                        var ObjectKeys = function (o) {
                            var ret = [];
                            for (var key in o) {
                                if (has.call(o, key)) {
                                    ret.push(key);
                                }
                            }
                            return ret;
                        };

                        var ObjectGetDescriptor = function (o, key) {
                            return { value: o[key] };
                        };

                        var ObjectDefineProperty = function (o, key, desc) {
                            o[key] = desc.value;
                            return o;
                        };

                        var ObjectFreeze = function (obj) {
                            return obj;
                        };

                        var ObjectGetPrototypeOf = function (obj) {
                            try {
                                return Object(obj).constructor.prototype;
                            } catch (e) {
                                return proto;
                            }
                        };

                        var ArrayIsArray = function (obj) {
                            try {
                                return str.call(obj) === "[object Array]";
                            } catch (e) {
                                return false;
                            }
                        };

                        module.exports = {
                            isArray: ArrayIsArray,
                            keys: ObjectKeys,
                            names: ObjectKeys,
                            defineProperty: ObjectDefineProperty,
                            getDescriptor: ObjectGetDescriptor,
                            freeze: ObjectFreeze,
                            getPrototypeOf: ObjectGetPrototypeOf,
                            isES5: isES5,
                            propertyIsWritable: function () {
                                return true;
                            }
                        };
                    }
                }, {}], 14: [function (_dereq_, module, exports) {
                    "use strict";

                    module.exports = function (Promise, INTERNAL) {
                        var PromiseMap = Promise.map;

                        Promise.prototype.filter = function (fn, options) {
                            return PromiseMap(this, fn, options, INTERNAL);
                        };

                        Promise.filter = function (promises, fn, options) {
                            return PromiseMap(promises, fn, options, INTERNAL);
                        };
                    };
                }, {}], 15: [function (_dereq_, module, exports) {
                    "use strict";

                    module.exports = function (Promise, tryConvertToPromise) {
                        var util = _dereq_("./util");
                        var CancellationError = Promise.CancellationError;
                        var errorObj = util.errorObj;

                        function PassThroughHandlerContext(promise, type, handler) {
                            this.promise = promise;
                            this.type = type;
                            this.handler = handler;
                            this.called = false;
                            this.cancelPromise = null;
                        }

                        PassThroughHandlerContext.prototype.isFinallyHandler = function () {
                            return this.type === 0;
                        };

                        function FinallyHandlerCancelReaction(finallyHandler) {
                            this.finallyHandler = finallyHandler;
                        }

                        FinallyHandlerCancelReaction.prototype._resultCancelled = function () {
                            checkCancel(this.finallyHandler);
                        };

                        function checkCancel(ctx, reason) {
                            if (ctx.cancelPromise != null) {
                                if (arguments.length > 1) {
                                    ctx.cancelPromise._reject(reason);
                                } else {
                                    ctx.cancelPromise._cancel();
                                }
                                ctx.cancelPromise = null;
                                return true;
                            }
                            return false;
                        }

                        function succeed() {
                            return finallyHandler.call(this, this.promise._target()._settledValue());
                        }
                        function fail(reason) {
                            if (checkCancel(this, reason)) return;
                            errorObj.e = reason;
                            return errorObj;
                        }
                        function finallyHandler(reasonOrValue) {
                            var promise = this.promise;
                            var handler = this.handler;

                            if (!this.called) {
                                this.called = true;
                                var ret = this.isFinallyHandler() ? handler.call(promise._boundValue()) : handler.call(promise._boundValue(), reasonOrValue);
                                if (ret !== undefined) {
                                    promise._setReturnedNonUndefined();
                                    var maybePromise = tryConvertToPromise(ret, promise);
                                    if (maybePromise instanceof Promise) {
                                        if (this.cancelPromise != null) {
                                            if (maybePromise._isCancelled()) {
                                                var reason = new CancellationError("late cancellation observer");
                                                promise._attachExtraTrace(reason);
                                                errorObj.e = reason;
                                                return errorObj;
                                            } else if (maybePromise.isPending()) {
                                                maybePromise._attachCancellationCallback(new FinallyHandlerCancelReaction(this));
                                            }
                                        }
                                        return maybePromise._then(succeed, fail, undefined, this, undefined);
                                    }
                                }
                            }

                            if (promise.isRejected()) {
                                checkCancel(this);
                                errorObj.e = reasonOrValue;
                                return errorObj;
                            } else {
                                checkCancel(this);
                                return reasonOrValue;
                            }
                        }

                        Promise.prototype._passThrough = function (handler, type, success, fail) {
                            if (typeof handler !== "function") return this.then();
                            return this._then(success, fail, undefined, new PassThroughHandlerContext(this, type, handler), undefined);
                        };

                        Promise.prototype.lastly = Promise.prototype["finally"] = function (handler) {
                            return this._passThrough(handler, 0, finallyHandler, finallyHandler);
                        };

                        Promise.prototype.tap = function (handler) {
                            return this._passThrough(handler, 1, finallyHandler);
                        };

                        return PassThroughHandlerContext;
                    };
                }, { "./util": 36 }], 16: [function (_dereq_, module, exports) {
                    "use strict";

                    module.exports = function (Promise, apiRejection, INTERNAL, tryConvertToPromise, Proxyable, debug) {
                        var errors = _dereq_("./errors");
                        var TypeError = errors.TypeError;
                        var util = _dereq_("./util");
                        var errorObj = util.errorObj;
                        var tryCatch = util.tryCatch;
                        var yieldHandlers = [];

                        function promiseFromYieldHandler(value, yieldHandlers, traceParent) {
                            for (var i = 0; i < yieldHandlers.length; ++i) {
                                traceParent._pushContext();
                                var result = tryCatch(yieldHandlers[i])(value);
                                traceParent._popContext();
                                if (result === errorObj) {
                                    traceParent._pushContext();
                                    var ret = Promise.reject(errorObj.e);
                                    traceParent._popContext();
                                    return ret;
                                }
                                var maybePromise = tryConvertToPromise(result, traceParent);
                                if (maybePromise instanceof Promise) return maybePromise;
                            }
                            return null;
                        }

                        function PromiseSpawn(generatorFunction, receiver, yieldHandler, stack) {
                            if (debug.cancellation()) {
                                var internal = new Promise(INTERNAL);
                                var _finallyPromise = this._finallyPromise = new Promise(INTERNAL);
                                this._promise = internal.lastly(function () {
                                    return _finallyPromise;
                                });
                                internal._captureStackTrace();
                                internal._setOnCancel(this);
                            } else {
                                var promise = this._promise = new Promise(INTERNAL);
                                promise._captureStackTrace();
                            }
                            this._stack = stack;
                            this._generatorFunction = generatorFunction;
                            this._receiver = receiver;
                            this._generator = undefined;
                            this._yieldHandlers = typeof yieldHandler === "function" ? [yieldHandler].concat(yieldHandlers) : yieldHandlers;
                            this._yieldedPromise = null;
                            this._cancellationPhase = false;
                        }
                        util.inherits(PromiseSpawn, Proxyable);

                        PromiseSpawn.prototype._isResolved = function () {
                            return this._promise === null;
                        };

                        PromiseSpawn.prototype._cleanup = function () {
                            this._promise = this._generator = null;
                            if (debug.cancellation() && this._finallyPromise !== null) {
                                this._finallyPromise._fulfill();
                                this._finallyPromise = null;
                            }
                        };

                        PromiseSpawn.prototype._promiseCancelled = function () {
                            if (this._isResolved()) return;
                            var implementsReturn = typeof this._generator["return"] !== "undefined";

                            var result;
                            if (!implementsReturn) {
                                var reason = new Promise.CancellationError("generator .return() sentinel");
                                Promise.coroutine.returnSentinel = reason;
                                this._promise._attachExtraTrace(reason);
                                this._promise._pushContext();
                                result = tryCatch(this._generator["throw"]).call(this._generator, reason);
                                this._promise._popContext();
                            } else {
                                this._promise._pushContext();
                                result = tryCatch(this._generator["return"]).call(this._generator, undefined);
                                this._promise._popContext();
                            }
                            this._cancellationPhase = true;
                            this._yieldedPromise = null;
                            this._continue(result);
                        };

                        PromiseSpawn.prototype._promiseFulfilled = function (value) {
                            this._yieldedPromise = null;
                            this._promise._pushContext();
                            var result = tryCatch(this._generator.next).call(this._generator, value);
                            this._promise._popContext();
                            this._continue(result);
                        };

                        PromiseSpawn.prototype._promiseRejected = function (reason) {
                            this._yieldedPromise = null;
                            this._promise._attachExtraTrace(reason);
                            this._promise._pushContext();
                            var result = tryCatch(this._generator["throw"]).call(this._generator, reason);
                            this._promise._popContext();
                            this._continue(result);
                        };

                        PromiseSpawn.prototype._resultCancelled = function () {
                            if (this._yieldedPromise instanceof Promise) {
                                var promise = this._yieldedPromise;
                                this._yieldedPromise = null;
                                promise.cancel();
                            }
                        };

                        PromiseSpawn.prototype.promise = function () {
                            return this._promise;
                        };

                        PromiseSpawn.prototype._run = function () {
                            this._generator = this._generatorFunction.call(this._receiver);
                            this._receiver = this._generatorFunction = undefined;
                            this._promiseFulfilled(undefined);
                        };

                        PromiseSpawn.prototype._continue = function (result) {
                            var promise = this._promise;
                            if (result === errorObj) {
                                this._cleanup();
                                if (this._cancellationPhase) {
                                    return promise.cancel();
                                } else {
                                    return promise._rejectCallback(result.e, false);
                                }
                            }

                            var value = result.value;
                            if (result.done === true) {
                                this._cleanup();
                                if (this._cancellationPhase) {
                                    return promise.cancel();
                                } else {
                                    return promise._resolveCallback(value);
                                }
                            } else {
                                var maybePromise = tryConvertToPromise(value, this._promise);
                                if (!(maybePromise instanceof Promise)) {
                                    maybePromise = promiseFromYieldHandler(maybePromise, this._yieldHandlers, this._promise);
                                    if (maybePromise === null) {
                                        this._promiseRejected(new TypeError("A value %s was yielded that could not be treated as a promise\u000a\u000a    See http://goo.gl/MqrFmX\u000a\u000a".replace("%s", value) + "From coroutine:\u000a" + this._stack.split("\n").slice(1, -7).join("\n")));
                                        return;
                                    }
                                }
                                maybePromise = maybePromise._target();
                                var bitField = maybePromise._bitField;
                                ;
                                if ((bitField & 50397184) === 0) {
                                    this._yieldedPromise = maybePromise;
                                    maybePromise._proxy(this, null);
                                } else if ((bitField & 33554432) !== 0) {
                                    Promise._async.invoke(this._promiseFulfilled, this, maybePromise._value());
                                } else if ((bitField & 16777216) !== 0) {
                                    Promise._async.invoke(this._promiseRejected, this, maybePromise._reason());
                                } else {
                                    this._promiseCancelled();
                                }
                            }
                        };

                        Promise.coroutine = function (generatorFunction, options) {
                            if (typeof generatorFunction !== "function") {
                                throw new TypeError("generatorFunction must be a function\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
                            }
                            var yieldHandler = Object(options).yieldHandler;
                            var PromiseSpawn$ = PromiseSpawn;
                            var stack = new Error().stack;
                            return function () {
                                var generator = generatorFunction.apply(this, arguments);
                                var spawn = new PromiseSpawn$(undefined, undefined, yieldHandler, stack);
                                var ret = spawn.promise();
                                spawn._generator = generator;
                                spawn._promiseFulfilled(undefined);
                                return ret;
                            };
                        };

                        Promise.coroutine.addYieldHandler = function (fn) {
                            if (typeof fn !== "function") {
                                throw new TypeError("expecting a function but got " + util.classString(fn));
                            }
                            yieldHandlers.push(fn);
                        };

                        Promise.spawn = function (generatorFunction) {
                            debug.deprecated("Promise.spawn()", "Promise.coroutine()");
                            if (typeof generatorFunction !== "function") {
                                return apiRejection("generatorFunction must be a function\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
                            }
                            var spawn = new PromiseSpawn(generatorFunction, this);
                            var ret = spawn.promise();
                            spawn._run(Promise.spawn);
                            return ret;
                        };
                    };
                }, { "./errors": 12, "./util": 36 }], 17: [function (_dereq_, module, exports) {
                    "use strict";

                    module.exports = function (Promise, PromiseArray, tryConvertToPromise, INTERNAL, async, getDomain) {
                        var util = _dereq_("./util");
                        var canEvaluate = util.canEvaluate;
                        var tryCatch = util.tryCatch;
                        var errorObj = util.errorObj;
                        var reject;

                        if (!true) {
                            if (canEvaluate) {
                                var thenCallback = function (i) {
                                    return new Function("value", "holder", "                             \n\
            'use strict';                                                    \n\
            holder.pIndex = value;                                           \n\
            holder.checkFulfillment(this);                                   \n\
            ".replace(/Index/g, i));
                                };

                                var promiseSetter = function (i) {
                                    return new Function("promise", "holder", "                           \n\
            'use strict';                                                    \n\
            holder.pIndex = promise;                                         \n\
            ".replace(/Index/g, i));
                                };

                                var generateHolderClass = function (total) {
                                    var props = new Array(total);
                                    for (var i = 0; i < props.length; ++i) {
                                        props[i] = "this.p" + (i + 1);
                                    }
                                    var assignment = props.join(" = ") + " = null;";
                                    var cancellationCode = "var promise;\n" + props.map(function (prop) {
                                        return "                                                         \n\
                promise = " + prop + ";                                      \n\
                if (promise instanceof Promise) {                            \n\
                    promise.cancel();                                        \n\
                }                                                            \n\
            ";
                                    }).join("\n");
                                    var passedArguments = props.join(", ");
                                    var name = "Holder$" + total;

                                    var code = "return function(tryCatch, errorObj, Promise, async) {    \n\
            'use strict';                                                    \n\
            function [TheName](fn) {                                         \n\
                [TheProperties]                                              \n\
                this.fn = fn;                                                \n\
                this.asyncNeeded = true;                                     \n\
                this.now = 0;                                                \n\
            }                                                                \n\
                                                                             \n\
            [TheName].prototype._callFunction = function(promise) {          \n\
                promise._pushContext();                                      \n\
                var ret = tryCatch(this.fn)([ThePassedArguments]);           \n\
                promise._popContext();                                       \n\
                if (ret === errorObj) {                                      \n\
                    promise._rejectCallback(ret.e, false);                   \n\
                } else {                                                     \n\
                    promise._resolveCallback(ret);                           \n\
                }                                                            \n\
            };                                                               \n\
                                                                             \n\
            [TheName].prototype.checkFulfillment = function(promise) {       \n\
                var now = ++this.now;                                        \n\
                if (now === [TheTotal]) {                                    \n\
                    if (this.asyncNeeded) {                                  \n\
                        async.invoke(this._callFunction, this, promise);     \n\
                    } else {                                                 \n\
                        this._callFunction(promise);                         \n\
                    }                                                        \n\
                                                                             \n\
                }                                                            \n\
            };                                                               \n\
                                                                             \n\
            [TheName].prototype._resultCancelled = function() {              \n\
                [CancellationCode]                                           \n\
            };                                                               \n\
                                                                             \n\
            return [TheName];                                                \n\
        }(tryCatch, errorObj, Promise, async);                               \n\
        ";

                                    code = code.replace(/\[TheName\]/g, name).replace(/\[TheTotal\]/g, total).replace(/\[ThePassedArguments\]/g, passedArguments).replace(/\[TheProperties\]/g, assignment).replace(/\[CancellationCode\]/g, cancellationCode);

                                    return new Function("tryCatch", "errorObj", "Promise", "async", code)(tryCatch, errorObj, Promise, async);
                                };

                                var holderClasses = [];
                                var thenCallbacks = [];
                                var promiseSetters = [];

                                for (var i = 0; i < 8; ++i) {
                                    holderClasses.push(generateHolderClass(i + 1));
                                    thenCallbacks.push(thenCallback(i + 1));
                                    promiseSetters.push(promiseSetter(i + 1));
                                }

                                reject = function (reason) {
                                    this._reject(reason);
                                };
                            }
                        }

                        Promise.join = function () {
                            var last = arguments.length - 1;
                            var fn;
                            if (last > 0 && typeof arguments[last] === "function") {
                                fn = arguments[last];
                                if (!true) {
                                    if (last <= 8 && canEvaluate) {
                                        var ret = new Promise(INTERNAL);
                                        ret._captureStackTrace();
                                        var HolderClass = holderClasses[last - 1];
                                        var holder = new HolderClass(fn);
                                        var callbacks = thenCallbacks;

                                        for (var i = 0; i < last; ++i) {
                                            var maybePromise = tryConvertToPromise(arguments[i], ret);
                                            if (maybePromise instanceof Promise) {
                                                maybePromise = maybePromise._target();
                                                var bitField = maybePromise._bitField;
                                                ;
                                                if ((bitField & 50397184) === 0) {
                                                    maybePromise._then(callbacks[i], reject, undefined, ret, holder);
                                                    promiseSetters[i](maybePromise, holder);
                                                    holder.asyncNeeded = false;
                                                } else if ((bitField & 33554432) !== 0) {
                                                    callbacks[i].call(ret, maybePromise._value(), holder);
                                                } else if ((bitField & 16777216) !== 0) {
                                                    ret._reject(maybePromise._reason());
                                                } else {
                                                    ret._cancel();
                                                }
                                            } else {
                                                callbacks[i].call(ret, maybePromise, holder);
                                            }
                                        }

                                        if (!ret._isFateSealed()) {
                                            if (holder.asyncNeeded) {
                                                var domain = getDomain();
                                                if (domain !== null) {
                                                    holder.fn = util.domainBind(domain, holder.fn);
                                                }
                                            }
                                            ret._setAsyncGuaranteed();
                                            ret._setOnCancel(holder);
                                        }
                                        return ret;
                                    }
                                }
                            }
                            var args = [].slice.call(arguments);;
                            if (fn) args.pop();
                            var ret = new PromiseArray(args).promise();
                            return fn !== undefined ? ret.spread(fn) : ret;
                        };
                    };
                }, { "./util": 36 }], 18: [function (_dereq_, module, exports) {
                    "use strict";

                    module.exports = function (Promise, PromiseArray, apiRejection, tryConvertToPromise, INTERNAL, debug) {
                        var getDomain = Promise._getDomain;
                        var util = _dereq_("./util");
                        var tryCatch = util.tryCatch;
                        var errorObj = util.errorObj;
                        var async = Promise._async;

                        function MappingPromiseArray(promises, fn, limit, _filter) {
                            this.constructor$(promises);
                            this._promise._captureStackTrace();
                            var domain = getDomain();
                            this._callback = domain === null ? fn : util.domainBind(domain, fn);
                            this._preservedValues = _filter === INTERNAL ? new Array(this.length()) : null;
                            this._limit = limit;
                            this._inFlight = 0;
                            this._queue = [];
                            async.invoke(this._asyncInit, this, undefined);
                        }
                        util.inherits(MappingPromiseArray, PromiseArray);

                        MappingPromiseArray.prototype._asyncInit = function () {
                            this._init$(undefined, -2);
                        };

                        MappingPromiseArray.prototype._init = function () {};

                        MappingPromiseArray.prototype._promiseFulfilled = function (value, index) {
                            var values = this._values;
                            var length = this.length();
                            var preservedValues = this._preservedValues;
                            var limit = this._limit;

                            if (index < 0) {
                                index = index * -1 - 1;
                                values[index] = value;
                                if (limit >= 1) {
                                    this._inFlight--;
                                    this._drainQueue();
                                    if (this._isResolved()) return true;
                                }
                            } else {
                                if (limit >= 1 && this._inFlight >= limit) {
                                    values[index] = value;
                                    this._queue.push(index);
                                    return false;
                                }
                                if (preservedValues !== null) preservedValues[index] = value;

                                var promise = this._promise;
                                var callback = this._callback;
                                var receiver = promise._boundValue();
                                promise._pushContext();
                                var ret = tryCatch(callback).call(receiver, value, index, length);
                                var promiseCreated = promise._popContext();
                                debug.checkForgottenReturns(ret, promiseCreated, preservedValues !== null ? "Promise.filter" : "Promise.map", promise);
                                if (ret === errorObj) {
                                    this._reject(ret.e);
                                    return true;
                                }

                                var maybePromise = tryConvertToPromise(ret, this._promise);
                                if (maybePromise instanceof Promise) {
                                    maybePromise = maybePromise._target();
                                    var bitField = maybePromise._bitField;
                                    ;
                                    if ((bitField & 50397184) === 0) {
                                        if (limit >= 1) this._inFlight++;
                                        values[index] = maybePromise;
                                        maybePromise._proxy(this, (index + 1) * -1);
                                        return false;
                                    } else if ((bitField & 33554432) !== 0) {
                                        ret = maybePromise._value();
                                    } else if ((bitField & 16777216) !== 0) {
                                        this._reject(maybePromise._reason());
                                        return true;
                                    } else {
                                        this._cancel();
                                        return true;
                                    }
                                }
                                values[index] = ret;
                            }
                            var totalResolved = ++this._totalResolved;
                            if (totalResolved >= length) {
                                if (preservedValues !== null) {
                                    this._filter(values, preservedValues);
                                } else {
                                    this._resolve(values);
                                }
                                return true;
                            }
                            return false;
                        };

                        MappingPromiseArray.prototype._drainQueue = function () {
                            var queue = this._queue;
                            var limit = this._limit;
                            var values = this._values;
                            while (queue.length > 0 && this._inFlight < limit) {
                                if (this._isResolved()) return;
                                var index = queue.pop();
                                this._promiseFulfilled(values[index], index);
                            }
                        };

                        MappingPromiseArray.prototype._filter = function (booleans, values) {
                            var len = values.length;
                            var ret = new Array(len);
                            var j = 0;
                            for (var i = 0; i < len; ++i) {
                                if (booleans[i]) ret[j++] = values[i];
                            }
                            ret.length = j;
                            this._resolve(ret);
                        };

                        MappingPromiseArray.prototype.preservedValues = function () {
                            return this._preservedValues;
                        };

                        function map(promises, fn, options, _filter) {
                            if (typeof fn !== "function") {
                                return apiRejection("expecting a function but got " + util.classString(fn));
                            }

                            var limit = 0;
                            if (options !== undefined) {
                                if (typeof options === "object" && options !== null) {
                                    if (typeof options.concurrency !== "number") {
                                        return Promise.reject(new TypeError("'concurrency' must be a number but it is " + util.classString(options.concurrency)));
                                    }
                                    limit = options.concurrency;
                                } else {
                                    return Promise.reject(new TypeError("options argument must be an object but it is " + util.classString(options)));
                                }
                            }
                            limit = typeof limit === "number" && isFinite(limit) && limit >= 1 ? limit : 0;
                            return new MappingPromiseArray(promises, fn, limit, _filter).promise();
                        }

                        Promise.prototype.map = function (fn, options) {
                            return map(this, fn, options, null);
                        };

                        Promise.map = function (promises, fn, options, _filter) {
                            return map(promises, fn, options, _filter);
                        };
                    };
                }, { "./util": 36 }], 19: [function (_dereq_, module, exports) {
                    "use strict";

                    module.exports = function (Promise, INTERNAL, tryConvertToPromise, apiRejection, debug) {
                        var util = _dereq_("./util");
                        var tryCatch = util.tryCatch;

                        Promise.method = function (fn) {
                            if (typeof fn !== "function") {
                                throw new Promise.TypeError("expecting a function but got " + util.classString(fn));
                            }
                            return function () {
                                var ret = new Promise(INTERNAL);
                                ret._captureStackTrace();
                                ret._pushContext();
                                var value = tryCatch(fn).apply(this, arguments);
                                var promiseCreated = ret._popContext();
                                debug.checkForgottenReturns(value, promiseCreated, "Promise.method", ret);
                                ret._resolveFromSyncValue(value);
                                return ret;
                            };
                        };

                        Promise.attempt = Promise["try"] = function (fn) {
                            if (typeof fn !== "function") {
                                return apiRejection("expecting a function but got " + util.classString(fn));
                            }
                            var ret = new Promise(INTERNAL);
                            ret._captureStackTrace();
                            ret._pushContext();
                            var value;
                            if (arguments.length > 1) {
                                debug.deprecated("calling Promise.try with more than 1 argument");
                                var arg = arguments[1];
                                var ctx = arguments[2];
                                value = util.isArray(arg) ? tryCatch(fn).apply(ctx, arg) : tryCatch(fn).call(ctx, arg);
                            } else {
                                value = tryCatch(fn)();
                            }
                            var promiseCreated = ret._popContext();
                            debug.checkForgottenReturns(value, promiseCreated, "Promise.try", ret);
                            ret._resolveFromSyncValue(value);
                            return ret;
                        };

                        Promise.prototype._resolveFromSyncValue = function (value) {
                            if (value === util.errorObj) {
                                this._rejectCallback(value.e, false);
                            } else {
                                this._resolveCallback(value, true);
                            }
                        };
                    };
                }, { "./util": 36 }], 20: [function (_dereq_, module, exports) {
                    "use strict";

                    var util = _dereq_("./util");
                    var maybeWrapAsError = util.maybeWrapAsError;
                    var errors = _dereq_("./errors");
                    var OperationalError = errors.OperationalError;
                    var es5 = _dereq_("./es5");

                    function isUntypedError(obj) {
                        return obj instanceof Error && es5.getPrototypeOf(obj) === Error.prototype;
                    }

                    var rErrorKey = /^(?:name|message|stack|cause)$/;
                    function wrapAsOperationalError(obj) {
                        var ret;
                        if (isUntypedError(obj)) {
                            ret = new OperationalError(obj);
                            ret.name = obj.name;
                            ret.message = obj.message;
                            ret.stack = obj.stack;
                            var keys = es5.keys(obj);
                            for (var i = 0; i < keys.length; ++i) {
                                var key = keys[i];
                                if (!rErrorKey.test(key)) {
                                    ret[key] = obj[key];
                                }
                            }
                            return ret;
                        }
                        util.markAsOriginatingFromRejection(obj);
                        return obj;
                    }

                    function nodebackForPromise(promise, multiArgs) {
                        return function (err, value) {
                            if (promise === null) return;
                            if (err) {
                                var wrapped = wrapAsOperationalError(maybeWrapAsError(err));
                                promise._attachExtraTrace(wrapped);
                                promise._reject(wrapped);
                            } else if (!multiArgs) {
                                promise._fulfill(value);
                            } else {
                                var args = [].slice.call(arguments, 1);;
                                promise._fulfill(args);
                            }
                            promise = null;
                        };
                    }

                    module.exports = nodebackForPromise;
                }, { "./errors": 12, "./es5": 13, "./util": 36 }], 21: [function (_dereq_, module, exports) {
                    "use strict";

                    module.exports = function (Promise) {
                        var util = _dereq_("./util");
                        var async = Promise._async;
                        var tryCatch = util.tryCatch;
                        var errorObj = util.errorObj;

                        function spreadAdapter(val, nodeback) {
                            var promise = this;
                            if (!util.isArray(val)) return successAdapter.call(promise, val, nodeback);
                            var ret = tryCatch(nodeback).apply(promise._boundValue(), [null].concat(val));
                            if (ret === errorObj) {
                                async.throwLater(ret.e);
                            }
                        }

                        function successAdapter(val, nodeback) {
                            var promise = this;
                            var receiver = promise._boundValue();
                            var ret = val === undefined ? tryCatch(nodeback).call(receiver, null) : tryCatch(nodeback).call(receiver, null, val);
                            if (ret === errorObj) {
                                async.throwLater(ret.e);
                            }
                        }
                        function errorAdapter(reason, nodeback) {
                            var promise = this;
                            if (!reason) {
                                var newReason = new Error(reason + "");
                                newReason.cause = reason;
                                reason = newReason;
                            }
                            var ret = tryCatch(nodeback).call(promise._boundValue(), reason);
                            if (ret === errorObj) {
                                async.throwLater(ret.e);
                            }
                        }

                        Promise.prototype.asCallback = Promise.prototype.nodeify = function (nodeback, options) {
                            if (typeof nodeback == "function") {
                                var adapter = successAdapter;
                                if (options !== undefined && Object(options).spread) {
                                    adapter = spreadAdapter;
                                }
                                this._then(adapter, errorAdapter, undefined, this, nodeback);
                            }
                            return this;
                        };
                    };
                }, { "./util": 36 }], 22: [function (_dereq_, module, exports) {
                    "use strict";

                    module.exports = function () {
                        var makeSelfResolutionError = function () {
                            return new TypeError("circular promise resolution chain\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
                        };
                        var reflectHandler = function () {
                            return new Promise.PromiseInspection(this._target());
                        };
                        var apiRejection = function (msg) {
                            return Promise.reject(new TypeError(msg));
                        };
                        function Proxyable() {}
                        var UNDEFINED_BINDING = {};
                        var util = _dereq_("./util");

                        var getDomain;
                        if (util.isNode) {
                            getDomain = function () {
                                var ret = process.domain;
                                if (ret === undefined) ret = null;
                                return ret;
                            };
                        } else {
                            getDomain = function () {
                                return null;
                            };
                        }
                        util.notEnumerableProp(Promise, "_getDomain", getDomain);

                        var es5 = _dereq_("./es5");
                        var Async = _dereq_("./async");
                        var async = new Async();
                        es5.defineProperty(Promise, "_async", { value: async });
                        var errors = _dereq_("./errors");
                        var TypeError = Promise.TypeError = errors.TypeError;
                        Promise.RangeError = errors.RangeError;
                        var CancellationError = Promise.CancellationError = errors.CancellationError;
                        Promise.TimeoutError = errors.TimeoutError;
                        Promise.OperationalError = errors.OperationalError;
                        Promise.RejectionError = errors.OperationalError;
                        Promise.AggregateError = errors.AggregateError;
                        var INTERNAL = function () {};
                        var APPLY = {};
                        var NEXT_FILTER = {};
                        var tryConvertToPromise = _dereq_("./thenables")(Promise, INTERNAL);
                        var PromiseArray = _dereq_("./promise_array")(Promise, INTERNAL, tryConvertToPromise, apiRejection, Proxyable);
                        var Context = _dereq_("./context")(Promise);
                        /*jshint unused:false*/
                        var createContext = Context.create;
                        var debug = _dereq_("./debuggability")(Promise, Context);
                        var CapturedTrace = debug.CapturedTrace;
                        var PassThroughHandlerContext = _dereq_("./finally")(Promise, tryConvertToPromise);
                        var catchFilter = _dereq_("./catch_filter")(NEXT_FILTER);
                        var nodebackForPromise = _dereq_("./nodeback");
                        var errorObj = util.errorObj;
                        var tryCatch = util.tryCatch;
                        function check(self, executor) {
                            if (typeof executor !== "function") {
                                throw new TypeError("expecting a function but got " + util.classString(executor));
                            }
                            if (self.constructor !== Promise) {
                                throw new TypeError("the promise constructor cannot be invoked directly\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
                            }
                        }

                        function Promise(executor) {
                            this._bitField = 0;
                            this._fulfillmentHandler0 = undefined;
                            this._rejectionHandler0 = undefined;
                            this._promise0 = undefined;
                            this._receiver0 = undefined;
                            if (executor !== INTERNAL) {
                                check(this, executor);
                                this._resolveFromExecutor(executor);
                            }
                            this._promiseCreated();
                            this._fireEvent("promiseCreated", this);
                        }

                        Promise.prototype.toString = function () {
                            return "[object Promise]";
                        };

                        Promise.prototype.caught = Promise.prototype["catch"] = function (fn) {
                            var len = arguments.length;
                            if (len > 1) {
                                var catchInstances = new Array(len - 1),
                                    j = 0,
                                    i;
                                for (i = 0; i < len - 1; ++i) {
                                    var item = arguments[i];
                                    if (util.isObject(item)) {
                                        catchInstances[j++] = item;
                                    } else {
                                        return apiRejection("expecting an object but got " + "A catch statement predicate " + util.classString(item));
                                    }
                                }
                                catchInstances.length = j;
                                fn = arguments[i];
                                return this.then(undefined, catchFilter(catchInstances, fn, this));
                            }
                            return this.then(undefined, fn);
                        };

                        Promise.prototype.reflect = function () {
                            return this._then(reflectHandler, reflectHandler, undefined, this, undefined);
                        };

                        Promise.prototype.then = function (didFulfill, didReject) {
                            if (debug.warnings() && arguments.length > 0 && typeof didFulfill !== "function" && typeof didReject !== "function") {
                                var msg = ".then() only accepts functions but was passed: " + util.classString(didFulfill);
                                if (arguments.length > 1) {
                                    msg += ", " + util.classString(didReject);
                                }
                                this._warn(msg);
                            }
                            return this._then(didFulfill, didReject, undefined, undefined, undefined);
                        };

                        Promise.prototype.done = function (didFulfill, didReject) {
                            var promise = this._then(didFulfill, didReject, undefined, undefined, undefined);
                            promise._setIsFinal();
                        };

                        Promise.prototype.spread = function (fn) {
                            if (typeof fn !== "function") {
                                return apiRejection("expecting a function but got " + util.classString(fn));
                            }
                            return this.all()._then(fn, undefined, undefined, APPLY, undefined);
                        };

                        Promise.prototype.toJSON = function () {
                            var ret = {
                                isFulfilled: false,
                                isRejected: false,
                                fulfillmentValue: undefined,
                                rejectionReason: undefined
                            };
                            if (this.isFulfilled()) {
                                ret.fulfillmentValue = this.value();
                                ret.isFulfilled = true;
                            } else if (this.isRejected()) {
                                ret.rejectionReason = this.reason();
                                ret.isRejected = true;
                            }
                            return ret;
                        };

                        Promise.prototype.all = function () {
                            if (arguments.length > 0) {
                                this._warn(".all() was passed arguments but it does not take any");
                            }
                            return new PromiseArray(this).promise();
                        };

                        Promise.prototype.error = function (fn) {
                            return this.caught(util.originatesFromRejection, fn);
                        };

                        Promise.getNewLibraryCopy = module.exports;

                        Promise.is = function (val) {
                            return val instanceof Promise;
                        };

                        Promise.fromNode = Promise.fromCallback = function (fn) {
                            var ret = new Promise(INTERNAL);
                            ret._captureStackTrace();
                            var multiArgs = arguments.length > 1 ? !!Object(arguments[1]).multiArgs : false;
                            var result = tryCatch(fn)(nodebackForPromise(ret, multiArgs));
                            if (result === errorObj) {
                                ret._rejectCallback(result.e, true);
                            }
                            if (!ret._isFateSealed()) ret._setAsyncGuaranteed();
                            return ret;
                        };

                        Promise.all = function (promises) {
                            return new PromiseArray(promises).promise();
                        };

                        Promise.cast = function (obj) {
                            var ret = tryConvertToPromise(obj);
                            if (!(ret instanceof Promise)) {
                                ret = new Promise(INTERNAL);
                                ret._captureStackTrace();
                                ret._setFulfilled();
                                ret._rejectionHandler0 = obj;
                            }
                            return ret;
                        };

                        Promise.resolve = Promise.fulfilled = Promise.cast;

                        Promise.reject = Promise.rejected = function (reason) {
                            var ret = new Promise(INTERNAL);
                            ret._captureStackTrace();
                            ret._rejectCallback(reason, true);
                            return ret;
                        };

                        Promise.setScheduler = function (fn) {
                            if (typeof fn !== "function") {
                                throw new TypeError("expecting a function but got " + util.classString(fn));
                            }
                            return async.setScheduler(fn);
                        };

                        Promise.prototype._then = function (didFulfill, didReject, _, receiver, internalData) {
                            var haveInternalData = internalData !== undefined;
                            var promise = haveInternalData ? internalData : new Promise(INTERNAL);
                            var target = this._target();
                            var bitField = target._bitField;

                            if (!haveInternalData) {
                                promise._propagateFrom(this, 3);
                                promise._captureStackTrace();
                                if (receiver === undefined && (this._bitField & 2097152) !== 0) {
                                    if (!((bitField & 50397184) === 0)) {
                                        receiver = this._boundValue();
                                    } else {
                                        receiver = target === this ? undefined : this._boundTo;
                                    }
                                }
                                this._fireEvent("promiseChained", this, promise);
                            }

                            var domain = getDomain();
                            if (!((bitField & 50397184) === 0)) {
                                var handler,
                                    value,
                                    settler = target._settlePromiseCtx;
                                if ((bitField & 33554432) !== 0) {
                                    value = target._rejectionHandler0;
                                    handler = didFulfill;
                                } else if ((bitField & 16777216) !== 0) {
                                    value = target._fulfillmentHandler0;
                                    handler = didReject;
                                    target._unsetRejectionIsUnhandled();
                                } else {
                                    settler = target._settlePromiseLateCancellationObserver;
                                    value = new CancellationError("late cancellation observer");
                                    target._attachExtraTrace(value);
                                    handler = didReject;
                                }

                                async.invoke(settler, target, {
                                    handler: domain === null ? handler : typeof handler === "function" && util.domainBind(domain, handler),
                                    promise: promise,
                                    receiver: receiver,
                                    value: value
                                });
                            } else {
                                target._addCallbacks(didFulfill, didReject, promise, receiver, domain);
                            }

                            return promise;
                        };

                        Promise.prototype._length = function () {
                            return this._bitField & 65535;
                        };

                        Promise.prototype._isFateSealed = function () {
                            return (this._bitField & 117506048) !== 0;
                        };

                        Promise.prototype._isFollowing = function () {
                            return (this._bitField & 67108864) === 67108864;
                        };

                        Promise.prototype._setLength = function (len) {
                            this._bitField = this._bitField & -65536 | len & 65535;
                        };

                        Promise.prototype._setFulfilled = function () {
                            this._bitField = this._bitField | 33554432;
                            this._fireEvent("promiseFulfilled", this);
                        };

                        Promise.prototype._setRejected = function () {
                            this._bitField = this._bitField | 16777216;
                            this._fireEvent("promiseRejected", this);
                        };

                        Promise.prototype._setFollowing = function () {
                            this._bitField = this._bitField | 67108864;
                            this._fireEvent("promiseResolved", this);
                        };

                        Promise.prototype._setIsFinal = function () {
                            this._bitField = this._bitField | 4194304;
                        };

                        Promise.prototype._isFinal = function () {
                            return (this._bitField & 4194304) > 0;
                        };

                        Promise.prototype._unsetCancelled = function () {
                            this._bitField = this._bitField & ~65536;
                        };

                        Promise.prototype._setCancelled = function () {
                            this._bitField = this._bitField | 65536;
                            this._fireEvent("promiseCancelled", this);
                        };

                        Promise.prototype._setWillBeCancelled = function () {
                            this._bitField = this._bitField | 8388608;
                        };

                        Promise.prototype._setAsyncGuaranteed = function () {
                            if (async.hasCustomScheduler()) return;
                            this._bitField = this._bitField | 134217728;
                        };

                        Promise.prototype._receiverAt = function (index) {
                            var ret = index === 0 ? this._receiver0 : this[index * 4 - 4 + 3];
                            if (ret === UNDEFINED_BINDING) {
                                return undefined;
                            } else if (ret === undefined && this._isBound()) {
                                return this._boundValue();
                            }
                            return ret;
                        };

                        Promise.prototype._promiseAt = function (index) {
                            return this[index * 4 - 4 + 2];
                        };

                        Promise.prototype._fulfillmentHandlerAt = function (index) {
                            return this[index * 4 - 4 + 0];
                        };

                        Promise.prototype._rejectionHandlerAt = function (index) {
                            return this[index * 4 - 4 + 1];
                        };

                        Promise.prototype._boundValue = function () {};

                        Promise.prototype._migrateCallback0 = function (follower) {
                            var bitField = follower._bitField;
                            var fulfill = follower._fulfillmentHandler0;
                            var reject = follower._rejectionHandler0;
                            var promise = follower._promise0;
                            var receiver = follower._receiverAt(0);
                            if (receiver === undefined) receiver = UNDEFINED_BINDING;
                            this._addCallbacks(fulfill, reject, promise, receiver, null);
                        };

                        Promise.prototype._migrateCallbackAt = function (follower, index) {
                            var fulfill = follower._fulfillmentHandlerAt(index);
                            var reject = follower._rejectionHandlerAt(index);
                            var promise = follower._promiseAt(index);
                            var receiver = follower._receiverAt(index);
                            if (receiver === undefined) receiver = UNDEFINED_BINDING;
                            this._addCallbacks(fulfill, reject, promise, receiver, null);
                        };

                        Promise.prototype._addCallbacks = function (fulfill, reject, promise, receiver, domain) {
                            var index = this._length();

                            if (index >= 65535 - 4) {
                                index = 0;
                                this._setLength(0);
                            }

                            if (index === 0) {
                                this._promise0 = promise;
                                this._receiver0 = receiver;
                                if (typeof fulfill === "function") {
                                    this._fulfillmentHandler0 = domain === null ? fulfill : util.domainBind(domain, fulfill);
                                }
                                if (typeof reject === "function") {
                                    this._rejectionHandler0 = domain === null ? reject : util.domainBind(domain, reject);
                                }
                            } else {
                                var base = index * 4 - 4;
                                this[base + 2] = promise;
                                this[base + 3] = receiver;
                                if (typeof fulfill === "function") {
                                    this[base + 0] = domain === null ? fulfill : util.domainBind(domain, fulfill);
                                }
                                if (typeof reject === "function") {
                                    this[base + 1] = domain === null ? reject : util.domainBind(domain, reject);
                                }
                            }
                            this._setLength(index + 1);
                            return index;
                        };

                        Promise.prototype._proxy = function (proxyable, arg) {
                            this._addCallbacks(undefined, undefined, arg, proxyable, null);
                        };

                        Promise.prototype._resolveCallback = function (value, shouldBind) {
                            if ((this._bitField & 117506048) !== 0) return;
                            if (value === this) return this._rejectCallback(makeSelfResolutionError(), false);
                            var maybePromise = tryConvertToPromise(value, this);
                            if (!(maybePromise instanceof Promise)) return this._fulfill(value);

                            if (shouldBind) this._propagateFrom(maybePromise, 2);

                            var promise = maybePromise._target();

                            if (promise === this) {
                                this._reject(makeSelfResolutionError());
                                return;
                            }

                            var bitField = promise._bitField;
                            if ((bitField & 50397184) === 0) {
                                var len = this._length();
                                if (len > 0) promise._migrateCallback0(this);
                                for (var i = 1; i < len; ++i) {
                                    promise._migrateCallbackAt(this, i);
                                }
                                this._setFollowing();
                                this._setLength(0);
                                this._setFollowee(promise);
                            } else if ((bitField & 33554432) !== 0) {
                                this._fulfill(promise._value());
                            } else if ((bitField & 16777216) !== 0) {
                                this._reject(promise._reason());
                            } else {
                                var reason = new CancellationError("late cancellation observer");
                                promise._attachExtraTrace(reason);
                                this._reject(reason);
                            }
                        };

                        Promise.prototype._rejectCallback = function (reason, synchronous, ignoreNonErrorWarnings) {
                            var trace = util.ensureErrorObject(reason);
                            var hasStack = trace === reason;
                            if (!hasStack && !ignoreNonErrorWarnings && debug.warnings()) {
                                var message = "a promise was rejected with a non-error: " + util.classString(reason);
                                this._warn(message, true);
                            }
                            this._attachExtraTrace(trace, synchronous ? hasStack : false);
                            this._reject(reason);
                        };

                        Promise.prototype._resolveFromExecutor = function (executor) {
                            var promise = this;
                            this._captureStackTrace();
                            this._pushContext();
                            var synchronous = true;
                            var r = this._execute(executor, function (value) {
                                promise._resolveCallback(value);
                            }, function (reason) {
                                promise._rejectCallback(reason, synchronous);
                            });
                            synchronous = false;
                            this._popContext();

                            if (r !== undefined) {
                                promise._rejectCallback(r, true);
                            }
                        };

                        Promise.prototype._settlePromiseFromHandler = function (handler, receiver, value, promise) {
                            var bitField = promise._bitField;
                            if ((bitField & 65536) !== 0) return;
                            promise._pushContext();
                            var x;
                            if (receiver === APPLY) {
                                if (!value || typeof value.length !== "number") {
                                    x = errorObj;
                                    x.e = new TypeError("cannot .spread() a non-array: " + util.classString(value));
                                } else {
                                    x = tryCatch(handler).apply(this._boundValue(), value);
                                }
                            } else {
                                x = tryCatch(handler).call(receiver, value);
                            }
                            var promiseCreated = promise._popContext();
                            bitField = promise._bitField;
                            if ((bitField & 65536) !== 0) return;

                            if (x === NEXT_FILTER) {
                                promise._reject(value);
                            } else if (x === errorObj) {
                                promise._rejectCallback(x.e, false);
                            } else {
                                debug.checkForgottenReturns(x, promiseCreated, "", promise, this);
                                promise._resolveCallback(x);
                            }
                        };

                        Promise.prototype._target = function () {
                            var ret = this;
                            while (ret._isFollowing()) ret = ret._followee();
                            return ret;
                        };

                        Promise.prototype._followee = function () {
                            return this._rejectionHandler0;
                        };

                        Promise.prototype._setFollowee = function (promise) {
                            this._rejectionHandler0 = promise;
                        };

                        Promise.prototype._settlePromise = function (promise, handler, receiver, value) {
                            var isPromise = promise instanceof Promise;
                            var bitField = this._bitField;
                            var asyncGuaranteed = (bitField & 134217728) !== 0;
                            if ((bitField & 65536) !== 0) {
                                if (isPromise) promise._invokeInternalOnCancel();

                                if (receiver instanceof PassThroughHandlerContext && receiver.isFinallyHandler()) {
                                    receiver.cancelPromise = promise;
                                    if (tryCatch(handler).call(receiver, value) === errorObj) {
                                        promise._reject(errorObj.e);
                                    }
                                } else if (handler === reflectHandler) {
                                    promise._fulfill(reflectHandler.call(receiver));
                                } else if (receiver instanceof Proxyable) {
                                    receiver._promiseCancelled(promise);
                                } else if (isPromise || promise instanceof PromiseArray) {
                                    promise._cancel();
                                } else {
                                    receiver.cancel();
                                }
                            } else if (typeof handler === "function") {
                                if (!isPromise) {
                                    handler.call(receiver, value, promise);
                                } else {
                                    if (asyncGuaranteed) promise._setAsyncGuaranteed();
                                    this._settlePromiseFromHandler(handler, receiver, value, promise);
                                }
                            } else if (receiver instanceof Proxyable) {
                                if (!receiver._isResolved()) {
                                    if ((bitField & 33554432) !== 0) {
                                        receiver._promiseFulfilled(value, promise);
                                    } else {
                                        receiver._promiseRejected(value, promise);
                                    }
                                }
                            } else if (isPromise) {
                                if (asyncGuaranteed) promise._setAsyncGuaranteed();
                                if ((bitField & 33554432) !== 0) {
                                    promise._fulfill(value);
                                } else {
                                    promise._reject(value);
                                }
                            }
                        };

                        Promise.prototype._settlePromiseLateCancellationObserver = function (ctx) {
                            var handler = ctx.handler;
                            var promise = ctx.promise;
                            var receiver = ctx.receiver;
                            var value = ctx.value;
                            if (typeof handler === "function") {
                                if (!(promise instanceof Promise)) {
                                    handler.call(receiver, value, promise);
                                } else {
                                    this._settlePromiseFromHandler(handler, receiver, value, promise);
                                }
                            } else if (promise instanceof Promise) {
                                promise._reject(value);
                            }
                        };

                        Promise.prototype._settlePromiseCtx = function (ctx) {
                            this._settlePromise(ctx.promise, ctx.handler, ctx.receiver, ctx.value);
                        };

                        Promise.prototype._settlePromise0 = function (handler, value, bitField) {
                            var promise = this._promise0;
                            var receiver = this._receiverAt(0);
                            this._promise0 = undefined;
                            this._receiver0 = undefined;
                            this._settlePromise(promise, handler, receiver, value);
                        };

                        Promise.prototype._clearCallbackDataAtIndex = function (index) {
                            var base = index * 4 - 4;
                            this[base + 2] = this[base + 3] = this[base + 0] = this[base + 1] = undefined;
                        };

                        Promise.prototype._fulfill = function (value) {
                            var bitField = this._bitField;
                            if ((bitField & 117506048) >>> 16) return;
                            if (value === this) {
                                var err = makeSelfResolutionError();
                                this._attachExtraTrace(err);
                                return this._reject(err);
                            }
                            this._setFulfilled();
                            this._rejectionHandler0 = value;

                            if ((bitField & 65535) > 0) {
                                if ((bitField & 134217728) !== 0) {
                                    this._settlePromises();
                                } else {
                                    async.settlePromises(this);
                                }
                            }
                        };

                        Promise.prototype._reject = function (reason) {
                            var bitField = this._bitField;
                            if ((bitField & 117506048) >>> 16) return;
                            this._setRejected();
                            this._fulfillmentHandler0 = reason;

                            if (this._isFinal()) {
                                return async.fatalError(reason, util.isNode);
                            }

                            if ((bitField & 65535) > 0) {
                                async.settlePromises(this);
                            } else {
                                this._ensurePossibleRejectionHandled();
                            }
                        };

                        Promise.prototype._fulfillPromises = function (len, value) {
                            for (var i = 1; i < len; i++) {
                                var handler = this._fulfillmentHandlerAt(i);
                                var promise = this._promiseAt(i);
                                var receiver = this._receiverAt(i);
                                this._clearCallbackDataAtIndex(i);
                                this._settlePromise(promise, handler, receiver, value);
                            }
                        };

                        Promise.prototype._rejectPromises = function (len, reason) {
                            for (var i = 1; i < len; i++) {
                                var handler = this._rejectionHandlerAt(i);
                                var promise = this._promiseAt(i);
                                var receiver = this._receiverAt(i);
                                this._clearCallbackDataAtIndex(i);
                                this._settlePromise(promise, handler, receiver, reason);
                            }
                        };

                        Promise.prototype._settlePromises = function () {
                            var bitField = this._bitField;
                            var len = bitField & 65535;

                            if (len > 0) {
                                if ((bitField & 16842752) !== 0) {
                                    var reason = this._fulfillmentHandler0;
                                    this._settlePromise0(this._rejectionHandler0, reason, bitField);
                                    this._rejectPromises(len, reason);
                                } else {
                                    var value = this._rejectionHandler0;
                                    this._settlePromise0(this._fulfillmentHandler0, value, bitField);
                                    this._fulfillPromises(len, value);
                                }
                                this._setLength(0);
                            }
                            this._clearCancellationData();
                        };

                        Promise.prototype._settledValue = function () {
                            var bitField = this._bitField;
                            if ((bitField & 33554432) !== 0) {
                                return this._rejectionHandler0;
                            } else if ((bitField & 16777216) !== 0) {
                                return this._fulfillmentHandler0;
                            }
                        };

                        function deferResolve(v) {
                            this.promise._resolveCallback(v);
                        }
                        function deferReject(v) {
                            this.promise._rejectCallback(v, false);
                        }

                        Promise.defer = Promise.pending = function () {
                            debug.deprecated("Promise.defer", "new Promise");
                            var promise = new Promise(INTERNAL);
                            return {
                                promise: promise,
                                resolve: deferResolve,
                                reject: deferReject
                            };
                        };

                        util.notEnumerableProp(Promise, "_makeSelfResolutionError", makeSelfResolutionError);

                        _dereq_("./method")(Promise, INTERNAL, tryConvertToPromise, apiRejection, debug);
                        _dereq_("./bind")(Promise, INTERNAL, tryConvertToPromise, debug);
                        _dereq_("./cancel")(Promise, PromiseArray, apiRejection, debug);
                        _dereq_("./direct_resolve")(Promise);
                        _dereq_("./synchronous_inspection")(Promise);
                        _dereq_("./join")(Promise, PromiseArray, tryConvertToPromise, INTERNAL, async, getDomain);
                        Promise.Promise = Promise;
                        Promise.version = "3.4.6";
                        _dereq_('./map.js')(Promise, PromiseArray, apiRejection, tryConvertToPromise, INTERNAL, debug);
                        _dereq_('./call_get.js')(Promise);
                        _dereq_('./using.js')(Promise, apiRejection, tryConvertToPromise, createContext, INTERNAL, debug);
                        _dereq_('./timers.js')(Promise, INTERNAL, debug);
                        _dereq_('./generators.js')(Promise, apiRejection, INTERNAL, tryConvertToPromise, Proxyable, debug);
                        _dereq_('./nodeify.js')(Promise);
                        _dereq_('./promisify.js')(Promise, INTERNAL);
                        _dereq_('./props.js')(Promise, PromiseArray, tryConvertToPromise, apiRejection);
                        _dereq_('./race.js')(Promise, INTERNAL, tryConvertToPromise, apiRejection);
                        _dereq_('./reduce.js')(Promise, PromiseArray, apiRejection, tryConvertToPromise, INTERNAL, debug);
                        _dereq_('./settle.js')(Promise, PromiseArray, debug);
                        _dereq_('./some.js')(Promise, PromiseArray, apiRejection);
                        _dereq_('./filter.js')(Promise, INTERNAL);
                        _dereq_('./each.js')(Promise, INTERNAL);
                        _dereq_('./any.js')(Promise);

                        util.toFastProperties(Promise);
                        util.toFastProperties(Promise.prototype);
                        function fillTypes(value) {
                            var p = new Promise(INTERNAL);
                            p._fulfillmentHandler0 = value;
                            p._rejectionHandler0 = value;
                            p._promise0 = value;
                            p._receiver0 = value;
                        }
                        // Complete slack tracking, opt out of field-type tracking and           
                        // stabilize map                                                         
                        fillTypes({ a: 1 });
                        fillTypes({ b: 2 });
                        fillTypes({ c: 3 });
                        fillTypes(1);
                        fillTypes(function () {});
                        fillTypes(undefined);
                        fillTypes(false);
                        fillTypes(new Promise(INTERNAL));
                        debug.setBounds(Async.firstLineError, util.lastLineError);
                        return Promise;
                    };
                }, { "./any.js": 1, "./async": 2, "./bind": 3, "./call_get.js": 5, "./cancel": 6, "./catch_filter": 7, "./context": 8, "./debuggability": 9, "./direct_resolve": 10, "./each.js": 11, "./errors": 12, "./es5": 13, "./filter.js": 14, "./finally": 15, "./generators.js": 16, "./join": 17, "./map.js": 18, "./method": 19, "./nodeback": 20, "./nodeify.js": 21, "./promise_array": 23, "./promisify.js": 24, "./props.js": 25, "./race.js": 27, "./reduce.js": 28, "./settle.js": 30, "./some.js": 31, "./synchronous_inspection": 32, "./thenables": 33, "./timers.js": 34, "./using.js": 35, "./util": 36 }], 23: [function (_dereq_, module, exports) {
                    "use strict";

                    module.exports = function (Promise, INTERNAL, tryConvertToPromise, apiRejection, Proxyable) {
                        var util = _dereq_("./util");
                        var isArray = util.isArray;

                        function toResolutionValue(val) {
                            switch (val) {
                                case -2:
                                    return [];
                                case -3:
                                    return {};
                            }
                        }

                        function PromiseArray(values) {
                            var promise = this._promise = new Promise(INTERNAL);
                            if (values instanceof Promise) {
                                promise._propagateFrom(values, 3);
                            }
                            promise._setOnCancel(this);
                            this._values = values;
                            this._length = 0;
                            this._totalResolved = 0;
                            this._init(undefined, -2);
                        }
                        util.inherits(PromiseArray, Proxyable);

                        PromiseArray.prototype.length = function () {
                            return this._length;
                        };

                        PromiseArray.prototype.promise = function () {
                            return this._promise;
                        };

                        PromiseArray.prototype._init = function init(_, resolveValueIfEmpty) {
                            var values = tryConvertToPromise(this._values, this._promise);
                            if (values instanceof Promise) {
                                values = values._target();
                                var bitField = values._bitField;
                                ;
                                this._values = values;

                                if ((bitField & 50397184) === 0) {
                                    this._promise._setAsyncGuaranteed();
                                    return values._then(init, this._reject, undefined, this, resolveValueIfEmpty);
                                } else if ((bitField & 33554432) !== 0) {
                                    values = values._value();
                                } else if ((bitField & 16777216) !== 0) {
                                    return this._reject(values._reason());
                                } else {
                                    return this._cancel();
                                }
                            }
                            values = util.asArray(values);
                            if (values === null) {
                                var err = apiRejection("expecting an array or an iterable object but got " + util.classString(values)).reason();
                                this._promise._rejectCallback(err, false);
                                return;
                            }

                            if (values.length === 0) {
                                if (resolveValueIfEmpty === -5) {
                                    this._resolveEmptyArray();
                                } else {
                                    this._resolve(toResolutionValue(resolveValueIfEmpty));
                                }
                                return;
                            }
                            this._iterate(values);
                        };

                        PromiseArray.prototype._iterate = function (values) {
                            var len = this.getActualLength(values.length);
                            this._length = len;
                            this._values = this.shouldCopyValues() ? new Array(len) : this._values;
                            var result = this._promise;
                            var isResolved = false;
                            var bitField = null;
                            for (var i = 0; i < len; ++i) {
                                var maybePromise = tryConvertToPromise(values[i], result);

                                if (maybePromise instanceof Promise) {
                                    maybePromise = maybePromise._target();
                                    bitField = maybePromise._bitField;
                                } else {
                                    bitField = null;
                                }

                                if (isResolved) {
                                    if (bitField !== null) {
                                        maybePromise.suppressUnhandledRejections();
                                    }
                                } else if (bitField !== null) {
                                    if ((bitField & 50397184) === 0) {
                                        maybePromise._proxy(this, i);
                                        this._values[i] = maybePromise;
                                    } else if ((bitField & 33554432) !== 0) {
                                        isResolved = this._promiseFulfilled(maybePromise._value(), i);
                                    } else if ((bitField & 16777216) !== 0) {
                                        isResolved = this._promiseRejected(maybePromise._reason(), i);
                                    } else {
                                        isResolved = this._promiseCancelled(i);
                                    }
                                } else {
                                    isResolved = this._promiseFulfilled(maybePromise, i);
                                }
                            }
                            if (!isResolved) result._setAsyncGuaranteed();
                        };

                        PromiseArray.prototype._isResolved = function () {
                            return this._values === null;
                        };

                        PromiseArray.prototype._resolve = function (value) {
                            this._values = null;
                            this._promise._fulfill(value);
                        };

                        PromiseArray.prototype._cancel = function () {
                            if (this._isResolved() || !this._promise._isCancellable()) return;
                            this._values = null;
                            this._promise._cancel();
                        };

                        PromiseArray.prototype._reject = function (reason) {
                            this._values = null;
                            this._promise._rejectCallback(reason, false);
                        };

                        PromiseArray.prototype._promiseFulfilled = function (value, index) {
                            this._values[index] = value;
                            var totalResolved = ++this._totalResolved;
                            if (totalResolved >= this._length) {
                                this._resolve(this._values);
                                return true;
                            }
                            return false;
                        };

                        PromiseArray.prototype._promiseCancelled = function () {
                            this._cancel();
                            return true;
                        };

                        PromiseArray.prototype._promiseRejected = function (reason) {
                            this._totalResolved++;
                            this._reject(reason);
                            return true;
                        };

                        PromiseArray.prototype._resultCancelled = function () {
                            if (this._isResolved()) return;
                            var values = this._values;
                            this._cancel();
                            if (values instanceof Promise) {
                                values.cancel();
                            } else {
                                for (var i = 0; i < values.length; ++i) {
                                    if (values[i] instanceof Promise) {
                                        values[i].cancel();
                                    }
                                }
                            }
                        };

                        PromiseArray.prototype.shouldCopyValues = function () {
                            return true;
                        };

                        PromiseArray.prototype.getActualLength = function (len) {
                            return len;
                        };

                        return PromiseArray;
                    };
                }, { "./util": 36 }], 24: [function (_dereq_, module, exports) {
                    "use strict";

                    module.exports = function (Promise, INTERNAL) {
                        var THIS = {};
                        var util = _dereq_("./util");
                        var nodebackForPromise = _dereq_("./nodeback");
                        var withAppended = util.withAppended;
                        var maybeWrapAsError = util.maybeWrapAsError;
                        var canEvaluate = util.canEvaluate;
                        var TypeError = _dereq_("./errors").TypeError;
                        var defaultSuffix = "Async";
                        var defaultPromisified = { __isPromisified__: true };
                        var noCopyProps = ["arity", "length", "name", "arguments", "caller", "callee", "prototype", "__isPromisified__"];
                        var noCopyPropsPattern = new RegExp("^(?:" + noCopyProps.join("|") + ")$");

                        var defaultFilter = function (name) {
                            return util.isIdentifier(name) && name.charAt(0) !== "_" && name !== "constructor";
                        };

                        function propsFilter(key) {
                            return !noCopyPropsPattern.test(key);
                        }

                        function isPromisified(fn) {
                            try {
                                return fn.__isPromisified__ === true;
                            } catch (e) {
                                return false;
                            }
                        }

                        function hasPromisified(obj, key, suffix) {
                            var val = util.getDataPropertyOrDefault(obj, key + suffix, defaultPromisified);
                            return val ? isPromisified(val) : false;
                        }
                        function checkValid(ret, suffix, suffixRegexp) {
                            for (var i = 0; i < ret.length; i += 2) {
                                var key = ret[i];
                                if (suffixRegexp.test(key)) {
                                    var keyWithoutAsyncSuffix = key.replace(suffixRegexp, "");
                                    for (var j = 0; j < ret.length; j += 2) {
                                        if (ret[j] === keyWithoutAsyncSuffix) {
                                            throw new TypeError("Cannot promisify an API that has normal methods with '%s'-suffix\u000a\u000a    See http://goo.gl/MqrFmX\u000a".replace("%s", suffix));
                                        }
                                    }
                                }
                            }
                        }

                        function promisifiableMethods(obj, suffix, suffixRegexp, filter) {
                            var keys = util.inheritedDataKeys(obj);
                            var ret = [];
                            for (var i = 0; i < keys.length; ++i) {
                                var key = keys[i];
                                var value = obj[key];
                                var passesDefaultFilter = filter === defaultFilter ? true : defaultFilter(key, value, obj);
                                if (typeof value === "function" && !isPromisified(value) && !hasPromisified(obj, key, suffix) && filter(key, value, obj, passesDefaultFilter)) {
                                    ret.push(key, value);
                                }
                            }
                            checkValid(ret, suffix, suffixRegexp);
                            return ret;
                        }

                        var escapeIdentRegex = function (str) {
                            return str.replace(/([$])/, "\\$");
                        };

                        var makeNodePromisifiedEval;
                        if (!true) {
                            var switchCaseArgumentOrder = function (likelyArgumentCount) {
                                var ret = [likelyArgumentCount];
                                var min = Math.max(0, likelyArgumentCount - 1 - 3);
                                for (var i = likelyArgumentCount - 1; i >= min; --i) {
                                    ret.push(i);
                                }
                                for (var i = likelyArgumentCount + 1; i <= 3; ++i) {
                                    ret.push(i);
                                }
                                return ret;
                            };

                            var argumentSequence = function (argumentCount) {
                                return util.filledRange(argumentCount, "_arg", "");
                            };

                            var parameterDeclaration = function (parameterCount) {
                                return util.filledRange(Math.max(parameterCount, 3), "_arg", "");
                            };

                            var parameterCount = function (fn) {
                                if (typeof fn.length === "number") {
                                    return Math.max(Math.min(fn.length, 1023 + 1), 0);
                                }
                                return 0;
                            };

                            makeNodePromisifiedEval = function (callback, receiver, originalName, fn, _, multiArgs) {
                                var newParameterCount = Math.max(0, parameterCount(fn) - 1);
                                var argumentOrder = switchCaseArgumentOrder(newParameterCount);
                                var shouldProxyThis = typeof callback === "string" || receiver === THIS;

                                function generateCallForArgumentCount(count) {
                                    var args = argumentSequence(count).join(", ");
                                    var comma = count > 0 ? ", " : "";
                                    var ret;
                                    if (shouldProxyThis) {
                                        ret = "ret = callback.call(this, {{args}}, nodeback); break;\n";
                                    } else {
                                        ret = receiver === undefined ? "ret = callback({{args}}, nodeback); break;\n" : "ret = callback.call(receiver, {{args}}, nodeback); break;\n";
                                    }
                                    return ret.replace("{{args}}", args).replace(", ", comma);
                                }

                                function generateArgumentSwitchCase() {
                                    var ret = "";
                                    for (var i = 0; i < argumentOrder.length; ++i) {
                                        ret += "case " + argumentOrder[i] + ":" + generateCallForArgumentCount(argumentOrder[i]);
                                    }

                                    ret += "                                                             \n\
        default:                                                             \n\
            var args = new Array(len + 1);                                   \n\
            var i = 0;                                                       \n\
            for (var i = 0; i < len; ++i) {                                  \n\
               args[i] = arguments[i];                                       \n\
            }                                                                \n\
            args[i] = nodeback;                                              \n\
            [CodeForCall]                                                    \n\
            break;                                                           \n\
        ".replace("[CodeForCall]", shouldProxyThis ? "ret = callback.apply(this, args);\n" : "ret = callback.apply(receiver, args);\n");
                                    return ret;
                                }

                                var getFunctionCode = typeof callback === "string" ? "this != null ? this['" + callback + "'] : fn" : "fn";
                                var body = "'use strict';                                                \n\
        var ret = function (Parameters) {                                    \n\
            'use strict';                                                    \n\
            var len = arguments.length;                                      \n\
            var promise = new Promise(INTERNAL);                             \n\
            promise._captureStackTrace();                                    \n\
            var nodeback = nodebackForPromise(promise, " + multiArgs + ");   \n\
            var ret;                                                         \n\
            var callback = tryCatch([GetFunctionCode]);                      \n\
            switch(len) {                                                    \n\
                [CodeForSwitchCase]                                          \n\
            }                                                                \n\
            if (ret === errorObj) {                                          \n\
                promise._rejectCallback(maybeWrapAsError(ret.e), true, true);\n\
            }                                                                \n\
            if (!promise._isFateSealed()) promise._setAsyncGuaranteed();     \n\
            return promise;                                                  \n\
        };                                                                   \n\
        notEnumerableProp(ret, '__isPromisified__', true);                   \n\
        return ret;                                                          \n\
    ".replace("[CodeForSwitchCase]", generateArgumentSwitchCase()).replace("[GetFunctionCode]", getFunctionCode);
                                body = body.replace("Parameters", parameterDeclaration(newParameterCount));
                                return new Function("Promise", "fn", "receiver", "withAppended", "maybeWrapAsError", "nodebackForPromise", "tryCatch", "errorObj", "notEnumerableProp", "INTERNAL", body)(Promise, fn, receiver, withAppended, maybeWrapAsError, nodebackForPromise, util.tryCatch, util.errorObj, util.notEnumerableProp, INTERNAL);
                            };
                        }

                        function makeNodePromisifiedClosure(callback, receiver, _, fn, __, multiArgs) {
                            var defaultThis = function () {
                                return this;
                            }();
                            var method = callback;
                            if (typeof method === "string") {
                                callback = fn;
                            }
                            function promisified() {
                                var _receiver = receiver;
                                if (receiver === THIS) _receiver = this;
                                var promise = new Promise(INTERNAL);
                                promise._captureStackTrace();
                                var cb = typeof method === "string" && this !== defaultThis ? this[method] : callback;
                                var fn = nodebackForPromise(promise, multiArgs);
                                try {
                                    cb.apply(_receiver, withAppended(arguments, fn));
                                } catch (e) {
                                    promise._rejectCallback(maybeWrapAsError(e), true, true);
                                }
                                if (!promise._isFateSealed()) promise._setAsyncGuaranteed();
                                return promise;
                            }
                            util.notEnumerableProp(promisified, "__isPromisified__", true);
                            return promisified;
                        }

                        var makeNodePromisified = canEvaluate ? makeNodePromisifiedEval : makeNodePromisifiedClosure;

                        function promisifyAll(obj, suffix, filter, promisifier, multiArgs) {
                            var suffixRegexp = new RegExp(escapeIdentRegex(suffix) + "$");
                            var methods = promisifiableMethods(obj, suffix, suffixRegexp, filter);

                            for (var i = 0, len = methods.length; i < len; i += 2) {
                                var key = methods[i];
                                var fn = methods[i + 1];
                                var promisifiedKey = key + suffix;
                                if (promisifier === makeNodePromisified) {
                                    obj[promisifiedKey] = makeNodePromisified(key, THIS, key, fn, suffix, multiArgs);
                                } else {
                                    var promisified = promisifier(fn, function () {
                                        return makeNodePromisified(key, THIS, key, fn, suffix, multiArgs);
                                    });
                                    util.notEnumerableProp(promisified, "__isPromisified__", true);
                                    obj[promisifiedKey] = promisified;
                                }
                            }
                            util.toFastProperties(obj);
                            return obj;
                        }

                        function promisify(callback, receiver, multiArgs) {
                            return makeNodePromisified(callback, receiver, undefined, callback, null, multiArgs);
                        }

                        Promise.promisify = function (fn, options) {
                            if (typeof fn !== "function") {
                                throw new TypeError("expecting a function but got " + util.classString(fn));
                            }
                            if (isPromisified(fn)) {
                                return fn;
                            }
                            options = Object(options);
                            var receiver = options.context === undefined ? THIS : options.context;
                            var multiArgs = !!options.multiArgs;
                            var ret = promisify(fn, receiver, multiArgs);
                            util.copyDescriptors(fn, ret, propsFilter);
                            return ret;
                        };

                        Promise.promisifyAll = function (target, options) {
                            if (typeof target !== "function" && typeof target !== "object") {
                                throw new TypeError("the target of promisifyAll must be an object or a function\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
                            }
                            options = Object(options);
                            var multiArgs = !!options.multiArgs;
                            var suffix = options.suffix;
                            if (typeof suffix !== "string") suffix = defaultSuffix;
                            var filter = options.filter;
                            if (typeof filter !== "function") filter = defaultFilter;
                            var promisifier = options.promisifier;
                            if (typeof promisifier !== "function") promisifier = makeNodePromisified;

                            if (!util.isIdentifier(suffix)) {
                                throw new RangeError("suffix must be a valid identifier\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
                            }

                            var keys = util.inheritedDataKeys(target);
                            for (var i = 0; i < keys.length; ++i) {
                                var value = target[keys[i]];
                                if (keys[i] !== "constructor" && util.isClass(value)) {
                                    promisifyAll(value.prototype, suffix, filter, promisifier, multiArgs);
                                    promisifyAll(value, suffix, filter, promisifier, multiArgs);
                                }
                            }

                            return promisifyAll(target, suffix, filter, promisifier, multiArgs);
                        };
                    };
                }, { "./errors": 12, "./nodeback": 20, "./util": 36 }], 25: [function (_dereq_, module, exports) {
                    "use strict";

                    module.exports = function (Promise, PromiseArray, tryConvertToPromise, apiRejection) {
                        var util = _dereq_("./util");
                        var isObject = util.isObject;
                        var es5 = _dereq_("./es5");
                        var Es6Map;
                        if (typeof Map === "function") Es6Map = Map;

                        var mapToEntries = function () {
                            var index = 0;
                            var size = 0;

                            function extractEntry(value, key) {
                                this[index] = value;
                                this[index + size] = key;
                                index++;
                            }

                            return function mapToEntries(map) {
                                size = map.size;
                                index = 0;
                                var ret = new Array(map.size * 2);
                                map.forEach(extractEntry, ret);
                                return ret;
                            };
                        }();

                        var entriesToMap = function (entries) {
                            var ret = new Es6Map();
                            var length = entries.length / 2 | 0;
                            for (var i = 0; i < length; ++i) {
                                var key = entries[length + i];
                                var value = entries[i];
                                ret.set(key, value);
                            }
                            return ret;
                        };

                        function PropertiesPromiseArray(obj) {
                            var isMap = false;
                            var entries;
                            if (Es6Map !== undefined && obj instanceof Es6Map) {
                                entries = mapToEntries(obj);
                                isMap = true;
                            } else {
                                var keys = es5.keys(obj);
                                var len = keys.length;
                                entries = new Array(len * 2);
                                for (var i = 0; i < len; ++i) {
                                    var key = keys[i];
                                    entries[i] = obj[key];
                                    entries[i + len] = key;
                                }
                            }
                            this.constructor$(entries);
                            this._isMap = isMap;
                            this._init$(undefined, -3);
                        }
                        util.inherits(PropertiesPromiseArray, PromiseArray);

                        PropertiesPromiseArray.prototype._init = function () {};

                        PropertiesPromiseArray.prototype._promiseFulfilled = function (value, index) {
                            this._values[index] = value;
                            var totalResolved = ++this._totalResolved;
                            if (totalResolved >= this._length) {
                                var val;
                                if (this._isMap) {
                                    val = entriesToMap(this._values);
                                } else {
                                    val = {};
                                    var keyOffset = this.length();
                                    for (var i = 0, len = this.length(); i < len; ++i) {
                                        val[this._values[i + keyOffset]] = this._values[i];
                                    }
                                }
                                this._resolve(val);
                                return true;
                            }
                            return false;
                        };

                        PropertiesPromiseArray.prototype.shouldCopyValues = function () {
                            return false;
                        };

                        PropertiesPromiseArray.prototype.getActualLength = function (len) {
                            return len >> 1;
                        };

                        function props(promises) {
                            var ret;
                            var castValue = tryConvertToPromise(promises);

                            if (!isObject(castValue)) {
                                return apiRejection("cannot await properties of a non-object\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
                            } else if (castValue instanceof Promise) {
                                ret = castValue._then(Promise.props, undefined, undefined, undefined, undefined);
                            } else {
                                ret = new PropertiesPromiseArray(castValue).promise();
                            }

                            if (castValue instanceof Promise) {
                                ret._propagateFrom(castValue, 2);
                            }
                            return ret;
                        }

                        Promise.prototype.props = function () {
                            return props(this);
                        };

                        Promise.props = function (promises) {
                            return props(promises);
                        };
                    };
                }, { "./es5": 13, "./util": 36 }], 26: [function (_dereq_, module, exports) {
                    "use strict";

                    function arrayMove(src, srcIndex, dst, dstIndex, len) {
                        for (var j = 0; j < len; ++j) {
                            dst[j + dstIndex] = src[j + srcIndex];
                            src[j + srcIndex] = void 0;
                        }
                    }

                    function Queue(capacity) {
                        this._capacity = capacity;
                        this._length = 0;
                        this._front = 0;
                    }

                    Queue.prototype._willBeOverCapacity = function (size) {
                        return this._capacity < size;
                    };

                    Queue.prototype._pushOne = function (arg) {
                        var length = this.length();
                        this._checkCapacity(length + 1);
                        var i = this._front + length & this._capacity - 1;
                        this[i] = arg;
                        this._length = length + 1;
                    };

                    Queue.prototype._unshiftOne = function (value) {
                        var capacity = this._capacity;
                        this._checkCapacity(this.length() + 1);
                        var front = this._front;
                        var i = (front - 1 & capacity - 1 ^ capacity) - capacity;
                        this[i] = value;
                        this._front = i;
                        this._length = this.length() + 1;
                    };

                    Queue.prototype.unshift = function (fn, receiver, arg) {
                        this._unshiftOne(arg);
                        this._unshiftOne(receiver);
                        this._unshiftOne(fn);
                    };

                    Queue.prototype.push = function (fn, receiver, arg) {
                        var length = this.length() + 3;
                        if (this._willBeOverCapacity(length)) {
                            this._pushOne(fn);
                            this._pushOne(receiver);
                            this._pushOne(arg);
                            return;
                        }
                        var j = this._front + length - 3;
                        this._checkCapacity(length);
                        var wrapMask = this._capacity - 1;
                        this[j + 0 & wrapMask] = fn;
                        this[j + 1 & wrapMask] = receiver;
                        this[j + 2 & wrapMask] = arg;
                        this._length = length;
                    };

                    Queue.prototype.shift = function () {
                        var front = this._front,
                            ret = this[front];

                        this[front] = undefined;
                        this._front = front + 1 & this._capacity - 1;
                        this._length--;
                        return ret;
                    };

                    Queue.prototype.length = function () {
                        return this._length;
                    };

                    Queue.prototype._checkCapacity = function (size) {
                        if (this._capacity < size) {
                            this._resizeTo(this._capacity << 1);
                        }
                    };

                    Queue.prototype._resizeTo = function (capacity) {
                        var oldCapacity = this._capacity;
                        this._capacity = capacity;
                        var front = this._front;
                        var length = this._length;
                        var moveItemsCount = front + length & oldCapacity - 1;
                        arrayMove(this, 0, this, oldCapacity, moveItemsCount);
                    };

                    module.exports = Queue;
                }, {}], 27: [function (_dereq_, module, exports) {
                    "use strict";

                    module.exports = function (Promise, INTERNAL, tryConvertToPromise, apiRejection) {
                        var util = _dereq_("./util");

                        var raceLater = function (promise) {
                            return promise.then(function (array) {
                                return race(array, promise);
                            });
                        };

                        function race(promises, parent) {
                            var maybePromise = tryConvertToPromise(promises);

                            if (maybePromise instanceof Promise) {
                                return raceLater(maybePromise);
                            } else {
                                promises = util.asArray(promises);
                                if (promises === null) return apiRejection("expecting an array or an iterable object but got " + util.classString(promises));
                            }

                            var ret = new Promise(INTERNAL);
                            if (parent !== undefined) {
                                ret._propagateFrom(parent, 3);
                            }
                            var fulfill = ret._fulfill;
                            var reject = ret._reject;
                            for (var i = 0, len = promises.length; i < len; ++i) {
                                var val = promises[i];

                                if (val === undefined && !(i in promises)) {
                                    continue;
                                }

                                Promise.cast(val)._then(fulfill, reject, undefined, ret, null);
                            }
                            return ret;
                        }

                        Promise.race = function (promises) {
                            return race(promises, undefined);
                        };

                        Promise.prototype.race = function () {
                            return race(this, undefined);
                        };
                    };
                }, { "./util": 36 }], 28: [function (_dereq_, module, exports) {
                    "use strict";

                    module.exports = function (Promise, PromiseArray, apiRejection, tryConvertToPromise, INTERNAL, debug) {
                        var getDomain = Promise._getDomain;
                        var util = _dereq_("./util");
                        var tryCatch = util.tryCatch;

                        function ReductionPromiseArray(promises, fn, initialValue, _each) {
                            this.constructor$(promises);
                            var domain = getDomain();
                            this._fn = domain === null ? fn : util.domainBind(domain, fn);
                            if (initialValue !== undefined) {
                                initialValue = Promise.resolve(initialValue);
                                initialValue._attachCancellationCallback(this);
                            }
                            this._initialValue = initialValue;
                            this._currentCancellable = null;
                            if (_each === INTERNAL) {
                                this._eachValues = Array(this._length);
                            } else if (_each === 0) {
                                this._eachValues = null;
                            } else {
                                this._eachValues = undefined;
                            }
                            this._promise._captureStackTrace();
                            this._init$(undefined, -5);
                        }
                        util.inherits(ReductionPromiseArray, PromiseArray);

                        ReductionPromiseArray.prototype._gotAccum = function (accum) {
                            if (this._eachValues !== undefined && this._eachValues !== null && accum !== INTERNAL) {
                                this._eachValues.push(accum);
                            }
                        };

                        ReductionPromiseArray.prototype._eachComplete = function (value) {
                            if (this._eachValues !== null) {
                                this._eachValues.push(value);
                            }
                            return this._eachValues;
                        };

                        ReductionPromiseArray.prototype._init = function () {};

                        ReductionPromiseArray.prototype._resolveEmptyArray = function () {
                            this._resolve(this._eachValues !== undefined ? this._eachValues : this._initialValue);
                        };

                        ReductionPromiseArray.prototype.shouldCopyValues = function () {
                            return false;
                        };

                        ReductionPromiseArray.prototype._resolve = function (value) {
                            this._promise._resolveCallback(value);
                            this._values = null;
                        };

                        ReductionPromiseArray.prototype._resultCancelled = function (sender) {
                            if (sender === this._initialValue) return this._cancel();
                            if (this._isResolved()) return;
                            this._resultCancelled$();
                            if (this._currentCancellable instanceof Promise) {
                                this._currentCancellable.cancel();
                            }
                            if (this._initialValue instanceof Promise) {
                                this._initialValue.cancel();
                            }
                        };

                        ReductionPromiseArray.prototype._iterate = function (values) {
                            this._values = values;
                            var value;
                            var i;
                            var length = values.length;
                            if (this._initialValue !== undefined) {
                                value = this._initialValue;
                                i = 0;
                            } else {
                                value = Promise.resolve(values[0]);
                                i = 1;
                            }

                            this._currentCancellable = value;

                            if (!value.isRejected()) {
                                for (; i < length; ++i) {
                                    var ctx = {
                                        accum: null,
                                        value: values[i],
                                        index: i,
                                        length: length,
                                        array: this
                                    };
                                    value = value._then(gotAccum, undefined, undefined, ctx, undefined);
                                }
                            }

                            if (this._eachValues !== undefined) {
                                value = value._then(this._eachComplete, undefined, undefined, this, undefined);
                            }
                            value._then(completed, completed, undefined, value, this);
                        };

                        Promise.prototype.reduce = function (fn, initialValue) {
                            return reduce(this, fn, initialValue, null);
                        };

                        Promise.reduce = function (promises, fn, initialValue, _each) {
                            return reduce(promises, fn, initialValue, _each);
                        };

                        function completed(valueOrReason, array) {
                            if (this.isFulfilled()) {
                                array._resolve(valueOrReason);
                            } else {
                                array._reject(valueOrReason);
                            }
                        }

                        function reduce(promises, fn, initialValue, _each) {
                            if (typeof fn !== "function") {
                                return apiRejection("expecting a function but got " + util.classString(fn));
                            }
                            var array = new ReductionPromiseArray(promises, fn, initialValue, _each);
                            return array.promise();
                        }

                        function gotAccum(accum) {
                            this.accum = accum;
                            this.array._gotAccum(accum);
                            var value = tryConvertToPromise(this.value, this.array._promise);
                            if (value instanceof Promise) {
                                this.array._currentCancellable = value;
                                return value._then(gotValue, undefined, undefined, this, undefined);
                            } else {
                                return gotValue.call(this, value);
                            }
                        }

                        function gotValue(value) {
                            var array = this.array;
                            var promise = array._promise;
                            var fn = tryCatch(array._fn);
                            promise._pushContext();
                            var ret;
                            if (array._eachValues !== undefined) {
                                ret = fn.call(promise._boundValue(), value, this.index, this.length);
                            } else {
                                ret = fn.call(promise._boundValue(), this.accum, value, this.index, this.length);
                            }
                            if (ret instanceof Promise) {
                                array._currentCancellable = ret;
                            }
                            var promiseCreated = promise._popContext();
                            debug.checkForgottenReturns(ret, promiseCreated, array._eachValues !== undefined ? "Promise.each" : "Promise.reduce", promise);
                            return ret;
                        }
                    };
                }, { "./util": 36 }], 29: [function (_dereq_, module, exports) {
                    "use strict";

                    var util = _dereq_("./util");
                    var schedule;
                    var noAsyncScheduler = function () {
                        throw new Error("No async scheduler available\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
                    };
                    var NativePromise = util.getNativePromise();
                    if (util.isNode && typeof MutationObserver === "undefined") {
                        var GlobalSetImmediate = global.setImmediate;
                        var ProcessNextTick = process.nextTick;
                        schedule = util.isRecentNode ? function (fn) {
                            GlobalSetImmediate.call(global, fn);
                        } : function (fn) {
                            ProcessNextTick.call(process, fn);
                        };
                    } else if (typeof NativePromise === "function" && typeof NativePromise.resolve === "function") {
                        var nativePromise = NativePromise.resolve();
                        schedule = function (fn) {
                            nativePromise.then(fn);
                        };
                    } else if (typeof MutationObserver !== "undefined" && !(typeof window !== "undefined" && window.navigator && (window.navigator.standalone || window.cordova))) {
                        schedule = function () {
                            var div = document.createElement("div");
                            var opts = { attributes: true };
                            var toggleScheduled = false;
                            var div2 = document.createElement("div");
                            var o2 = new MutationObserver(function () {
                                div.classList.toggle("foo");
                                toggleScheduled = false;
                            });
                            o2.observe(div2, opts);

                            var scheduleToggle = function () {
                                if (toggleScheduled) return;
                                toggleScheduled = true;
                                div2.classList.toggle("foo");
                            };

                            return function schedule(fn) {
                                var o = new MutationObserver(function () {
                                    o.disconnect();
                                    fn();
                                });
                                o.observe(div, opts);
                                scheduleToggle();
                            };
                        }();
                    } else if (typeof setImmediate !== "undefined") {
                        schedule = function (fn) {
                            setImmediate(fn);
                        };
                    } else if (typeof setTimeout !== "undefined") {
                        schedule = function (fn) {
                            setTimeout(fn, 0);
                        };
                    } else {
                        schedule = noAsyncScheduler;
                    }
                    module.exports = schedule;
                }, { "./util": 36 }], 30: [function (_dereq_, module, exports) {
                    "use strict";

                    module.exports = function (Promise, PromiseArray, debug) {
                        var PromiseInspection = Promise.PromiseInspection;
                        var util = _dereq_("./util");

                        function SettledPromiseArray(values) {
                            this.constructor$(values);
                        }
                        util.inherits(SettledPromiseArray, PromiseArray);

                        SettledPromiseArray.prototype._promiseResolved = function (index, inspection) {
                            this._values[index] = inspection;
                            var totalResolved = ++this._totalResolved;
                            if (totalResolved >= this._length) {
                                this._resolve(this._values);
                                return true;
                            }
                            return false;
                        };

                        SettledPromiseArray.prototype._promiseFulfilled = function (value, index) {
                            var ret = new PromiseInspection();
                            ret._bitField = 33554432;
                            ret._settledValueField = value;
                            return this._promiseResolved(index, ret);
                        };
                        SettledPromiseArray.prototype._promiseRejected = function (reason, index) {
                            var ret = new PromiseInspection();
                            ret._bitField = 16777216;
                            ret._settledValueField = reason;
                            return this._promiseResolved(index, ret);
                        };

                        Promise.settle = function (promises) {
                            debug.deprecated(".settle()", ".reflect()");
                            return new SettledPromiseArray(promises).promise();
                        };

                        Promise.prototype.settle = function () {
                            return Promise.settle(this);
                        };
                    };
                }, { "./util": 36 }], 31: [function (_dereq_, module, exports) {
                    "use strict";

                    module.exports = function (Promise, PromiseArray, apiRejection) {
                        var util = _dereq_("./util");
                        var RangeError = _dereq_("./errors").RangeError;
                        var AggregateError = _dereq_("./errors").AggregateError;
                        var isArray = util.isArray;
                        var CANCELLATION = {};

                        function SomePromiseArray(values) {
                            this.constructor$(values);
                            this._howMany = 0;
                            this._unwrap = false;
                            this._initialized = false;
                        }
                        util.inherits(SomePromiseArray, PromiseArray);

                        SomePromiseArray.prototype._init = function () {
                            if (!this._initialized) {
                                return;
                            }
                            if (this._howMany === 0) {
                                this._resolve([]);
                                return;
                            }
                            this._init$(undefined, -5);
                            var isArrayResolved = isArray(this._values);
                            if (!this._isResolved() && isArrayResolved && this._howMany > this._canPossiblyFulfill()) {
                                this._reject(this._getRangeError(this.length()));
                            }
                        };

                        SomePromiseArray.prototype.init = function () {
                            this._initialized = true;
                            this._init();
                        };

                        SomePromiseArray.prototype.setUnwrap = function () {
                            this._unwrap = true;
                        };

                        SomePromiseArray.prototype.howMany = function () {
                            return this._howMany;
                        };

                        SomePromiseArray.prototype.setHowMany = function (count) {
                            this._howMany = count;
                        };

                        SomePromiseArray.prototype._promiseFulfilled = function (value) {
                            this._addFulfilled(value);
                            if (this._fulfilled() === this.howMany()) {
                                this._values.length = this.howMany();
                                if (this.howMany() === 1 && this._unwrap) {
                                    this._resolve(this._values[0]);
                                } else {
                                    this._resolve(this._values);
                                }
                                return true;
                            }
                            return false;
                        };
                        SomePromiseArray.prototype._promiseRejected = function (reason) {
                            this._addRejected(reason);
                            return this._checkOutcome();
                        };

                        SomePromiseArray.prototype._promiseCancelled = function () {
                            if (this._values instanceof Promise || this._values == null) {
                                return this._cancel();
                            }
                            this._addRejected(CANCELLATION);
                            return this._checkOutcome();
                        };

                        SomePromiseArray.prototype._checkOutcome = function () {
                            if (this.howMany() > this._canPossiblyFulfill()) {
                                var e = new AggregateError();
                                for (var i = this.length(); i < this._values.length; ++i) {
                                    if (this._values[i] !== CANCELLATION) {
                                        e.push(this._values[i]);
                                    }
                                }
                                if (e.length > 0) {
                                    this._reject(e);
                                } else {
                                    this._cancel();
                                }
                                return true;
                            }
                            return false;
                        };

                        SomePromiseArray.prototype._fulfilled = function () {
                            return this._totalResolved;
                        };

                        SomePromiseArray.prototype._rejected = function () {
                            return this._values.length - this.length();
                        };

                        SomePromiseArray.prototype._addRejected = function (reason) {
                            this._values.push(reason);
                        };

                        SomePromiseArray.prototype._addFulfilled = function (value) {
                            this._values[this._totalResolved++] = value;
                        };

                        SomePromiseArray.prototype._canPossiblyFulfill = function () {
                            return this.length() - this._rejected();
                        };

                        SomePromiseArray.prototype._getRangeError = function (count) {
                            var message = "Input array must contain at least " + this._howMany + " items but contains only " + count + " items";
                            return new RangeError(message);
                        };

                        SomePromiseArray.prototype._resolveEmptyArray = function () {
                            this._reject(this._getRangeError(0));
                        };

                        function some(promises, howMany) {
                            if ((howMany | 0) !== howMany || howMany < 0) {
                                return apiRejection("expecting a positive integer\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
                            }
                            var ret = new SomePromiseArray(promises);
                            var promise = ret.promise();
                            ret.setHowMany(howMany);
                            ret.init();
                            return promise;
                        }

                        Promise.some = function (promises, howMany) {
                            return some(promises, howMany);
                        };

                        Promise.prototype.some = function (howMany) {
                            return some(this, howMany);
                        };

                        Promise._SomePromiseArray = SomePromiseArray;
                    };
                }, { "./errors": 12, "./util": 36 }], 32: [function (_dereq_, module, exports) {
                    "use strict";

                    module.exports = function (Promise) {
                        function PromiseInspection(promise) {
                            if (promise !== undefined) {
                                promise = promise._target();
                                this._bitField = promise._bitField;
                                this._settledValueField = promise._isFateSealed() ? promise._settledValue() : undefined;
                            } else {
                                this._bitField = 0;
                                this._settledValueField = undefined;
                            }
                        }

                        PromiseInspection.prototype._settledValue = function () {
                            return this._settledValueField;
                        };

                        var value = PromiseInspection.prototype.value = function () {
                            if (!this.isFulfilled()) {
                                throw new TypeError("cannot get fulfillment value of a non-fulfilled promise\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
                            }
                            return this._settledValue();
                        };

                        var reason = PromiseInspection.prototype.error = PromiseInspection.prototype.reason = function () {
                            if (!this.isRejected()) {
                                throw new TypeError("cannot get rejection reason of a non-rejected promise\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
                            }
                            return this._settledValue();
                        };

                        var isFulfilled = PromiseInspection.prototype.isFulfilled = function () {
                            return (this._bitField & 33554432) !== 0;
                        };

                        var isRejected = PromiseInspection.prototype.isRejected = function () {
                            return (this._bitField & 16777216) !== 0;
                        };

                        var isPending = PromiseInspection.prototype.isPending = function () {
                            return (this._bitField & 50397184) === 0;
                        };

                        var isResolved = PromiseInspection.prototype.isResolved = function () {
                            return (this._bitField & 50331648) !== 0;
                        };

                        PromiseInspection.prototype.isCancelled = function () {
                            return (this._bitField & 8454144) !== 0;
                        };

                        Promise.prototype.__isCancelled = function () {
                            return (this._bitField & 65536) === 65536;
                        };

                        Promise.prototype._isCancelled = function () {
                            return this._target().__isCancelled();
                        };

                        Promise.prototype.isCancelled = function () {
                            return (this._target()._bitField & 8454144) !== 0;
                        };

                        Promise.prototype.isPending = function () {
                            return isPending.call(this._target());
                        };

                        Promise.prototype.isRejected = function () {
                            return isRejected.call(this._target());
                        };

                        Promise.prototype.isFulfilled = function () {
                            return isFulfilled.call(this._target());
                        };

                        Promise.prototype.isResolved = function () {
                            return isResolved.call(this._target());
                        };

                        Promise.prototype.value = function () {
                            return value.call(this._target());
                        };

                        Promise.prototype.reason = function () {
                            var target = this._target();
                            target._unsetRejectionIsUnhandled();
                            return reason.call(target);
                        };

                        Promise.prototype._value = function () {
                            return this._settledValue();
                        };

                        Promise.prototype._reason = function () {
                            this._unsetRejectionIsUnhandled();
                            return this._settledValue();
                        };

                        Promise.PromiseInspection = PromiseInspection;
                    };
                }, {}], 33: [function (_dereq_, module, exports) {
                    "use strict";

                    module.exports = function (Promise, INTERNAL) {
                        var util = _dereq_("./util");
                        var errorObj = util.errorObj;
                        var isObject = util.isObject;

                        function tryConvertToPromise(obj, context) {
                            if (isObject(obj)) {
                                if (obj instanceof Promise) return obj;
                                var then = getThen(obj);
                                if (then === errorObj) {
                                    if (context) context._pushContext();
                                    var ret = Promise.reject(then.e);
                                    if (context) context._popContext();
                                    return ret;
                                } else if (typeof then === "function") {
                                    if (isAnyBluebirdPromise(obj)) {
                                        var ret = new Promise(INTERNAL);
                                        obj._then(ret._fulfill, ret._reject, undefined, ret, null);
                                        return ret;
                                    }
                                    return doThenable(obj, then, context);
                                }
                            }
                            return obj;
                        }

                        function doGetThen(obj) {
                            return obj.then;
                        }

                        function getThen(obj) {
                            try {
                                return doGetThen(obj);
                            } catch (e) {
                                errorObj.e = e;
                                return errorObj;
                            }
                        }

                        var hasProp = {}.hasOwnProperty;
                        function isAnyBluebirdPromise(obj) {
                            try {
                                return hasProp.call(obj, "_promise0");
                            } catch (e) {
                                return false;
                            }
                        }

                        function doThenable(x, then, context) {
                            var promise = new Promise(INTERNAL);
                            var ret = promise;
                            if (context) context._pushContext();
                            promise._captureStackTrace();
                            if (context) context._popContext();
                            var synchronous = true;
                            var result = util.tryCatch(then).call(x, resolve, reject);
                            synchronous = false;

                            if (promise && result === errorObj) {
                                promise._rejectCallback(result.e, true, true);
                                promise = null;
                            }

                            function resolve(value) {
                                if (!promise) return;
                                promise._resolveCallback(value);
                                promise = null;
                            }

                            function reject(reason) {
                                if (!promise) return;
                                promise._rejectCallback(reason, synchronous, true);
                                promise = null;
                            }
                            return ret;
                        }

                        return tryConvertToPromise;
                    };
                }, { "./util": 36 }], 34: [function (_dereq_, module, exports) {
                    "use strict";

                    module.exports = function (Promise, INTERNAL, debug) {
                        var util = _dereq_("./util");
                        var TimeoutError = Promise.TimeoutError;

                        function HandleWrapper(handle) {
                            this.handle = handle;
                        }

                        HandleWrapper.prototype._resultCancelled = function () {
                            clearTimeout(this.handle);
                        };

                        var afterValue = function (value) {
                            return delay(+this).thenReturn(value);
                        };
                        var delay = Promise.delay = function (ms, value) {
                            var ret;
                            var handle;
                            if (value !== undefined) {
                                ret = Promise.resolve(value)._then(afterValue, null, null, ms, undefined);
                                if (debug.cancellation() && value instanceof Promise) {
                                    ret._setOnCancel(value);
                                }
                            } else {
                                ret = new Promise(INTERNAL);
                                handle = setTimeout(function () {
                                    ret._fulfill();
                                }, +ms);
                                if (debug.cancellation()) {
                                    ret._setOnCancel(new HandleWrapper(handle));
                                }
                                ret._captureStackTrace();
                            }
                            ret._setAsyncGuaranteed();
                            return ret;
                        };

                        Promise.prototype.delay = function (ms) {
                            return delay(ms, this);
                        };

                        var afterTimeout = function (promise, message, parent) {
                            var err;
                            if (typeof message !== "string") {
                                if (message instanceof Error) {
                                    err = message;
                                } else {
                                    err = new TimeoutError("operation timed out");
                                }
                            } else {
                                err = new TimeoutError(message);
                            }
                            util.markAsOriginatingFromRejection(err);
                            promise._attachExtraTrace(err);
                            promise._reject(err);

                            if (parent != null) {
                                parent.cancel();
                            }
                        };

                        function successClear(value) {
                            clearTimeout(this.handle);
                            return value;
                        }

                        function failureClear(reason) {
                            clearTimeout(this.handle);
                            throw reason;
                        }

                        Promise.prototype.timeout = function (ms, message) {
                            ms = +ms;
                            var ret, parent;

                            var handleWrapper = new HandleWrapper(setTimeout(function timeoutTimeout() {
                                if (ret.isPending()) {
                                    afterTimeout(ret, message, parent);
                                }
                            }, ms));

                            if (debug.cancellation()) {
                                parent = this.then();
                                ret = parent._then(successClear, failureClear, undefined, handleWrapper, undefined);
                                ret._setOnCancel(handleWrapper);
                            } else {
                                ret = this._then(successClear, failureClear, undefined, handleWrapper, undefined);
                            }

                            return ret;
                        };
                    };
                }, { "./util": 36 }], 35: [function (_dereq_, module, exports) {
                    "use strict";

                    module.exports = function (Promise, apiRejection, tryConvertToPromise, createContext, INTERNAL, debug) {
                        var util = _dereq_("./util");
                        var TypeError = _dereq_("./errors").TypeError;
                        var inherits = _dereq_("./util").inherits;
                        var errorObj = util.errorObj;
                        var tryCatch = util.tryCatch;
                        var NULL = {};

                        function thrower(e) {
                            setTimeout(function () {
                                throw e;
                            }, 0);
                        }

                        function castPreservingDisposable(thenable) {
                            var maybePromise = tryConvertToPromise(thenable);
                            if (maybePromise !== thenable && typeof thenable._isDisposable === "function" && typeof thenable._getDisposer === "function" && thenable._isDisposable()) {
                                maybePromise._setDisposable(thenable._getDisposer());
                            }
                            return maybePromise;
                        }
                        function dispose(resources, inspection) {
                            var i = 0;
                            var len = resources.length;
                            var ret = new Promise(INTERNAL);
                            function iterator() {
                                if (i >= len) return ret._fulfill();
                                var maybePromise = castPreservingDisposable(resources[i++]);
                                if (maybePromise instanceof Promise && maybePromise._isDisposable()) {
                                    try {
                                        maybePromise = tryConvertToPromise(maybePromise._getDisposer().tryDispose(inspection), resources.promise);
                                    } catch (e) {
                                        return thrower(e);
                                    }
                                    if (maybePromise instanceof Promise) {
                                        return maybePromise._then(iterator, thrower, null, null, null);
                                    }
                                }
                                iterator();
                            }
                            iterator();
                            return ret;
                        }

                        function Disposer(data, promise, context) {
                            this._data = data;
                            this._promise = promise;
                            this._context = context;
                        }

                        Disposer.prototype.data = function () {
                            return this._data;
                        };

                        Disposer.prototype.promise = function () {
                            return this._promise;
                        };

                        Disposer.prototype.resource = function () {
                            if (this.promise().isFulfilled()) {
                                return this.promise().value();
                            }
                            return NULL;
                        };

                        Disposer.prototype.tryDispose = function (inspection) {
                            var resource = this.resource();
                            var context = this._context;
                            if (context !== undefined) context._pushContext();
                            var ret = resource !== NULL ? this.doDispose(resource, inspection) : null;
                            if (context !== undefined) context._popContext();
                            this._promise._unsetDisposable();
                            this._data = null;
                            return ret;
                        };

                        Disposer.isDisposer = function (d) {
                            return d != null && typeof d.resource === "function" && typeof d.tryDispose === "function";
                        };

                        function FunctionDisposer(fn, promise, context) {
                            this.constructor$(fn, promise, context);
                        }
                        inherits(FunctionDisposer, Disposer);

                        FunctionDisposer.prototype.doDispose = function (resource, inspection) {
                            var fn = this.data();
                            return fn.call(resource, resource, inspection);
                        };

                        function maybeUnwrapDisposer(value) {
                            if (Disposer.isDisposer(value)) {
                                this.resources[this.index]._setDisposable(value);
                                return value.promise();
                            }
                            return value;
                        }

                        function ResourceList(length) {
                            this.length = length;
                            this.promise = null;
                            this[length - 1] = null;
                        }

                        ResourceList.prototype._resultCancelled = function () {
                            var len = this.length;
                            for (var i = 0; i < len; ++i) {
                                var item = this[i];
                                if (item instanceof Promise) {
                                    item.cancel();
                                }
                            }
                        };

                        Promise.using = function () {
                            var len = arguments.length;
                            if (len < 2) return apiRejection("you must pass at least 2 arguments to Promise.using");
                            var fn = arguments[len - 1];
                            if (typeof fn !== "function") {
                                return apiRejection("expecting a function but got " + util.classString(fn));
                            }
                            var input;
                            var spreadArgs = true;
                            if (len === 2 && Array.isArray(arguments[0])) {
                                input = arguments[0];
                                len = input.length;
                                spreadArgs = false;
                            } else {
                                input = arguments;
                                len--;
                            }
                            var resources = new ResourceList(len);
                            for (var i = 0; i < len; ++i) {
                                var resource = input[i];
                                if (Disposer.isDisposer(resource)) {
                                    var disposer = resource;
                                    resource = resource.promise();
                                    resource._setDisposable(disposer);
                                } else {
                                    var maybePromise = tryConvertToPromise(resource);
                                    if (maybePromise instanceof Promise) {
                                        resource = maybePromise._then(maybeUnwrapDisposer, null, null, {
                                            resources: resources,
                                            index: i
                                        }, undefined);
                                    }
                                }
                                resources[i] = resource;
                            }

                            var reflectedResources = new Array(resources.length);
                            for (var i = 0; i < reflectedResources.length; ++i) {
                                reflectedResources[i] = Promise.resolve(resources[i]).reflect();
                            }

                            var resultPromise = Promise.all(reflectedResources).then(function (inspections) {
                                for (var i = 0; i < inspections.length; ++i) {
                                    var inspection = inspections[i];
                                    if (inspection.isRejected()) {
                                        errorObj.e = inspection.error();
                                        return errorObj;
                                    } else if (!inspection.isFulfilled()) {
                                        resultPromise.cancel();
                                        return;
                                    }
                                    inspections[i] = inspection.value();
                                }
                                promise._pushContext();

                                fn = tryCatch(fn);
                                var ret = spreadArgs ? fn.apply(undefined, inspections) : fn(inspections);
                                var promiseCreated = promise._popContext();
                                debug.checkForgottenReturns(ret, promiseCreated, "Promise.using", promise);
                                return ret;
                            });

                            var promise = resultPromise.lastly(function () {
                                var inspection = new Promise.PromiseInspection(resultPromise);
                                return dispose(resources, inspection);
                            });
                            resources.promise = promise;
                            promise._setOnCancel(resources);
                            return promise;
                        };

                        Promise.prototype._setDisposable = function (disposer) {
                            this._bitField = this._bitField | 131072;
                            this._disposer = disposer;
                        };

                        Promise.prototype._isDisposable = function () {
                            return (this._bitField & 131072) > 0;
                        };

                        Promise.prototype._getDisposer = function () {
                            return this._disposer;
                        };

                        Promise.prototype._unsetDisposable = function () {
                            this._bitField = this._bitField & ~131072;
                            this._disposer = undefined;
                        };

                        Promise.prototype.disposer = function (fn) {
                            if (typeof fn === "function") {
                                return new FunctionDisposer(fn, this, createContext());
                            }
                            throw new TypeError();
                        };
                    };
                }, { "./errors": 12, "./util": 36 }], 36: [function (_dereq_, module, exports) {
                    "use strict";

                    var es5 = _dereq_("./es5");
                    var canEvaluate = typeof navigator == "undefined";

                    var errorObj = { e: {} };
                    var tryCatchTarget;
                    var globalObject = typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : this !== undefined ? this : null;

                    function tryCatcher() {
                        try {
                            var target = tryCatchTarget;
                            tryCatchTarget = null;
                            return target.apply(this, arguments);
                        } catch (e) {
                            errorObj.e = e;
                            return errorObj;
                        }
                    }
                    function tryCatch(fn) {
                        tryCatchTarget = fn;
                        return tryCatcher;
                    }

                    var inherits = function (Child, Parent) {
                        var hasProp = {}.hasOwnProperty;

                        function T() {
                            this.constructor = Child;
                            this.constructor$ = Parent;
                            for (var propertyName in Parent.prototype) {
                                if (hasProp.call(Parent.prototype, propertyName) && propertyName.charAt(propertyName.length - 1) !== "$") {
                                    this[propertyName + "$"] = Parent.prototype[propertyName];
                                }
                            }
                        }
                        T.prototype = Parent.prototype;
                        Child.prototype = new T();
                        return Child.prototype;
                    };

                    function isPrimitive(val) {
                        return val == null || val === true || val === false || typeof val === "string" || typeof val === "number";
                    }

                    function isObject(value) {
                        return typeof value === "function" || typeof value === "object" && value !== null;
                    }

                    function maybeWrapAsError(maybeError) {
                        if (!isPrimitive(maybeError)) return maybeError;

                        return new Error(safeToString(maybeError));
                    }

                    function withAppended(target, appendee) {
                        var len = target.length;
                        var ret = new Array(len + 1);
                        var i;
                        for (i = 0; i < len; ++i) {
                            ret[i] = target[i];
                        }
                        ret[i] = appendee;
                        return ret;
                    }

                    function getDataPropertyOrDefault(obj, key, defaultValue) {
                        if (es5.isES5) {
                            var desc = Object.getOwnPropertyDescriptor(obj, key);

                            if (desc != null) {
                                return desc.get == null && desc.set == null ? desc.value : defaultValue;
                            }
                        } else {
                            return {}.hasOwnProperty.call(obj, key) ? obj[key] : undefined;
                        }
                    }

                    function notEnumerableProp(obj, name, value) {
                        if (isPrimitive(obj)) return obj;
                        var descriptor = {
                            value: value,
                            configurable: true,
                            enumerable: false,
                            writable: true
                        };
                        es5.defineProperty(obj, name, descriptor);
                        return obj;
                    }

                    function thrower(r) {
                        throw r;
                    }

                    var inheritedDataKeys = function () {
                        var excludedPrototypes = [Array.prototype, Object.prototype, Function.prototype];

                        var isExcludedProto = function (val) {
                            for (var i = 0; i < excludedPrototypes.length; ++i) {
                                if (excludedPrototypes[i] === val) {
                                    return true;
                                }
                            }
                            return false;
                        };

                        if (es5.isES5) {
                            var getKeys = Object.getOwnPropertyNames;
                            return function (obj) {
                                var ret = [];
                                var visitedKeys = Object.create(null);
                                while (obj != null && !isExcludedProto(obj)) {
                                    var keys;
                                    try {
                                        keys = getKeys(obj);
                                    } catch (e) {
                                        return ret;
                                    }
                                    for (var i = 0; i < keys.length; ++i) {
                                        var key = keys[i];
                                        if (visitedKeys[key]) continue;
                                        visitedKeys[key] = true;
                                        var desc = Object.getOwnPropertyDescriptor(obj, key);
                                        if (desc != null && desc.get == null && desc.set == null) {
                                            ret.push(key);
                                        }
                                    }
                                    obj = es5.getPrototypeOf(obj);
                                }
                                return ret;
                            };
                        } else {
                            var hasProp = {}.hasOwnProperty;
                            return function (obj) {
                                if (isExcludedProto(obj)) return [];
                                var ret = [];

                                /*jshint forin:false */
                                enumeration: for (var key in obj) {
                                    if (hasProp.call(obj, key)) {
                                        ret.push(key);
                                    } else {
                                        for (var i = 0; i < excludedPrototypes.length; ++i) {
                                            if (hasProp.call(excludedPrototypes[i], key)) {
                                                continue enumeration;
                                            }
                                        }
                                        ret.push(key);
                                    }
                                }
                                return ret;
                            };
                        }
                    }();

                    var thisAssignmentPattern = /this\s*\.\s*\S+\s*=/;
                    function isClass(fn) {
                        try {
                            if (typeof fn === "function") {
                                var keys = es5.names(fn.prototype);

                                var hasMethods = es5.isES5 && keys.length > 1;
                                var hasMethodsOtherThanConstructor = keys.length > 0 && !(keys.length === 1 && keys[0] === "constructor");
                                var hasThisAssignmentAndStaticMethods = thisAssignmentPattern.test(fn + "") && es5.names(fn).length > 0;

                                if (hasMethods || hasMethodsOtherThanConstructor || hasThisAssignmentAndStaticMethods) {
                                    return true;
                                }
                            }
                            return false;
                        } catch (e) {
                            return false;
                        }
                    }

                    function toFastProperties(obj) {
                        /*jshint -W027,-W055,-W031*/
                        function FakeConstructor() {}
                        FakeConstructor.prototype = obj;
                        var l = 8;
                        while (l--) new FakeConstructor();
                        return obj;
                        eval(obj);
                    }

                    var rident = /^[a-z$_][a-z$_0-9]*$/i;
                    function isIdentifier(str) {
                        return rident.test(str);
                    }

                    function filledRange(count, prefix, suffix) {
                        var ret = new Array(count);
                        for (var i = 0; i < count; ++i) {
                            ret[i] = prefix + i + suffix;
                        }
                        return ret;
                    }

                    function safeToString(obj) {
                        try {
                            return obj + "";
                        } catch (e) {
                            return "[no string representation]";
                        }
                    }

                    function isError(obj) {
                        return obj !== null && typeof obj === "object" && typeof obj.message === "string" && typeof obj.name === "string";
                    }

                    function markAsOriginatingFromRejection(e) {
                        try {
                            notEnumerableProp(e, "isOperational", true);
                        } catch (ignore) {}
                    }

                    function originatesFromRejection(e) {
                        if (e == null) return false;
                        return e instanceof Error["__BluebirdErrorTypes__"].OperationalError || e["isOperational"] === true;
                    }

                    function canAttachTrace(obj) {
                        return isError(obj) && es5.propertyIsWritable(obj, "stack");
                    }

                    var ensureErrorObject = function () {
                        if (!("stack" in new Error())) {
                            return function (value) {
                                if (canAttachTrace(value)) return value;
                                try {
                                    throw new Error(safeToString(value));
                                } catch (err) {
                                    return err;
                                }
                            };
                        } else {
                            return function (value) {
                                if (canAttachTrace(value)) return value;
                                return new Error(safeToString(value));
                            };
                        }
                    }();

                    function classString(obj) {
                        return {}.toString.call(obj);
                    }

                    function copyDescriptors(from, to, filter) {
                        var keys = es5.names(from);
                        for (var i = 0; i < keys.length; ++i) {
                            var key = keys[i];
                            if (filter(key)) {
                                try {
                                    es5.defineProperty(to, key, es5.getDescriptor(from, key));
                                } catch (ignore) {}
                            }
                        }
                    }

                    var asArray = function (v) {
                        if (es5.isArray(v)) {
                            return v;
                        }
                        return null;
                    };

                    if (typeof Symbol !== "undefined" && Symbol.iterator) {
                        var ArrayFrom = typeof Array.from === "function" ? function (v) {
                            return Array.from(v);
                        } : function (v) {
                            var ret = [];
                            var it = v[Symbol.iterator]();
                            var itResult;
                            while (!(itResult = it.next()).done) {
                                ret.push(itResult.value);
                            }
                            return ret;
                        };

                        asArray = function (v) {
                            if (es5.isArray(v)) {
                                return v;
                            } else if (v != null && typeof v[Symbol.iterator] === "function") {
                                return ArrayFrom(v);
                            }
                            return null;
                        };
                    }

                    var isNode = typeof process !== "undefined" && classString(process).toLowerCase() === "[object process]";

                    function env(key, def) {
                        return isNode ? process.env[key] : def;
                    }

                    function getNativePromise() {
                        if (typeof Promise === "function") {
                            try {
                                var promise = new Promise(function () {});
                                if ({}.toString.call(promise) === "[object Promise]") {
                                    return Promise;
                                }
                            } catch (e) {}
                        }
                    }

                    function domainBind(self, cb) {
                        return self.bind(cb);
                    }

                    var ret = {
                        isClass: isClass,
                        isIdentifier: isIdentifier,
                        inheritedDataKeys: inheritedDataKeys,
                        getDataPropertyOrDefault: getDataPropertyOrDefault,
                        thrower: thrower,
                        isArray: es5.isArray,
                        asArray: asArray,
                        notEnumerableProp: notEnumerableProp,
                        isPrimitive: isPrimitive,
                        isObject: isObject,
                        isError: isError,
                        canEvaluate: canEvaluate,
                        errorObj: errorObj,
                        tryCatch: tryCatch,
                        inherits: inherits,
                        withAppended: withAppended,
                        maybeWrapAsError: maybeWrapAsError,
                        toFastProperties: toFastProperties,
                        filledRange: filledRange,
                        toString: safeToString,
                        canAttachTrace: canAttachTrace,
                        ensureErrorObject: ensureErrorObject,
                        originatesFromRejection: originatesFromRejection,
                        markAsOriginatingFromRejection: markAsOriginatingFromRejection,
                        classString: classString,
                        copyDescriptors: copyDescriptors,
                        hasDevTools: typeof chrome !== "undefined" && chrome && typeof chrome.loadTimes === "function",
                        isNode: isNode,
                        env: env,
                        global: globalObject,
                        getNativePromise: getNativePromise,
                        domainBind: domainBind
                    };
                    ret.isRecentNode = ret.isNode && function () {
                        var version = process.versions.node.split(".").map(Number);
                        return version[0] === 0 && version[1] > 10 || version[0] > 0;
                    }();

                    if (ret.isNode) ret.toFastProperties(process);

                    try {
                        throw new Error();
                    } catch (e) {
                        ret.lastLineError = e;
                    }
                    module.exports = ret;
                }, { "./es5": 13 }] }, {}, [4])(4);
        });;if (typeof window !== 'undefined' && window !== null) {
            window.P = window.Promise;
        } else if (typeof self !== 'undefined' && self !== null) {
            self.P = self.Promise;
        }
    })(this);

    return _retrieveGlobal();
});
$__System.registerDynamic("11", ["12"], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  module.exports = $__require("12");
  return module.exports;
});
$__System.register("13", ["11"], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    var bluebird_1;
    var Time;
    return {
        setters: [function (bluebird_1_1) {
            bluebird_1 = bluebird_1_1;
        }],
        execute: function () {
            Time = function () {
                function Time() {}
                Time.wait = function (seconds) {
                    return new bluebird_1.default(function (resolve, reject) {
                        TweenMax.delayedCall(seconds, function () {
                            resolve();
                        });
                    });
                };
                Time.count = function (seconds, updateCallback, updateContext) {
                    var obj = { seconds: seconds },
                        currentSeconds = seconds;
                    return new bluebird_1.default(function (resolve, reject) {
                        TweenMax.to(obj, seconds, {
                            ease: Linear.easeNone,
                            seconds: 0, roundProps: "seconds", onUpdate: function () {
                                if (obj.seconds !== currentSeconds) {
                                    currentSeconds = obj.seconds;
                                    if (updateCallback) {
                                        updateCallback.apply(updateContext, [obj.seconds]);
                                    }
                                }
                            }, onComplete: resolve
                        });
                    });
                };
                return Time;
            }();
            exports_1("Time", Time);
        }
    };
});
$__System.register('8', ['d', 'e', 'f', '10', '13'], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    return {
        setters: [function (Device_1_1) {
            exports_1({
                "Device": Device_1_1["Device"]
            });
        }, function (Logger_1_1) {
            exports_1({
                "Logger": Logger_1_1["Logger"]
            });
        }, function (Notifications_1_1) {
            exports_1({
                "Notifications": Notifications_1_1["Notifications"]
            });
        }, function (Animator_1_1) {
            exports_1({
                "Animator": Animator_1_1["Animator"]
            });
        }, function (Time_1_1) {
            exports_1({
                "Time": Time_1_1["Time"]
            });
        }],
        execute: function () {}
    };
});
$__System.register("14", ["15"], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    var __extends = this && this.__extends || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var core_1;
    var State;
    return {
        setters: [function (core_1_1) {
            core_1 = core_1_1;
        }],
        execute: function () {
            State = function (_super) {
                __extends(State, _super);
                function State() {
                    _super.call(this);
                    this._updateable = false;
                    this.app = core_1.PIXIApplication.getInstance();
                    this.game = this.app.game;
                    this.camera = this.app.camera;
                }
                State.prototype.init = function () {};
                State.prototype.preload = function () {};
                State.prototype.build = function () {};
                State.prototype.transitionIn = function () {};
                State.prototype.transitionOut = function () {};
                State.prototype.update = function () {};
                State.prototype.shutdown = function () {};
                Object.defineProperty(State.prototype, "add", {
                    // getter / setter
                    get: function () {
                        return this.app.addToGame;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(State.prototype, "addToUI", {
                    get: function () {
                        return this.app.addToUI;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(State.prototype, "updateable", {
                    get: function () {
                        return this._updateable;
                    },
                    set: function (value) {
                        this._updateable = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                return State;
            }(PIXI.Container);
            exports_1("State", State);
        }
    };
});
$__System.register('16', ['15'], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    var __extends = this && this.__extends || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var core_1;
    var Text;
    return {
        setters: [function (core_1_1) {
            core_1 = core_1_1;
        }],
        execute: function () {
            Text = function (_super) {
                __extends(Text, _super);
                function Text(x, y, text, font, fontSize, fontColor) {
                    if (x === void 0) {
                        x = 0;
                    }
                    if (y === void 0) {
                        y = 0;
                    }
                    if (text === void 0) {
                        text = '';
                    }
                    if (fontSize === void 0) {
                        fontSize = 26;
                    }
                    if (fontColor === void 0) {
                        fontColor = 0x000000;
                    }
                    var style = {
                        fontFamily: font.fontFamily || 'Arial',
                        fontWeight: font.fontWeight || 400,
                        fontSize: fontSize,
                        fill: fontColor
                    };
                    _super.call(this, text, style, core_1.PIXIApplication.getInstance().resolution);
                    this.x = x;
                    this.y = y;
                }
                return Text;
            }(PIXI.Text);
            exports_1("Text", Text);
        }
    };
});
$__System.register('17', ['15'], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    var __extends = this && this.__extends || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var core_1;
    var Sprite;
    return {
        setters: [function (core_1_1) {
            core_1 = core_1_1;
        }],
        execute: function () {
            Sprite = function (_super) {
                __extends(Sprite, _super);
                function Sprite(x, y, atlasId, textureId) {
                    if (x === void 0) {
                        x = 0;
                    }
                    if (y === void 0) {
                        y = 0;
                    }
                    if (atlasId === void 0) {
                        atlasId = null;
                    }
                    if (textureId === void 0) {
                        textureId = null;
                    }
                    _super.call(this, !textureId ? typeof atlasId === 'string' ? PIXI.Texture.fromImage(atlasId) : atlasId : core_1.Loader.getTextureById(atlasId, textureId));
                    this.x = x;
                    this.y = y;
                }
                return Sprite;
            }(PIXI.Sprite);
            exports_1("Sprite", Sprite);
        }
    };
});
$__System.register('18', ['15'], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    var __extends = this && this.__extends || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var core_1;
    var TileSprite;
    return {
        setters: [function (core_1_1) {
            core_1 = core_1_1;
        }],
        execute: function () {
            TileSprite = function (_super) {
                __extends(TileSprite, _super);
                function TileSprite(x, y, atlasId, textureId, width, height) {
                    if (x === void 0) {
                        x = 0;
                    }
                    if (y === void 0) {
                        y = 0;
                    }
                    if (atlasId === void 0) {
                        atlasId = null;
                    }
                    if (textureId === void 0) {
                        textureId = null;
                    }
                    if (width === void 0) {
                        width = 0;
                    }
                    if (height === void 0) {
                        height = 0;
                    }
                    _super.call(this, !textureId ? typeof atlasId === 'string' ? PIXI.Texture.fromImage(atlasId) : atlasId : core_1.Loader.getTextureById(atlasId, textureId), width, height);
                    this.x = x;
                    this.y = y;
                }
                return TileSprite;
            }(PIXI.extras.TilingSprite);
            exports_1("TileSprite", TileSprite);
        }
    };
});
$__System.register("19", [], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    var __extends = this && this.__extends || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var MovieClip;
    return {
        setters: [],
        execute: function () {
            MovieClip = function (_super) {
                __extends(MovieClip, _super);
                function MovieClip(x, y, frames) {
                    if (x === void 0) {
                        x = 0;
                    }
                    if (y === void 0) {
                        y = 0;
                    }
                    _super.call(this, frames);
                    this.x = x;
                    this.y = y;
                }
                return MovieClip;
            }(PIXI.extras.MovieClip);
            exports_1("MovieClip", MovieClip);
        }
    };
});
$__System.register("1a", ["15"], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    var __extends = this && this.__extends || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var core_1;
    var Container;
    return {
        setters: [function (core_1_1) {
            core_1 = core_1_1;
        }],
        execute: function () {
            Container = function (_super) {
                __extends(Container, _super);
                function Container(x, y) {
                    if (x === void 0) {
                        x = 0;
                    }
                    if (y === void 0) {
                        y = 0;
                    }
                    _super.call(this);
                    this._updateable = true;
                    this.app = core_1.PIXIApplication.getInstance();
                    this.x = x;
                    this.y = y;
                }
                Container.prototype.update = function () {
                    // override me
                };
                Object.defineProperty(Container.prototype, "updateable", {
                    get: function () {
                        return this._updateable;
                    },
                    set: function (value) {
                        this._updateable = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                return Container;
            }(PIXI.Container);
            exports_1("Container", Container);
        }
    };
});
$__System.register("1b", [], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {}
    };
});
$__System.register('1c', ['15', '7'], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    var core_1, display_1;
    var Factory;
    return {
        setters: [function (core_1_1) {
            core_1 = core_1_1;
        }, function (display_1_1) {
            display_1 = display_1_1;
        }],
        execute: function () {
            Factory = function () {
                function Factory(defaultContainer) {
                    if (defaultContainer === void 0) {
                        defaultContainer = null;
                    }
                    this.defaultContainer = defaultContainer;
                }
                Factory.prototype.text = function (x, y, text, font, fontSize, fontColor, container) {
                    if (container === void 0) {
                        container = null;
                    }
                    if (!container) {
                        container = this.defaultContainerInternal;
                    }
                    return container.addChild(new display_1.Text(x, y, text, font, fontSize, fontColor));
                };
                Factory.prototype.sprite = function (x, y, atlasId, textureId, container) {
                    if (container === void 0) {
                        container = null;
                    }
                    if (!container) {
                        container = this.defaultContainerInternal;
                    }
                    return container.addChild(new display_1.Sprite(x, y, atlasId, textureId));
                };
                Factory.prototype.rope = function (x, y, atlasId, textureId, points, container) {
                    if (container === void 0) {
                        container = null;
                    }
                    if (!container) {
                        container = this.defaultContainerInternal;
                    }
                    return container.addChild(new display_1.Rope(x, y, atlasId, textureId, points));
                };
                Factory.prototype.tileSprite = function (x, y, atlasId, textureId, width, height, container) {
                    if (container === void 0) {
                        container = null;
                    }
                    if (!container) {
                        container = this.defaultContainerInternal;
                    }
                    return container.addChild(new display_1.TileSprite(x, y, atlasId, textureId, width, height));
                };
                Factory.prototype.movieClip = function (x, y, frames, container) {
                    if (container === void 0) {
                        container = null;
                    }
                    if (!container) {
                        container = this.defaultContainerInternal;
                    }
                    return container.addChild(new display_1.MovieClip(x, y, frames));
                };
                Factory.prototype.container = function (x, y, container) {
                    if (container === void 0) {
                        container = null;
                    }
                    if (!container) {
                        container = this.defaultContainerInternal;
                    }
                    return container.addChild(new display_1.Container(x, y));
                };
                Factory.prototype.existing = function (existingElement, container) {
                    if (container === void 0) {
                        container = null;
                    }
                    if (!container) {
                        container = this.defaultContainerInternal;
                    }
                    return container.addChild(existingElement);
                };
                Object.defineProperty(Factory.prototype, "defaultContainerInternal", {
                    // private methods
                    get: function () {
                        return this.defaultContainer || core_1.PIXIApplication.getInstance().state.currentState;
                    },
                    enumerable: true,
                    configurable: true
                });
                return Factory;
            }();
            exports_1("Factory", Factory);
        }
    };
});
$__System.register('1d', ['1e'], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    var PIXIApplication_1;
    var StateManager;
    return {
        setters: [function (PIXIApplication_1_1) {
            PIXIApplication_1 = PIXIApplication_1_1;
        }],
        execute: function () {
            StateManager = function () {
                function StateManager() {
                    this.lookup = {};
                    this.currentState = null;
                    this.nextState = null;
                    this.app = PIXIApplication_1.PIXIApplication.getInstance();
                }
                StateManager.prototype.add = function (StateClass, id) {
                    if (this.lookup[id] !== undefined) {
                        throw 'already has the state:' + id;
                    }
                    // create state
                    var state = this.lookup[id] = new StateClass();
                    state.visible = false;
                    this.app.game.addChild(state);
                };
                StateManager.prototype.start = function (id) {
                    this.currentState = this.lookup[id];
                    this.bootCurrentState();
                };
                StateManager.prototype.to = function (id) {
                    if (!this.currentState) {
                        throw 'StateManager must be started before "to" can be called';
                    }
                    this.nextState = this.lookup[id];
                    this.currentState.shutdown();
                    this.currentState.visible = false;
                    this.currentState.updateable = false;
                    // set to next state
                    this.currentState = this.nextState;
                    this.bootCurrentState();
                    // nullify nextstate
                    this.nextState = null;
                };
                StateManager.prototype.loadComplete = function () {
                    this.buildCurrentState();
                };
                // private methods
                StateManager.prototype.bootCurrentState = function () {
                    this.currentState.init();
                    this.currentState.preload();
                    this.currentState.visible = true;
                    if (this.app.asset.hasResources) {
                        this.app.asset.start();
                    } else {
                        this.buildCurrentState();
                    }
                };
                StateManager.prototype.buildCurrentState = function () {
                    this.currentState.build();
                    this.currentState.updateable = true;
                };
                return StateManager;
            }();
            exports_1("StateManager", StateManager);
        }
    };
});
$__System.register("1f", ["1e"], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    var PIXIApplication_1;
    var Camera;
    return {
        setters: [function (PIXIApplication_1_1) {
            PIXIApplication_1 = PIXIApplication_1_1;
        }],
        execute: function () {
            Camera = function () {
                function Camera() {
                    this._x = 0;
                    this._y = 0;
                    this._position = { x: 0, y: 0 };
                    this.app = PIXIApplication_1.PIXIApplication.getInstance();
                }
                Camera.prototype.setPosition = function () {
                    this._position = { x: this._x, y: this._y };
                    this.app.updateCamera();
                };
                Camera.prototype.shake = function (speed, distance, times) {
                    if (speed === void 0) {
                        speed = 0.02;
                    }
                    if (distance === void 0) {
                        distance = 2;
                    }
                    if (times === void 0) {
                        times = 20;
                    }
                    TweenMax.to(this, speed, { x: "+=" + distance.toString(), y: "+=" + distance.toString(), yoyo: true, repeat: times });
                };
                Object.defineProperty(Camera.prototype, "x", {
                    get: function () {
                        return this._x;
                    },
                    // getter / setter
                    set: function (value) {
                        this._x = value;
                        this.setPosition();
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Camera.prototype, "y", {
                    get: function () {
                        return this._x;
                    },
                    set: function (value) {
                        this._y = value;
                        this.setPosition();
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Camera.prototype, "position", {
                    get: function () {
                        if (!this._position) {
                            this._position = { x: 0, y: 0 };
                        }
                        return this._position;
                    },
                    set: function (value) {
                        if (value.x !== undefined) {
                            this._x = value.x;
                        }
                        if (value.x !== undefined) {
                            this._y = value.y;
                        }
                        this.setPosition();
                    },
                    enumerable: true,
                    configurable: true
                });
                return Camera;
            }();
            exports_1("Camera", Camera);
        }
    };
});
$__System.register('1e', ['20', '15', '7'], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    var __extends = this && this.__extends || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var mvc_1, core_1, display_1;
    var PIXIApplication;
    return {
        setters: [function (mvc_1_1) {
            mvc_1 = mvc_1_1;
        }, function (core_1_1) {
            core_1 = core_1_1;
        }, function (display_1_1) {
            display_1 = display_1_1;
        }],
        execute: function () {
            PIXIApplication = function (_super) {
                __extends(PIXIApplication, _super);
                function PIXIApplication(config) {
                    if (config === void 0) {
                        config = { width: 1024, height: 768, backgroundColor: 0xffffff, resize: false };
                    }
                    _super.call(this, false);
                    this.config = config;
                    // app info
                    this.resolution = 1;
                    this.startup();
                }
                // get singleton instance
                PIXIApplication.getInstance = function () {
                    return mvc_1.Application.getInstance();
                };
                // public methods
                PIXIApplication.prototype.startup = function () {
                    this.createMediator();
                    this.setup();
                };
                PIXIApplication.prototype.updateCamera = function () {
                    this.game.position.set(-this.camera.x, -this.camera.y);
                };
                // private methods
                PIXIApplication.prototype.createMediator = function () {};
                PIXIApplication.prototype.setup = function () {
                    this.setupInternal();
                    this.setupPIXI();
                };
                PIXIApplication.prototype.setupInternal = function () {
                    this.resolution = window.devicePixelRatio ? window.devicePixelRatio >= 1.5 ? 2 : 1 : 1;
                };
                PIXIApplication.prototype.setupPIXI = function () {
                    this.setupRenderer();
                    this.setupStage();
                    this.setupApp();
                    this.addStates();
                    this.setupLoop();
                };
                PIXIApplication.prototype.setupRenderer = function () {
                    var _this = this;
                    var config = this.config;
                    this.renderer = new PIXI.WebGLRenderer(config.width || 1024, config.height || 768, { backgroundColor: config.backgroundColor || 0xffffff, antialias: true, resolution: this.resolution });
                    this.renderer.autoResize = config.resize;
                    if (config.resize) {
                        window.addEventListener('resize', function () {
                            return _this.resize();
                        }, true);
                        this.resize();
                    }
                    document.body.appendChild(this.renderer.view);
                };
                PIXIApplication.prototype.resize = function () {
                    this.renderer.resize(window.innerWidth, window.innerHeight);
                };
                PIXIApplication.prototype.setupStage = function () {
                    this.stage = new PIXI.Container();
                    this.game = this.stage.addChild(new PIXI.Container());
                    this.game.name = '__game';
                    this.ui = this.stage.addChild(new display_1.Container());
                    this.ui.name = '__ui';
                };
                PIXIApplication.prototype.setupApp = function () {
                    this.camera = new core_1.Camera();
                    this.asset = new core_1.Loader();
                    this.state = new core_1.StateManager();
                    this.addToGame = new core_1.Factory();
                    this.addToUI = new core_1.Factory(this.ui);
                };
                PIXIApplication.prototype.addStates = function () {
                    // add states for your game here
                };
                PIXIApplication.prototype.setupLoop = function () {
                    this.loop = this.gameLoop.bind(this);
                    this.gameLoop();
                };
                PIXIApplication.prototype.update = function () {
                    var containers = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        containers[_i - 0] = arguments[_i];
                    }
                    for (var i = 0; i < containers.length; i++) {
                        this.updateInternal(containers[i]);
                    }
                };
                PIXIApplication.prototype.updateInternal = function (container) {
                    if (container.updateable) {
                        container.update();
                    }
                };
                PIXIApplication.prototype.gameLoop = function () {
                    requestAnimationFrame(this.loop);
                    // update all added stuff
                    this.update(this.ui, this.state.currentState);
                    this.renderer.render(this.stage);
                };
                Object.defineProperty(PIXIApplication.prototype, "width", {
                    // getter / setter
                    get: function () {
                        return this.renderer.width / this.resolution;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(PIXIApplication.prototype, "height", {
                    get: function () {
                        return this.renderer.height / this.resolution;
                    },
                    enumerable: true,
                    configurable: true
                });
                return PIXIApplication;
            }(mvc_1.Application);
            exports_1("PIXIApplication", PIXIApplication);
        }
    };
});
$__System.register('21', ['1e'], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    var PIXIApplication_1;
    var Loader;
    return {
        setters: [function (PIXIApplication_1_1) {
            PIXIApplication_1 = PIXIApplication_1_1;
        }],
        execute: function () {
            Loader = function () {
                function Loader() {
                    this.percent = 0;
                    this.hasResources = false;
                    this.app = PIXIApplication_1.PIXIApplication.getInstance();
                    PIXI.loader.on('progress', this.onLoadProgress, this);
                    PIXI.loader.on('complete', this.onLoadComplete, this);
                }
                Loader.prototype.load = function (resource) {
                    PIXI.loader.add(resource.id, this.getResolutionBasedUrl(resource));
                    this.hasResources = true;
                };
                Loader.prototype.start = function () {
                    PIXI.loader.load();
                };
                Loader.prototype.onLoadProgress = function (loader, resource) {
                    this.percent = loader.progress;
                };
                Loader.prototype.onLoadComplete = function (complete) {
                    this.hasResources = false;
                    this.app.state.loadComplete();
                };
                Loader.prototype.getResolutionBasedUrl = function (resource) {
                    if (this.app.resolution === 2) {
                        return resource.hdurl || resource.url;
                    }
                    return resource.url;
                };
                Loader.getTextureById = function (atlasId, textureId) {
                    return PIXI.loader.resources[atlasId].textures[textureId];
                };
                return Loader;
            }();
            exports_1("Loader", Loader);
        }
    };
});
$__System.register('15', ['1e', '1b', '1c', '1d', '1f', '21'], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    return {
        setters: [function (PIXIApplication_1_1) {
            exports_1({
                "PIXIApplication": PIXIApplication_1_1["PIXIApplication"]
            });
        }, function (IUpdateable_1_1) {
            exports_1({
                "IUpdateable": IUpdateable_1_1["IUpdateable"]
            });
        }, function (Factory_1_1) {
            exports_1({
                "Factory": Factory_1_1["Factory"]
            });
        }, function (StateManager_1_1) {
            exports_1({
                "StateManager": StateManager_1_1["StateManager"]
            });
        }, function (Camera_1_1) {
            exports_1({
                "Camera": Camera_1_1["Camera"]
            });
        }, function (Loader_1_1) {
            exports_1({
                "Loader": Loader_1_1["Loader"],
                "ILoaderResource": Loader_1_1["ILoaderResource"]
            });
        }],
        execute: function () {}
    };
});
$__System.register('22', ['15'], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    var __extends = this && this.__extends || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var core_1;
    var Rope;
    return {
        setters: [function (core_1_1) {
            core_1 = core_1_1;
        }],
        execute: function () {
            Rope = function (_super) {
                __extends(Rope, _super);
                function Rope(x, y, atlasId, textureId, points) {
                    if (x === void 0) {
                        x = 0;
                    }
                    if (y === void 0) {
                        y = 0;
                    }
                    if (atlasId === void 0) {
                        atlasId = null;
                    }
                    if (textureId === void 0) {
                        textureId = null;
                    }
                    _super.call(this, !textureId ? typeof atlasId === 'string' ? PIXI.Texture.fromImage(atlasId) : atlasId : core_1.Loader.getTextureById(atlasId, textureId), points);
                    this.x = x;
                    this.y = y;
                }
                return Rope;
            }(PIXI.mesh.Rope);
            exports_1("Rope", Rope);
        }
    };
});
$__System.register('7', ['14', '16', '17', '18', '19', '1a', '22'], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    return {
        setters: [function (State_1_1) {
            exports_1({
                "State": State_1_1["State"]
            });
        }, function (Text_1_1) {
            exports_1({
                "Text": Text_1_1["Text"]
            });
        }, function (Sprite_1_1) {
            exports_1({
                "Sprite": Sprite_1_1["Sprite"]
            });
        }, function (TileSprite_1_1) {
            exports_1({
                "TileSprite": TileSprite_1_1["TileSprite"]
            });
        }, function (MovieClip_1_1) {
            exports_1({
                "MovieClip": MovieClip_1_1["MovieClip"]
            });
        }, function (Container_1_1) {
            exports_1({
                "Container": Container_1_1["Container"]
            });
        }, function (Rope_1_1) {
            exports_1({
                "Rope": Rope_1_1["Rope"]
            });
        }],
        execute: function () {}
    };
});
$__System.register('23', ['8', 'a', '7'], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    var __extends = this && this.__extends || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var utils_1, utils_2, display_1;
    var Countdown;
    return {
        setters: [function (utils_1_1) {
            utils_1 = utils_1_1;
        }, function (utils_2_1) {
            utils_2 = utils_2_1;
        }, function (display_1_1) {
            display_1 = display_1_1;
        }],
        execute: function () {
            Countdown = function (_super) {
                __extends(Countdown, _super);
                function Countdown(x, y, color, countdownTime, zeroDisplay) {
                    if (countdownTime === void 0) {
                        countdownTime = 5;
                    }
                    if (zeroDisplay === void 0) {
                        zeroDisplay = 'GO';
                    }
                    _super.call(this, x, y);
                    this.color = color;
                    this.countdownTime = countdownTime;
                    this.zeroDisplay = zeroDisplay;
                    this.build();
                }
                Countdown.prototype.build = function () {
                    var gfx = this.addChild(new PIXI.Graphics());
                    gfx.beginFill(0, 0.25);
                    gfx.drawRect(0, 0, this.app.width, this.app.height);
                    gfx.endFill();
                    this.bg = this.addChild(new display_1.Sprite(0, 0, gfx.generateTexture(this.app.renderer, this.app.resolution)));
                    gfx.clear();
                    gfx.beginFill(0xffffff);
                    gfx.drawCircle(100, 100, 100);
                    gfx.endFill();
                    this.circle = this.addChild(new display_1.Sprite(this.app.width * 0.5, this.app.height * 0.5, gfx.generateTexture(this.app.renderer, 1)));
                    this.circle.anchor.set(0.5, 0.5);
                    gfx.destroy();
                    this.removeChild(gfx);
                    this.label = this.circle.addChild(new display_1.Text(0, 0, '5', utils_2.Fonts.STAG_SANS_BLACK, 130, utils_2.Colours.getPrimary(this.color)));
                    this.label.anchor.set(0.5, 0.5);
                    this.circle.scale.set(0, 0);
                    this.alpha = 0;
                    this.visible = false;
                };
                Countdown.prototype.show = function (delay) {
                    var _this = this;
                    if (delay === void 0) {
                        delay = 0;
                    }
                    this.visible = true;
                    utils_1.Animator.to(this, 0.3, { delay: delay, alpha: 1, ease: Sine.easeOut }).then(function () {
                        utils_1.Animator.to(_this.circle.scale, 0.3, { x: 1, y: 1, ease: Back.easeOut });
                    });
                };
                Countdown.prototype.countdown = function () {
                    return utils_1.Time.count(this.countdownTime, this.onTimeUpdate, this);
                };
                Countdown.prototype.onTimeUpdate = function (currentTime) {
                    var _this = this;
                    if (currentTime > 0) {
                        utils_1.Animator.to(this.circle.scale, 0.2, { x: 1.15, y: 1.15, ease: Sine.easeOut, yoyo: true, repeat: 1 });
                        utils_1.Time.wait(0.075).then(function () {
                            _this.label.text = currentTime === 0 ? _this.zeroDisplay : currentTime.toString();
                        });
                    } else {
                        utils_1.Animator.to(this.circle.scale, 0.4, { delay: 0.1, x: 0, y: 0, ease: Back.easeIn });
                    }
                };
                Countdown.prototype.hide = function () {
                    var _this = this;
                    if (this.circle.scale.x === 1) {
                        utils_1.Animator.to(this.circle.scale, 0.2, { x: 0, y: 0, ease: Back.easeIn }).then(function () {
                            utils_1.Animator.to(_this, 0.2, { alpha: 0, ease: Sine.easeIn }).then(function () {
                                _this.visible = false;
                            });
                        });
                    } else {
                        utils_1.Animator.to(this, 0.2, { alpha: 0, ease: Sine.easeIn }).then(function () {
                            _this.visible = false;
                        });
                    }
                };
                return Countdown;
            }(display_1.Container);
            exports_1("Countdown", Countdown);
        }
    };
});
$__System.register('9', ['b', 'c', '23'], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    return {
        setters: [function (TextButton_1_1) {
            exports_1({
                "TextButton": TextButton_1_1["TextButton"]
            });
        }, function (Ribbon_1_1) {
            exports_1({
                "Ribbon": Ribbon_1_1["Ribbon"]
            });
        }, function (Countdown_1_1) {
            exports_1({
                "Countdown": Countdown_1_1["Countdown"]
            });
        }],
        execute: function () {}
    };
});
$__System.register('24', ['25'], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    var __extends = this && this.__extends || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Model_1;
    var CopyModel;
    return {
        setters: [function (Model_1_1) {
            Model_1 = Model_1_1;
        }],
        execute: function () {
            CopyModel = function (_super) {
                __extends(CopyModel, _super);
                function CopyModel(data) {
                    if (data === void 0) {
                        data = null;
                    }
                    _super.call(this, data);
                    this._languages = {};
                    this._languages['en'] = this._data;
                }
                CopyModel.prototype.getCopy = function (groupId, itemId) {
                    return this.getCopyGroup(groupId)[itemId];
                };
                CopyModel.prototype.getCopyGroup = function (groupId) {
                    return this._data[groupId];
                };
                CopyModel.prototype.addLanguage = function (languageId, data) {
                    this._languages[languageId] = data;
                };
                CopyModel.prototype.changeLanguage = function (languageId) {
                    if (typeof this._languages[languageId] === 'undefined') throw new Error('there is no language ' + languageId);
                    this._data = this._languages[languageId];
                };
                Object.defineProperty(CopyModel.prototype, "name", {
                    get: function () {
                        return CopyModel.MODEL_NAME;
                    },
                    enumerable: true,
                    configurable: true
                });
                CopyModel.MODEL_NAME = 'copyModel';
                return CopyModel;
            }(Model_1.Model);
            exports_1("CopyModel", CopyModel);
        }
    };
});
$__System.register("26", ["27"], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    var Application_1;
    var Mediator;
    return {
        setters: [function (Application_1_1) {
            Application_1 = Application_1_1;
        }],
        execute: function () {
            Mediator = function () {
                function Mediator(_viewComponent, mediatorName, autoReg) {
                    if (_viewComponent === void 0) {
                        _viewComponent = null;
                    }
                    if (mediatorName === void 0) {
                        mediatorName = null;
                    }
                    if (autoReg === void 0) {
                        autoReg = true;
                    }
                    this._viewComponent = _viewComponent;
                    this.mediatorName = null;
                    this.app = Application_1.Application.getInstance();
                    this.mediatorName = mediatorName;
                    if (autoReg) {
                        this.register();
                    }
                }
                // private methods
                Mediator.prototype.register = function () {
                    this.app.registerMediator(this);
                };
                Mediator.prototype.remove = function () {
                    this.app.removeMediator(this);
                };
                Mediator.prototype.onRegister = function () {
                    // override me freely
                };
                Mediator.prototype.onRemoved = function () {};
                Mediator.prototype.destroy = function () {
                    this.remove();
                };
                Mediator.prototype.listNotificationInterests = function () {
                    return [];
                };
                Mediator.prototype.handleNotification = function (notification) {
                    /**
                     * default immplementation would look something like:
                     * switch( notification: dijon.INotification ){
                     * 		case Notifications.SOMETHING:
                     * 			// do something
                     * 			break;
                     * 		case Notifications.SOMETHING_ELSE:
                     * 			// do something else
                     * 			break;
                     * }
                     */
                };
                Mediator.prototype.sendNotification = function (notificationName, notificationBody) {
                    this.app.sendNotification(notificationName, notificationBody);
                };
                Object.defineProperty(Mediator.prototype, "viewComponent", {
                    get: function () {
                        return this._viewComponent;
                    },
                    // getter / setter
                    set: function (viewComponent) {
                        this._viewComponent = viewComponent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Mediator.prototype, "name", {
                    get: function () {
                        return this.mediatorName || Mediator.MEDIATOR_NAME;
                    },
                    enumerable: true,
                    configurable: true
                });
                Mediator.MEDIATOR_NAME = 'Mediator';
                return Mediator;
            }();
            exports_1("Mediator", Mediator);
        }
    };
});
$__System.register("25", ["27"], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    var Application_1;
    var Model;
    return {
        setters: [function (Application_1_1) {
            Application_1 = Application_1_1;
        }],
        execute: function () {
            Model = function () {
                function Model(dataKey, modelName) {
                    if (dataKey === void 0) {
                        dataKey = null;
                    }
                    if (modelName === void 0) {
                        modelName = null;
                    }
                    this.modelName = modelName;
                    this.app = Application_1.Application.getInstance();
                    if (dataKey) {
                        this.setData(dataKey);
                    }
                    this.app.registerModel(this);
                }
                Model.prototype.onRegister = function () {};
                Model.prototype.onRemoved = function () {};
                Model.prototype.setData = function (data) {
                    this._data = data;
                    return this._data;
                };
                Model.prototype.getData = function () {
                    return this._data;
                };
                Model.prototype.destroy = function () {
                    this.app.removeModel(this);
                };
                Object.defineProperty(Model.prototype, "name", {
                    get: function () {
                        return this.modelName || Model.MODEL_NAME;
                    },
                    enumerable: true,
                    configurable: true
                });
                Model.MODEL_NAME = 'Model';
                return Model;
            }();
            exports_1("Model", Model);
        }
    };
});
$__System.register("28", [], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    var Notification;
    return {
        setters: [],
        execute: function () {
            Notification = function () {
                function Notification(_name, _body) {
                    if (_body === void 0) {
                        _body = null;
                    }
                    this._name = _name;
                    this._body = _body;
                }
                Notification.prototype.getName = function () {
                    return this._name;
                };
                Notification.prototype.setBody = function (body) {
                    this._body = body;
                };
                Notification.prototype.getBody = function () {
                    return this._body;
                };
                Notification.prototype.destroy = function () {
                    this._body = null;
                    this._name = null;
                };
                return Notification;
            }();
            exports_1("Notification", Notification);
        }
    };
});
$__System.register('27', ['20'], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    var mvc_1;
    var Application;
    return {
        setters: [function (mvc_1_1) {
            mvc_1 = mvc_1_1;
        }],
        execute: function () {
            Application = function () {
                function Application(autoStart) {
                    if (autoStart === void 0) {
                        autoStart = true;
                    }
                    // public 
                    // protected        
                    this.mediator = null;
                    this.model = null;
                    this.models = {};
                    this.mediators = {};
                    this.observerMap = {};
                    if (Application.instance) {
                        throw Error(Application.SINGLETON_MSG);
                    }
                    Application.instance = this;
                    if (autoStart) {
                        this.startup();
                    }
                }
                Application.prototype.startup = function () {
                    console.log('app startup');
                    /// bootstrap this application
                };
                Application.prototype.registerModel = function (model) {
                    if (this.models[model.name]) {
                        throw new Error('Application:: a model with the name "' + model.name + '" already exists.');
                    }
                    this.models[model.name] = model;
                    model.onRegister();
                    return model;
                };
                Application.prototype.retrieveModel = function (modelName) {
                    return this.models[modelName] || null;
                };
                Application.prototype.removeModel = function (modelToRemove) {
                    var name = modelToRemove.name;
                    var model = this.models[name];
                    if (!model) return;
                    model.onRemoved();
                    delete this.models[name];
                };
                Application.prototype.registerMediator = function (mediator) {
                    if (this.mediators[mediator.name]) {
                        throw new Error('Application:: a mediator with the name "' + mediator.name + '" already exists.');
                    }
                    this.mediators[mediator.name] = mediator;
                    this.registerObserver(mediator);
                    mediator.onRegister();
                };
                Application.prototype.retrieveMediator = function (mediatorName) {
                    return this.mediators[mediatorName] || null;
                };
                Application.prototype.removeMediator = function (mediatorToRemove) {
                    var _this = this;
                    var name = mediatorToRemove.name;
                    var mediator = this.mediators[name];
                    if (!mediator) return;
                    mediator.listNotificationInterests().forEach(function (interest) {
                        _this.removeObserver(interest, mediator);
                    });
                    mediator.onRemoved();
                    delete this.mediators[name];
                };
                Application.prototype.registerObserver = function (observer) {
                    var _this = this;
                    observer.listNotificationInterests().forEach(function (notificationName) {
                        if (_this.observerMap[notificationName] === undefined) {
                            _this.observerMap[notificationName] = [];
                        }
                        _this.observerMap[notificationName].push(observer);
                    });
                };
                /**
                 * stops an observer from being interested in a notification
                 * @param {String} notificationName
                 * @param {IObserver} observerToRemove
                 * @return {void}
                 */
                Application.prototype.removeObserver = function (notificationName, observerToRemove) {
                    //The observer list for the notification under inspection
                    var observers = null,
                        observer = null,
                        i = 0;
                    observers = this.observerMap[notificationName];
                    //Find the observer for the notifyContext.
                    i = observers.length;
                    while (i--) {
                        observer = observers[i];
                        if (observer === observerToRemove) {
                            observers.splice(i, 1);
                            break;
                        }
                    }
                    /*
                     * Also, when a Notification's Observer list length falls to zero, delete the
                     * notification key from the observer map.
                     */
                    if (observers.length == 0) {
                        delete this.observerMap[notificationName];
                    }
                };
                Application.prototype.sendNotification = function (notificationName, notficationBody) {
                    var notification = new mvc_1.Notification(notificationName, notficationBody);
                    this._notifyObservers(notification);
                    notification.destroy();
                    notification = null;
                };
                // private methods
                Application.prototype._notifyObservers = function (notification) {
                    var observers = null;
                    var notificationName = notification.getName();
                    var observersRef = this.observerMap[notificationName];
                    if (observersRef) {
                        // clone the array in case an observer gets removed while the notification is being sent
                        observers = observersRef.slice(0);
                        observers.forEach(function (observer) {
                            observer.handleNotification(notification);
                        });
                    }
                };
                Application._getHashQuery = function () {
                    Application._hashQuery = {};
                    if (!window.location.hash || window.location.hash === undefined) {
                        window.location.hash = '';
                    }
                    var hash = window.location.hash.substr(1, window.location.hash.length);
                    var aHash = hash.split('&');
                    aHash.forEach(function (hashPair) {
                        var aHash = hashPair.split('=');
                        Application._hashQuery[aHash[0]] = /^\d+$/.test(aHash[1]) ? parseInt(aHash[1]) : aHash[1];
                    });
                };
                // static methods
                /**
                 * returns the Application singleton
                 * @return {Application}
                 */
                Application.getInstance = function () {
                    if (!Application.instance) Application.instance = new Application();
                    return Application.instance;
                };
                /**
                 * gets a query variable from the window.location hash
                 * assumes something like http://url/#foo=bar&baz=foo
                 * @param {String} variableId
                 * @return {any}
                 */
                Application.queryVar = function (variableId) {
                    if (Application._hashQuery === undefined) {
                        Application._getHashQuery();
                    }
                    return Application._hashQuery[variableId] || null;
                };
                // static constants
                Application.instance = null;
                Application.SINGLETON_MSG = 'Application singleton already constructed!';
                return Application;
            }();
            exports_1("Application", Application);
        }
    };
});
$__System.register('20', ['24', '26', '25', '28', '27'], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    return {
        setters: [function (CopyModel_1_1) {
            exports_1({
                "CopyModel": CopyModel_1_1["CopyModel"]
            });
        }, function (Mediator_1_1) {
            exports_1({
                "Mediator": Mediator_1_1["Mediator"]
            });
        }, function (Model_1_1) {
            exports_1({
                "Model": Model_1_1["Model"]
            });
        }, function (Notification_1_1) {
            exports_1({
                "Notification": Notification_1_1["Notification"]
            });
        }, function (Application_1_1) {
            exports_1({
                "Application": Application_1_1["Application"]
            });
        }],
        execute: function () {}
    };
});
$__System.register("29", ["20"], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    var __extends = this && this.__extends || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var mvc_1;
    var ApplicationModel;
    return {
        setters: [function (mvc_1_1) {
            mvc_1 = mvc_1_1;
        }],
        execute: function () {
            ApplicationModel = function (_super) {
                __extends(ApplicationModel, _super);
                function ApplicationModel() {
                    _super.apply(this, arguments);
                    this.playerNum = -1;
                    this.gameId = null;
                    this.gamesList = null;
                }
                Object.defineProperty(ApplicationModel.prototype, "name", {
                    get: function () {
                        return ApplicationModel.MODEL_NAME;
                    },
                    enumerable: true,
                    configurable: true
                });
                ApplicationModel.MODEL_NAME = 'ApplicationModel';
                return ApplicationModel;
            }(mvc_1.Model);
            exports_1("ApplicationModel", ApplicationModel);
        }
    };
});
$__System.register('3', ['20', '29'], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    var __extends = this && this.__extends || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var mvc_1, ApplicationModel_1;
    var BaseMediator;
    return {
        setters: [function (mvc_1_1) {
            mvc_1 = mvc_1_1;
        }, function (ApplicationModel_1_1) {
            ApplicationModel_1 = ApplicationModel_1_1;
        }],
        execute: function () {
            BaseMediator = function (_super) {
                __extends(BaseMediator, _super);
                function BaseMediator() {
                    _super.apply(this, arguments);
                }
                BaseMediator.prototype.getCopy = function (groupId, itemId) {
                    return this.copyModel.getCopy(groupId, itemId);
                };
                BaseMediator.prototype.getCopyGroup = function (groupId) {
                    return this.copyModel.getCopyGroup(groupId);
                };
                Object.defineProperty(BaseMediator.prototype, "name", {
                    get: function () {
                        return this.mediatorName || BaseMediator.MEDIATOR_NAME;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(BaseMediator.prototype, "appModel", {
                    get: function () {
                        return this.app.retrieveModel(ApplicationModel_1.ApplicationModel.MODEL_NAME);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(BaseMediator.prototype, "copyModel", {
                    get: function () {
                        return this.app.retrieveModel(mvc_1.CopyModel.MODEL_NAME);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(BaseMediator.prototype, "playerNum", {
                    get: function () {
                        return this.appModel.playerNum;
                    },
                    enumerable: true,
                    configurable: true
                });
                BaseMediator.MEDIATOR_NAME = 'BaseMediator';
                return BaseMediator;
            }(mvc_1.Mediator);
            exports_1("BaseMediator", BaseMediator);
        }
    };
});
$__System.register('2a', [], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    var Notifications;
    return {
        setters: [],
        execute: function () {
            Notifications = function () {
                function Notifications() {}
                Notifications.REQUEST_GAMES_LIST = 'requestGamesList';
                Notifications.RECEIVED_GAMES_LIST = 'receivedGamesList';
                Notifications.CONNECT_TO_GAME = 'connectToGame';
                Notifications.CONNECTED_TO_GAME = 'connectedToGame';
                Notifications.PLAYER_SWIPE = 'playerSwipe';
                Notifications.PLAYER_START_GAME = 'playerStartGame';
                Notifications.START_GAME = 'startGame';
                Notifications.START_COUNTDOWN = 'startCountdown';
                return Notifications;
            }();
            exports_1("Notifications", Notifications);
        }
    };
});
$__System.register("4", ["2a"], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    return {
        setters: [function (Notifications_1_1) {
            exports_1({
                "Notifications": Notifications_1_1["Notifications"]
            });
        }],
        execute: function () {}
    };
});
$__System.register('2b', ['3', '4'], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    var __extends = this && this.__extends || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var BaseMediator_1, utils_1;
    var PlayMediator;
    return {
        setters: [function (BaseMediator_1_1) {
            BaseMediator_1 = BaseMediator_1_1;
        }, function (utils_1_1) {
            utils_1 = utils_1_1;
        }],
        execute: function () {
            PlayMediator = function (_super) {
                __extends(PlayMediator, _super);
                function PlayMediator() {
                    _super.apply(this, arguments);
                }
                PlayMediator.prototype.onRegister = function () {};
                PlayMediator.prototype.listNotificationInterests = function () {
                    return [utils_1.Notifications.PLAYER_SWIPE, utils_1.Notifications.START_COUNTDOWN, utils_1.Notifications.START_GAME];
                };
                PlayMediator.prototype.handleNotification = function (note) {
                    var name = note.getName();
                    var body = note.getBody();
                    switch (name) {
                        case utils_1.Notifications.PLAYER_SWIPE:
                            break;
                        case utils_1.Notifications.START_COUNTDOWN:
                            this.controller.startCountdown();
                            break;
                    }
                };
                PlayMediator.prototype.sendSwipe = function (percent) {
                    this.sendNotification(utils_1.Notifications.PLAYER_SWIPE, percent);
                };
                PlayMediator.prototype.sendStartGame = function () {
                    this.sendNotification(utils_1.Notifications.PLAYER_START_GAME);
                };
                Object.defineProperty(PlayMediator.prototype, "controller", {
                    get: function () {
                        return this._viewComponent;
                    },
                    enumerable: true,
                    configurable: true
                });
                PlayMediator.MEDIATOR_NAME = 'PlayMediator';
                return PlayMediator;
            }(BaseMediator_1.BaseMediator);
            exports_1("PlayMediator", PlayMediator);
        }
    };
});
$__System.register('2c', ['8', '7', 'a', '9', '2b'], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    var __extends = this && this.__extends || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var utils_1, display_1, utils_2, ui_1, PlayMediator_1;
    var Play;
    return {
        setters: [function (utils_1_1) {
            utils_1 = utils_1_1;
        }, function (display_1_1) {
            display_1 = display_1_1;
        }, function (utils_2_1) {
            utils_2 = utils_2_1;
        }, function (ui_1_1) {
            ui_1 = ui_1_1;
        }, function (PlayMediator_1_1) {
            PlayMediator_1 = PlayMediator_1_1;
        }],
        execute: function () {
            Play = function (_super) {
                __extends(Play, _super);
                function Play() {
                    _super.apply(this, arguments);
                    this.listContainer = null;
                    this.tongueInterval = 0;
                    this.isSwiping = false;
                }
                Play.prototype.init = function () {
                    console.log('controller init!');
                    this.mediator = new PlayMediator_1.PlayMediator(this);
                };
                Play.prototype.preload = function () {
                    console.log('controller preload');
                };
                Play.prototype.build = function () {
                    console.log('controller build');
                    this.addInputArea();
                    this.countdown = this.app.ui.addChild(new ui_1.Countdown(0, 0, Play.COLOURS[this.mediator.playerNum - 1]));
                    if (this.mediator.playerNum === 1) {
                        this.addStartGameButton();
                    }
                };
                Play.prototype.startCountdown = function () {
                    var _this = this;
                    this.countdown.show();
                    utils_1.Time.wait(1).then(function () {
                        _this.countdown.countdown().then(function () {
                            _this.start();
                        });
                    });
                };
                Play.prototype.start = function () {
                    this.countdown.hide();
                    this.enableInputArea();
                };
                Play.prototype.addInputArea = function () {
                    var gfx = this.addChild(new PIXI.Graphics());
                    gfx.beginFill(utils_2.Colours.getBackground(Play.COLOURS[this.mediator.playerNum - 1]));
                    gfx.drawRect(0, 0, this.app.width, this.app.height);
                    gfx.endFill();
                    this.inputArea = this.add.sprite(0, 0, gfx.generateTexture(this.app.renderer, 1));
                    this.removeChild(gfx);
                    gfx.destroy();
                    this.tongueLength = this.app.height / 10;
                    this.tonguePoints = this.getTonguePoints();
                    this.numTonguePoints = this.tonguePoints.length;
                    this.tongueContainer = this.add.container(this.app.width * 0.5, this.app.height + 20);
                    this.tongueContainer.rotation = -90 * Math.PI / 180;
                    this.tongue = this.add.rope(0, 0, utils_2.Resources.UI_SPRITESHEET.id, 'tongue.png', this.tonguePoints, this.tongueContainer); //this.add.sprite(this.app.width * 0.5, this.app.height, Resources.UI_SPRITESHEET.id, 'tongue.png');
                    this.tongue.width = this.app.height;
                    this.tongue.scale.y = this.tongue.scale.x;
                    this.tongue.tint = utils_2.Colours.getPrimary(Play.COLOURS[this.mediator.playerNum - 1]);
                    utils_1.Animator.from(this.inputArea, 0.5, { alpha: 0, ease: Sine.easeOut });
                    utils_1.Animator.from(this.tongueContainer, 0.4, { y: this.app.height * 2, ease: Sine.easeOut, delay: 0.3 });
                };
                Play.prototype.getTonguePoints = function () {
                    var points = [];
                    for (var i = 0; i < 10; i++) {
                        points.push(new PIXI.Point(i * this.tongueLength, 0));
                    }
                    return points;
                };
                Play.prototype.addStartGameButton = function () {
                    var startGameButton = this.add.existing(new ui_1.TextButton(this.app.width * 0.5, this.app.height * 0.5, 'START GAME', Play.COLOURS[this.mediator.playerNum - 1], true, this.app.width - 200));
                    startGameButton.interactive = true;
                    startGameButton.on('mousedown', this.onButtonPress, this).on('touchstart', this.onButtonPress, this);
                    startGameButton.on('mouseup', this.onButtonRelease, this).on('touchend', this.onButtonRelease, this);
                    startGameButton.on('mouseupoutside', this.onButtonReleaseOutside, this).on('touchendoutside', this.onButtonReleaseOutside, this);
                    this.startGameButton = startGameButton;
                };
                Play.prototype.onButtonPress = function (e) {
                    var target = e.target,
                        btn = target;
                    if (!btn.enabled) {
                        return;
                    }
                    btn.down();
                };
                Play.prototype.onButtonRelease = function (e) {
                    var target = e.target,
                        btn = target;
                    if (!btn.enabled) {
                        return;
                    }
                    btn.up(true);
                    this.mediator.sendStartGame();
                    this.hideStartGameButton();
                };
                Play.prototype.onButtonReleaseOutside = function (e) {
                    var target = e.target,
                        btn = target;
                    if (!btn.enabled) {
                        return;
                    }
                    btn.up(false);
                };
                Play.prototype.hideStartGameButton = function () {
                    this.startGameButton.interactive = false;
                    utils_1.Animator.to(this.startGameButton, 0.4, { x: -500, ease: Back.easeIn });
                };
                Play.prototype.enableInputArea = function () {
                    this.inputArea.interactive = true;
                    this.inputArea.on('mousedown', this.onDown, this).on('touchstart', this.onDown, this);
                    this.inputArea.on('mouseup', this.onRelease, this).on('touchend', this.onRelease, this);
                };
                Play.prototype.onDown = function (e) {
                    this.isSwiping = true;
                    console.log('onDown', e.data);
                    this.swipeStart = e.data.getLocalPosition(this);
                    this.inputData = e.data;
                };
                Play.prototype.onRelease = function (e) {
                    this.isSwiping = false;
                    this.swipeEnd = this.inputData.getLocalPosition(this.parent);
                    this.inputData = null;
                    this.determineSwipeDistance();
                    this.mediator.sendSwipe(this.swipePercent);
                };
                Play.prototype.determineSwipeDistance = function () {
                    this.swipeDistance = this.swipeStart.y - this.swipeEnd.y;
                    this.swipePercent = this.swipeDistance / this.app.height * 100;
                    console.log('swiped', this.swipeDistance, this.swipePercent);
                };
                Play.prototype.updateTongue = function () {
                    this.tongueInterval += 0.1;
                    for (var i = 0; i < this.numTonguePoints; i++) {
                        this.tonguePoints[i].y = Math.sin(i * 0.5 + this.tongueInterval) * 10;
                        this.tonguePoints[i].x = i * this.tongueLength + Math.cos(i * 0.3 + this.tongueInterval) * 7;
                    }
                };
                Play.prototype.update = function () {
                    this.updateTongue();
                };
                Play.prototype.shutdown = function () {};
                Play.COLOURS = ["pink", "blue", "green", "orange"];
                return Play;
            }(display_1.State);
            exports_1("Play", Play);
        }
    };
});
$__System.register('2d', ['15', '2', '29', '6', '2c'], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    var __extends = this && this.__extends || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var core_1, ApplicationMediator_1, ApplicationModel_1, Splash_1, Play_1;
    var KDController;
    return {
        setters: [function (core_1_1) {
            core_1 = core_1_1;
        }, function (ApplicationMediator_1_1) {
            ApplicationMediator_1 = ApplicationMediator_1_1;
        }, function (ApplicationModel_1_1) {
            ApplicationModel_1 = ApplicationModel_1_1;
        }, function (Splash_1_1) {
            Splash_1 = Splash_1_1;
        }, function (Play_1_1) {
            Play_1 = Play_1_1;
        }],
        execute: function () {
            KDController = function (_super) {
                __extends(KDController, _super);
                function KDController() {
                    _super.apply(this, arguments);
                }
                KDController.prototype.createMediator = function () {
                    this.model = new ApplicationModel_1.ApplicationModel();
                    this.mediator = new ApplicationMediator_1.ApplicationMediator(this);
                };
                KDController.prototype.addStates = function () {
                    this.state.add(Splash_1.Splash, 'splash');
                    this.state.add(Play_1.Play, 'play');
                    this.state.start('splash');
                };
                return KDController;
            }(core_1.PIXIApplication);
            exports_1("KDController", KDController);
        }
    };
});
$__System.register('2e', [], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    var Fonts;
    return {
        setters: [],
        execute: function () {
            Fonts = function () {
                function Fonts() {}
                Fonts.STAG_SANS_BOLD = { fontFamily: 'Stag Sans Bold', fontWeight: 700 };
                Fonts.STAG_SANS_BLACK = { fontFamily: 'Stag Sans Black', fontWeight: 900 };
                return Fonts;
            }();
            exports_1("Fonts", Fonts);
        }
    };
});
$__System.register('2f', [], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    var Colours;
    return {
        setters: [],
        execute: function () {
            Colours = function () {
                function Colours() {}
                Colours.getPrimary = function (color) {
                    var result = Colours.PINK_PRIMARY;
                    switch (color) {
                        case 'pink':
                            result = Colours.PINK_PRIMARY;
                            break;
                        case 'blue':
                            result = Colours.BLUE_PRIMARY;
                            break;
                        case 'green':
                            result = Colours.GREEN_PRIMARY;
                            break;
                        case 'orange':
                            result = Colours.ORANGE_PRIMARY;
                            break;
                    }
                    return result;
                };
                Colours.getBackground = function (color) {
                    var result = Colours.PINK_BACKGROUND;
                    switch (color) {
                        case 'pink':
                            result = Colours.PINK_BACKGROUND;
                            break;
                        case 'blue':
                            result = Colours.BLUE_BACKGROUND;
                            break;
                        case 'green':
                            result = Colours.GREEN_BACKGROUND;
                            break;
                        case 'orange':
                            result = Colours.ORANGE_BACKGROUND;
                            break;
                    }
                    return result;
                };
                Colours.getDark = function (color) {
                    var result = Colours.PINK_DARK;
                    switch (color) {
                        case 'pink':
                            result = Colours.PINK_DARK;
                            break;
                        case 'blue':
                            result = Colours.BLUE_DARK;
                            break;
                        case 'green':
                            result = Colours.GREEN_DARK;
                            break;
                        case 'orange':
                            result = Colours.ORANGE_DARK;
                            break;
                    }
                    return result;
                };
                Colours.PINK_PRIMARY = 0xee2c74;
                Colours.BLUE_PRIMARY = 0x00aedb;
                Colours.GREEN_PRIMARY = 0xd5e04d;
                Colours.ORANGE_PRIMARY = 0xfbaf34;
                Colours.PINK_BACKGROUND = 0xfabbcb;
                Colours.BLUE_BACKGROUND = 0x6ad1e3;
                Colours.GREEN_BACKGROUND = 0xe9ec6b;
                Colours.ORANGE_BACKGROUND = 0xfdd26e;
                Colours.PINK_DARK = 0x672046;
                Colours.BLUE_DARK = 0x002f86;
                Colours.GREEN_DARK = 0x009539;
                Colours.ORANGE_DARK = 0xcf451f;
                return Colours;
            }();
            exports_1("Colours", Colours);
        }
    };
});
$__System.register('30', [], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    var Resources;
    return {
        setters: [],
        execute: function () {
            Resources = function () {
                function Resources() {}
                Resources.CAT_SPRITESHEET = {
                    id: 'cat',
                    url: 'assets/img/spritesheet/cat.json',
                    hdurl: 'assets/img/spritesheet/cat@2x.json'
                };
                Resources.UI_SPRITESHEET = {
                    id: 'ui',
                    url: 'assets/img/spritesheet/ui.json',
                    hdurl: 'assets/img/spritesheet/ui@2x.json'
                };
                return Resources;
            }();
            exports_1("Resources", Resources);
        }
    };
});
$__System.register('a', ['2e', '2f', '30'], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    return {
        setters: [function (Fonts_1_1) {
            exports_1({
                "Fonts": Fonts_1_1["Fonts"]
            });
        }, function (Colours_1_1) {
            exports_1({
                "Colours": Colours_1_1["Colours"]
            });
        }, function (Resources_1_1) {
            exports_1({
                "Resources": Resources_1_1["Resources"]
            });
        }],
        execute: function () {}
    };
});
/// <reference path="../../typings/index.d.ts" />
$__System.register('1', ['2d', 'a'], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    var KDController_1, utils_1;
    var app;
    return {
        setters: [function (KDController_1_1) {
            KDController_1 = KDController_1_1;
        }, function (utils_1_1) {
            utils_1 = utils_1_1;
        }],
        execute: function () {
            app = new KDController_1.KDController({ resize: true, width: "100%", height: "100%", backgroundColor: utils_1.Colours.getBackground('blue') });
        }
    };
});
})
(function(factory) {
  factory();
});
//# sourceMappingURL=bundle-controller.js.map
