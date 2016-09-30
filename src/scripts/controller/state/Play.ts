import {State, Text, Container, Sprite} from 'lightning/display';
import {Animation} from 'lightning/utils';

import {PlayMediator} from 'controller/mediator/PlayMediator';
import {Fonts, Resources} from 'common/utils';

export class Play extends State {
    protected mediator: PlayMediator;

    private listContainer: Container = null;
    private inputArea: Sprite;
    private isSwiping: boolean = false;
    private swipeStart: PIXI.Point;
    private swipeEnd: PIXI.Point;
    private swipeDistance: number;
    private swipePercent: number;
    private inputData:PIXI.interaction.InteractionData;

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
        this.enableInputArea();
    }

    protected addInputArea(): void {
        const gfx: PIXI.Graphics = this.addChild(new PIXI.Graphics()) as PIXI.Graphics;
        gfx.beginFill(0xff0000, 0.5);
        gfx.drawRect(0, 0, this.app.width, this.app.height);
        gfx.endFill();

        this.inputArea = this.add.sprite(0, 0, gfx.generateTexture(this.app.renderer, 1));
        this.removeChild(gfx);
        gfx.destroy();
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
    }

    protected determineSwipeDistance():void{
        this.swipeDistance = this.swipeStart.y - this.swipeEnd.y;
        this.swipePercent = this.swipeDistance / this.app.height * 100;
        this.mediator.s
        console.log('swiped',this.swipeDistance, this.swipePercent);
    }

    public update(): void {
    }

    public shutdown(): void {
    }
}