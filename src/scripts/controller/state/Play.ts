import {Animator, Time} from 'bolt/utils';
import {State, Text, Container, Sprite} from 'lightning/display';
import {Animation} from 'lightning/utils';
import {Fonts, Resources, Colours} from 'common/utils';
import {Ribbon, Countdown, TextButton} from 'common/ui';

import {PlayMediator} from 'controller/mediator/PlayMediator';

export class Play extends State {
    private static COLOURS: ("pink" | "blue" | "green" | "orange")[] = ["pink", "blue", "green", "orange"];
    protected mediator: PlayMediator;

    private listContainer: Container = null;
    private inputArea: Sprite;
    private startGameButton: TextButton;
    private isSwiping: boolean = false;
    private swipeStart: PIXI.Point;
    private swipeEnd: PIXI.Point;
    private swipeDistance: number;
    private swipePercent: number;
    private inputData: PIXI.interaction.InteractionData;
    public countdown: Countdown;

    public init(): void {
        console.log('controller init!');
        this.mediator = new PlayMediator(this);
    }

    public preload(): void {
        console.log('controller preload')
    }

    public build(): void {
        console.log('controller build')
        this.addInputArea();
        

        this.countdown = this.app.ui.addChild(new Countdown(0, 0, Play.COLOURS[this.mediator.playerNum - 1])) as Countdown;

        if (this.mediator.playerNum === 1) {
            this.addStartGameButton();
        }
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
        this.enableInputArea();
    }

    protected addInputArea(): void {
        const gfx: PIXI.Graphics = this.addChild(new PIXI.Graphics()) as PIXI.Graphics;
        gfx.beginFill(Colours.getBackground(Play.COLOURS[this.mediator.playerNum - 1]));
        gfx.drawRect(0, 0, this.app.width, this.app.height);
        gfx.endFill();

        this.inputArea = this.add.sprite(0, 0, gfx.generateTexture(this.app.renderer, 1));
        this.removeChild(gfx);
        gfx.destroy();

        Animator.from(this.inputArea, 0.5, { alpha: 0, ease: Sine.easeOut });
    }

    protected addStartGameButton(): void {
        const startGameButton = this.add.existing(new TextButton(this.app.width * 0.5, this.app.height * 0.5, 'START GAME', Play.COLOURS[this.mediator.playerNum - 1], true)) as TextButton;
        startGameButton.interactive = true;
        startGameButton.on('mousedown', this.onButtonPress, this)
            .on('touchstart', this.onButtonPress, this);

        startGameButton.on('mouseup', this.onButtonRelease, this)
            .on('touchend', this.onButtonRelease, this);

        startGameButton.on('mouseupoutside', this.onButtonReleaseOutside, this)
            .on('touchendoutside', this.onButtonReleaseOutside, this);

        this.startGameButton = startGameButton;
    }

    protected onButtonPress(e: Event): void {
        const target: any = e.target,
            btn: TextButton = (target as TextButton);
        if (!btn.enabled) {
            return;
        }
        btn.down();
    }

    protected onButtonRelease(e: Event): void {
        const target: any = e.target,
            btn: TextButton = (target as TextButton);
        if (!btn.enabled) {
            return;
        }
        btn.up(true);
        this.mediator.sendStartGame();
        this.hideStartGameButton();
    }

    protected onButtonReleaseOutside(e: Event): void {
        const target: any = e.target,
            btn: TextButton = (target as TextButton);
        if (!btn.enabled) {
            return;
        }
        btn.up(false);
    }

    protected hideStartGameButton(): void {
        this.startGameButton.interactive = false;
        Animator.to(this.startGameButton, 0.4, { x: -500, ease: Back.easeIn });
    }

    protected enableInputArea(): void {
        this.inputArea.interactive = true;
        this.inputArea.on('mousedown', this.onDown, this)
            .on('touchstart', this.onDown, this)

        this.inputArea.on('mouseup', this.onRelease, this)
            .on('touchend', this.onRelease, this)
    }

    protected onDown(e: PIXI.interaction.InteractionEvent): void {
        this.isSwiping = true;
        console.log('onDown', e.data);
        this.swipeStart = e.data.getLocalPosition(this);
        this.inputData = e.data;
    }

    protected onRelease(e: PIXI.interaction.InteractionEvent): void {
        this.isSwiping = false;
        this.swipeEnd = this.inputData.getLocalPosition(this.parent);
        this.inputData = null;
        this.determineSwipeDistance();
        this.mediator.sendSwipe(this.swipePercent);
    }

    protected determineSwipeDistance(): void {
        this.swipeDistance = this.swipeStart.y - this.swipeEnd.y;
        this.swipePercent = this.swipeDistance / this.app.height * 100;
        console.log('swiped', this.swipeDistance, this.swipePercent);
    }

    public update(): void {
    }

    public shutdown(): void {
    }
}