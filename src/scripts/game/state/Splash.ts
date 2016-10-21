import { State, Text, Sprite } from 'lightning/display';
import { Animation } from 'lightning/utils';
import { Animator, Time } from 'bolt/utils';

import { Fonts, Resources, Colours } from 'common/utils';
import { SplashMediator } from 'game/mediator/SplashMediator';
import { PlayerDisplay } from 'game/gameobjects/PlayerDisplay';

export class Splash extends State {
    private static DEBUG: boolean = false;
    private static DEBUG_PLAYERS: number = 4;

    private static CAT_SOUNDS: string[] = ['meow_cat', 'meow_kitten', 'tomcat'];

    private title: Sprite;
    private instructionsText: Text;
    private gameIdText: Text;
    private gameIdBG: PIXI.Sprite;

    public player1: PlayerDisplay;
    public player2: PlayerDisplay;
    public player3: PlayerDisplay;
    public player4: PlayerDisplay;

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
        this.app.asset.loadSound(Resources.SFX);
        this.app.asset.loadSound(Resources.MUSIC_SPLASH);
        this.app.asset.loadSound(Resources.MUSIC_GAME);
    }

    public build(): void {
        console.log('splash build')
        this.displays = [];

        this.title = this.add.sprite(this.app.width * 0.5, 300, Resources.UI_SPRITESHEET.id, 'title.png');
        this.title.anchor.set(0.5);

        const gfx = new PIXI.Graphics();
        gfx.beginFill(0xffffff);
        gfx.drawRect(0, 0, 300, 75);
        gfx.endFill();

        this.gameIdBG = this.add.sprite(this.app.width * 0.5, this.app.height * 0.5 + 100, gfx.generateTexture(this.app.renderer, 1));
        this.gameIdBG.anchor.set(0.5);

        gfx.destroy();

        this.gameIdText = this.add.text(this.gameIdBG.x, this.gameIdBG.y, '12345', Fonts.STAG_SANS_BLACK, 46, Colours.BLUE_PRIMARY);
        this.gameIdText.anchor.set(0.5, 0.5);

        this.instructionsText = this.add.text(this.app.width * 0.5, this.gameIdText.y - 100, 'to connect with your phone, select the game code below.'.toUpperCase(), Fonts.STAG_SANS_BLACK, 32, 0xffffff);
        this.instructionsText.anchor.set(0.5, 0.5);

        this.player1 = this.addChild(new PlayerDisplay(243, this.app.height - 230, 'pink', 1)) as PlayerDisplay;
        this.player2 = this.addChild(new PlayerDisplay(726, this.app.height - 230, 'blue', 2)) as PlayerDisplay;
        this.player3 = this.addChild(new PlayerDisplay(1206, this.app.height - 230, 'green', 3)) as PlayerDisplay;
        this.player4 = this.addChild(new PlayerDisplay(1683, this.app.height - 230, 'orange', 4)) as PlayerDisplay;

        this.displays = [this.player1, this.player2, this.player3, this.player4];

        this.mediator.updateGameId();

        if (Splash.DEBUG) {
            this.debugConnectPlayers();
        }

        this.app.sound.setBgTrack(Resources.MUSIC_SPLASH.id);
    }

    private debugConnectPlayers(): void {
        for (let i = 1; i < Splash.DEBUG_PLAYERS + 1; i++) {
            Time.wait(i).then(() => {
                this.mediator.playerConnected(i, true);
            })
        }
    }

    // called from mediator
    public setGameId(gameId: string): void {
        if (gameId === undefined || this.gameIdText === undefined) {
            return;
        }

        this.gameIdText.text = gameId.toUpperCase();
        this.gameIdBG.width = this.gameIdText.width + 100;
    }

    public playerConnected(playerNum: number): void {
        this.displays[playerNum - 1].setConnected();
        this.app.sound.play('sfx', Splash.CAT_SOUNDS[Math.floor(Math.random() * 3)]);

        if (playerNum === Splash.DEBUG_PLAYERS || playerNum === 4) {
            Time.wait(1).then(() => { this.proceedToGame() });
        }
    }

    public proceedToGame(): void {
        for (let i = 0; i < 4; i++) {
            this.displays[i].hide(i * 0.1);
        }

        Time.wait(0.75).then(() => {
            Animator.staggerTo([this.title, this.gameIdText, this.gameIdBG], 0.4, { ease: Sine.easeIn, alpha: 0, y: "+=20" }, 0);
            Animator.to(this.instructionsText, 0.4, { ease: Sine.easeIn, alpha: 0, y: "+=20", delay: 0.2 }).then(() => {
                this.app.state.to('play');
            })
        });
    }

    public shutdown(): void {
        this.mediator.destroy();
    }
}