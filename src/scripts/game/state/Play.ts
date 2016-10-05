import {State, Text, Sprite} from 'lightning/display';
import {Animation} from 'lightning/utils';
import {Time, Animator} from 'bolt/utils';

import {Fonts, Resources, Colours} from 'common/utils';
import {Ribbon, Countdown} from 'common/ui';
import {Cat} from 'game/gameobjects/Cat';
import {PlayMediator} from 'game/mediator/PlayMediator';

export class Play extends State {
    private static PLAYER_COLORS: ('pink' | 'blue' | 'green' | 'orange')[] = ['pink', 'blue', 'green', 'orange'];

    private static SLURP_SOUNDS: string[] = ['straw_slurp', 'slurping_2', 'slurp'];

    public player1: Cat;
    public player2: Cat;
    public player3: Cat;
    public player4: Cat;
    public players: Cat[];
    public bgs: Sprite[];
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
    public hasWinner: boolean = false;

    private playerContainerSize: number;
    private mediator: PlayMediator;

    public init(): void {
        console.log('play init!')
        this.mediator = new PlayMediator(this);
    }

    public preload(): void {
        console.log('play preload')
    }

    public build(): void {
        this.numPlayers = this.mediator.numPlayers;
        this.playerContainerSize = this.app.width * 0.5 / this.numPlayers;
        this.generateBackgrounds();
        this.addPlayers();
        this.countdown = this.app.ui.addChild(new Countdown(0, 0, 'blue')) as Countdown;

        Animator.staggerFrom(this.bgs, 0.6, { x: this.app.width, ease: Sine.easeOut, delay: 0.6 }, 0.2);
        Animator.staggerFrom(this.players, 0.6, { y: this.app.height * 2, ease: Sine.easeOut, delay: 1.2 }, 0.2);

        Time.wait(3).then(() => {
            this.mediator.sendInitCountdown();
        });
    }

    public startCountdown() {
        this.countdown.show();
        Time.wait(1).then(() => {
            this.countdown.countdown().then(() => {
                this.start();
            });
        })
    }

    protected start(): void {
        this.countdown.hide();
    }

    protected generateBackgrounds(): void {
        const size = this.playerContainerSize * 2;
        const gfx = this.addChild(new PIXI.Graphics()) as PIXI.Graphics;
        this.bgs = [];

        for (let i = 1; i < this.numPlayers + 1; i++) {
            gfx.clear();
            gfx.beginFill(Colours.getBackground(Play.PLAYER_COLORS[i - 1]));
            gfx.drawRect(0, 0, this.app.width, this.app.height);
            gfx.endFill();
            this.bgs.push(this.add.sprite(size * (i - 1), 0, gfx.generateTexture(this.app.renderer, this.app.resolution)));

        }
        this.removeChild(gfx);
        gfx.destroy();
    }

    public addPlayers(): void {
        this.players = [];
        let xpos = 0;

        for (let i = 1; i < this.numPlayers + 1; i++) {
            xpos += this.app.width * (this.playerContainerSize / this.app.width);
            this.players.push(this.addChild(new Cat(xpos, this.app.height + 5, Play.PLAYER_COLORS[i - 1])) as Cat);
            this.players[this.players.length - 1].ribbon = this.addChild(new Ribbon(xpos, 185, Play.PLAYER_COLORS[i - 1])) as Ribbon;
            xpos += this.app.width * (this.playerContainerSize / this.app.width);
        }
    }

    public inputSwipe(playerNum: number, percent: number): void {
        this.players[playerNum - 1].lick(percent);
        this.app.sound.play('sfx', Play.SLURP_SOUNDS[Math.floor(Math.random() * 3)]);
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
                this.app.sound.play('sfx', 'fruit_collected');
            }
        }
    }

    public shutdown(): void {
        this.mediator.destroy();
    }
}