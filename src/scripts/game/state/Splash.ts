import {State, Text, Sprite} from 'lightning/display';
import {Animation} from 'lightning/utils';

import {Fonts, Resources, Colours} from 'common/utils';
import {SplashMediator} from 'game/mediator/SplashMediator';
import {PlayerDisplay} from 'game/gameobjects/PlayerDisplay';

export class Splash extends State {
    private instructionsText: Text;
    private gameIdText: Text;
    private gameIdBG: PIXI.Graphics;
    public cat1: PlayerDisplay;
    public cat2: PlayerDisplay;
    public cat3: PlayerDisplay;
    public cat4: PlayerDisplay;

    public displays: PlayerDisplay[];

    private mediator: SplashMediator;

    public init(): void {
        this.mediator = new SplashMediator(this);
        console.log('splash init!')
    }

    public preload(): void {
        console.log('splash preload');
        this.app.asset.load(Resources.UI_SPRITESHEET);
        this.app.asset.load(Resources.CAT_SPRITESHEET);
    }

    public build(): void {
        console.log('splash build')
        this.displays = [];

        this.gameIdBG = new PIXI.Graphics();
        this.gameIdBG.beginFill(0xffffff);
        this.gameIdBG.drawRect(0, 0, 300, 75);
        this.gameIdBG.endFill();
        this.gameIdBG.x = this.app.width * 0.5;
        this.gameIdBG.y = this.app.height * 0.5;
        this.gameIdBG.pivot.set(this.gameIdBG.width * 0.5, this.gameIdBG.height * 0.5);
        this.addChild(this.gameIdBG);

        this.gameIdText = this.add.text(this.app.width * 0.5, this.app.height * 0.5, '12345', Fonts.STAG_SANS_BLACK, 46, Colours.BLUE_PRIMARY);
        this.gameIdText.anchor.set(0.5, 0.5);

        this.instructionsText = this.add.text(this.app.width * 0.5, this.gameIdText.y - 100, 'to connect with your phone, select the game code below.'.toUpperCase(), Fonts.STAG_SANS_BLACK, 32, 0xffffff);
        this.instructionsText.anchor.set(0.5, 0.5);

        this.cat1 = this.addChild(new PlayerDisplay(243, this.app.height - 230, 'pink', 1)) as PlayerDisplay;
        this.cat2 = this.addChild(new PlayerDisplay(726, this.app.height - 230, 'blue', 2)) as PlayerDisplay;
        this.cat3 = this.addChild(new PlayerDisplay(1206, this.app.height - 230, 'green', 3)) as PlayerDisplay;
        this.cat4 = this.addChild(new PlayerDisplay(1683, this.app.height - 230, 'orange', 4)) as PlayerDisplay;

        this.displays = [this.cat1, this.cat2, this.cat3, this.cat4];

        this.mediator.updateGameId();
    }

    // called from mediator
    public setGameId(gameId: string): void {
        if (gameId === undefined || this.gameIdText === undefined) {
            return;
        }

        this.gameIdText.text = gameId.toUpperCase();
        this.gameIdBG.width = this.gameIdText.width + 100;
    }

    public setPlayers(playerNum: number): void {
        this.displays[playerNum -1].show();
    }

    public update(): void {
    }

    public shutdown(): void {
    }
}