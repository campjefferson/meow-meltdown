import { Animator, Time } from 'bolt/utils';
import { State, Text, Container, Sprite, Rope } from 'lightning/display';
import { Animation } from 'lightning/utils';
import { Fonts, Resources, Colours } from 'common/utils';
import { Ribbon, Countdown, TextButton } from 'common/ui';

import { PlayMediator } from 'controller/mediator/PlayMediator';

export class Play extends State {
    private static COLOURS: ("pink" | "blue" | "green" | "orange")[] = ["pink", "blue", "green", "orange"];
    protected mediator: PlayMediator;

    private listContainer: Container = null;
    private inputArea: Sprite;
    private tongueContainer: Container;
    private tongue: Rope;
    private tongueInterval: number = 0;
    private tonguePoints: PIXI.Point[];
    private numTonguePoints: number;
    private tongueLength: number;
    private startGameButton: TextButton;
    private restartGameButton: TextButton;
    private isSwiping: boolean = false;
    private swipeStart: PIXI.Point;
    private swipeEnd: PIXI.Point;
    private swipeDistance: number;
    private swipePercent: number;
    private inputData: PIXI.interaction.InteractionData;
    public countdown: Countdown;

    private startButtonPressed = false;
    private restartButtonPressed = false;

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
            this.addRestartGameButton();
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

    public restartGame(): void {
        this.startButtonPressed = this.restartButtonPressed = false;
    }

    public gameOver(): void {
        if (this.mediator.playerNum === 1) {
            this.showRestartGameButton();
        }
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

        this.tongueLength = (this.app.height) / 10;
        this.tonguePoints = this.getTonguePoints();
        this.numTonguePoints = this.tonguePoints.length;

        this.tongueContainer = this.add.container(this.app.width * 0.5, this.app.height + 20);
        this.tongueContainer.rotation = -90 * Math.PI / 180;
        this.tongue = this.add.rope(0, 0, Resources.UI_SPRITESHEET.id, 'tongue.png', this.tonguePoints, this.tongueContainer);//this.add.sprite(this.app.width * 0.5, this.app.height, Resources.UI_SPRITESHEET.id, 'tongue.png');
        this.tongue.width = this.app.height;
        this.tongue.scale.y = this.tongue.scale.x;
        this.tongue.tint = Colours.getPrimary(Play.COLOURS[this.mediator.playerNum - 1]);

        Animator.from(this.inputArea, 0.5, { alpha: 0, ease: Sine.easeOut });
        Animator.from(this.tongueContainer, 0.4, { y: this.app.height * 2, ease: Sine.easeOut, delay: 0.3 });
    }

    protected getTonguePoints(): PIXI.Point[] {
        let points = [];
        for (var i = 0; i < 10; i++) {
            points.push(new PIXI.Point(i * this.tongueLength, 0));
        }
        return points;
    }

    protected addStartGameButton(): void {
        const startGameButton = this.add.existing(new TextButton(this.app.width * 0.5, this.app.height * 0.5, 'START GAME', Play.COLOURS[this.mediator.playerNum - 1], true, this.app.width - 200)) as TextButton;
        startGameButton.interactive = true;
        startGameButton.on('mousedown', this.onButtonPress, this)
            .on('touchstart', this.onButtonPress, this);

        startGameButton.on('mouseup', this.onButtonRelease, this)
            .on('touchend', this.onButtonRelease, this);

        startGameButton.on('mouseupoutside', this.onButtonReleaseOutside, this)
            .on('touchendoutside', this.onButtonReleaseOutside, this);

        this.startGameButton = startGameButton;
    }

    protected addRestartGameButton(): void {
        const restartGameButton = this.add.existing(new TextButton(-this.app.width, this.app.height * 0.5, 'NEW GAME', Play.COLOURS[this.mediator.playerNum - 1], true, this.app.width - 200)) as TextButton;
        restartGameButton.interactive = true;
        restartGameButton.on('mousedown', this.onButtonPress, this)
            .on('touchstart', this.onButtonPress, this);

        restartGameButton.on('mouseup', this.onButtonRelease, this)
            .on('touchend', this.onButtonRelease, this);

        restartGameButton.on('mouseupoutside', this.onButtonReleaseOutside, this)
            .on('touchendoutside', this.onButtonReleaseOutside, this);

        this.restartGameButton = restartGameButton;
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
        if (btn === this.restartGameButton) {
            if (this.restartButtonPressed) {
                return;
            }
            this.mediator.sendRestartGame();
            this.hideRestartGameButton();
            this.restartButtonPressed = true;
        } else {
            if (this.startButtonPressed) {
                return;
            }
            this.mediator.sendStartGame();
            this.hideStartGameButton();
            this.startButtonPressed = true;
        }

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

    protected hideRestartGameButton(): void {
        this.restartGameButton.interactive = false;
        Animator.to(this.restartGameButton, 0.4, { x: -500, ease: Back.easeIn });
    }

    protected showRestartGameButton(): void {
        Animator.to(this.restartGameButton, 0.4, { x: this.app.width * 0.5, ease: Back.easeOut });
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

    protected updateTongue(): void {
        this.tongueInterval += 0.1;

        for (let i = 0; i < this.numTonguePoints; i++) {
            this.tonguePoints[i].y = Math.sin((i * 0.5) + this.tongueInterval) * 10;
            this.tonguePoints[i].x = i * this.tongueLength + Math.cos((i * 0.3) + this.tongueInterval) * 7;
        }
    }

    public update(): void {
        this.updateTongue();
    }

    public shutdown(): void {
    }
}