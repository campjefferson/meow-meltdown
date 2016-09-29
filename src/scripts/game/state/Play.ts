import {State, Text, Sprite} from 'lightning/display';
import {Animation} from 'lightning/utils';
import {Time} from 'bolt/utils';

import {Fonts, Resources, Colours} from 'common/utils';
import {Ribbon, Countdown} from 'common/ui';
import {Cat} from 'game/gameobjects/Cat';

export class Play extends State {
    public player1: Cat;
    public player2: Cat;
    public player3: Cat;
    public player4: Cat;
    public players: Cat[];
    public numPlayers: number = 0;

    public player1Bg: Sprite;
    public player2Bg: Sprite;
    public player3Bg: Sprite;
    public player4Bg: Sprite;

    public player1Ribbon: Ribbon;
    public player2Ribbon: Ribbon;
    public player3Ribbon: Ribbon;
    public player4Ribbon: Ribbon;

    public countdown: Countdown;
    public winner: number = 0;
    public hasWinner:boolean = false;

    public init(): void {
        console.log('play init!')
    }

    public preload(): void {
        console.log('play preload')
        this.app.asset.load(Resources.CAT_SPRITESHEET);
    }

    public build(): void {
        this.generateBackgrounds();
        this.addPlayers();
        this.addRibbons();

        this.player1.ribbon = this.player1Ribbon;
        this.player2.ribbon = this.player2Ribbon;
        this.player3.ribbon = this.player3Ribbon;
        this.player4.ribbon = this.player4Ribbon;

        // Time.wait(0.5).then(() => {
        //     this.player1Ribbon.setPosition(1);
        // })

        // Time.wait(1).then(() => {
        //     this.player2Ribbon.setPosition(2);
        // })

        // Time.wait(1.5).then(() => {
        //     this.player3Ribbon.setPosition(3);
        // })

        // Time.wait(2).then(() => {
        //     this.player4Ribbon.setPosition(4);
        // });

        this.countdown = this.app.ui.addChild(new Countdown(0, 0, 'blue')) as Countdown;

        this.countdown.show(1);
        Time.wait(2).then(() => {
            this.countdown.countdown().then(() => {
                this.start();
            });
        })
    }

    protected start(): void {
        this.countdown.hide();
    }

    public generateBackgrounds(): void {
        const gfx = this.addChild(new PIXI.Graphics()) as PIXI.Graphics;
        gfx.beginFill(Colours.getBackground('pink'));
        gfx.drawRect(0, 0, Math.ceil(this.app.width * 0.25), this.app.height);
        gfx.endFill();

        this.player1Bg = this.add.sprite(0, 0, gfx.generateTexture(this.app.renderer, this.app.resolution));

        gfx.clear();
        gfx.beginFill(Colours.getBackground('blue'));
        gfx.drawRect(0, 0, Math.ceil(this.app.width * 0.25), this.app.height);
        gfx.endFill();

        this.player2Bg = this.add.sprite(this.player1Bg.width, 0, gfx.generateTexture(this.app.renderer, this.app.resolution));

        gfx.clear();
        gfx.beginFill(Colours.getBackground('green'));
        gfx.drawRect(0, 0, Math.ceil(this.app.width * 0.25), this.app.height);
        gfx.endFill();

        this.player3Bg = this.add.sprite(this.player2Bg.x + this.player2Bg.width, 0, gfx.generateTexture(this.app.renderer, this.app.resolution));

        gfx.clear();
        gfx.beginFill(Colours.getBackground('orange'));
        gfx.drawRect(0, 0, Math.ceil(this.app.width * 0.25), this.app.height);
        gfx.endFill();

        this.player4Bg = this.add.sprite(this.player3Bg.x + this.player3Bg.width, 0, gfx.generateTexture(this.app.renderer, this.app.resolution));

        this.removeChild(gfx);
        gfx.destroy();
    }

    public addPlayers(): void {
        this.player1 = this.addChild(new Cat(this.app.width * 0.125, this.app.height + 5, 'pink')) as Cat;
        this.player2 = this.addChild(new Cat(this.app.width * 0.375, this.app.height + 5, 'blue')) as Cat;
        this.player3 = this.addChild(new Cat(this.app.width * 0.625, this.app.height + 5, 'green')) as Cat;
        this.player4 = this.addChild(new Cat(this.app.width * 0.875, this.app.height + 5, 'orange')) as Cat;

        this.players = [this.player1, this.player2, this.player3, this.player4];
        this.numPlayers = this.players.length;
    }

    public addRibbons(): void {
        this.player1Ribbon = this.addChild(new Ribbon(this.app.width * 0.125, 185, 'pink')) as Ribbon;
        this.player2Ribbon = this.addChild(new Ribbon(this.app.width * 0.375, 185, 'blue')) as Ribbon;
        this.player3Ribbon = this.addChild(new Ribbon(this.app.width * 0.625, 185, 'green')) as Ribbon;
        this.player4Ribbon = this.addChild(new Ribbon(this.app.width * 0.875, 185, 'orange')) as Ribbon;
    }

    public update(): void {
        this.updatePlayers();
        this.checkPlayers();
        if (!this.hasWinner && this.winner === this.numPlayers) {
            // game over
            this.hasWinner = true;
            console.log('game over');
        }
    }

    private updatePlayers(): void {
        for (let i = 0; i < this.numPlayers; i++) {
            this.players[i].update();
        }
    }

    private checkPlayers(): void {
        for (let i = 0; i < this.numPlayers; i++) {
            if (this.players[i].canWin && this.players[i].finished) {
                this.winner++;
                this.players[i].canWin = false;
                this.players[i].ribbon.setPosition(this.winner);
            }
        }
    }

    public shutdown(): void {
    }
}