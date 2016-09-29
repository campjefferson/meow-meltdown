import {Animation} from 'lightning/utils';
import {Animator, Time} from 'bolt/utils';
import {Container, Sprite, MovieClip, TileSprite} from 'lightning/display';

import {Resources} from 'common/utils';
import {Ribbon} from 'common/ui';
import {IceCream} from 'game/gameobjects/IceCream';


export type CatColor = "pink" | "blue" | "green" | "orange";

export class Cat extends Container {
    public static DEFAULT_NECK_HEIGHT: number = 1;
    public static EXTENDED_NECK_HEIGHT: number = 800;

    public eye: Sprite;
    public tongue: MovieClip;
    public base: Sprite;
    public head: Sprite;
    public neckTop: Sprite;
    public neck: TileSprite;
    public iceCream: IceCream;
    public ribbon: Ribbon;

    public finished: boolean = false;
    public canWin: boolean = true;
    public lickEnabled: boolean = true;

    protected amountNeededForDrop: number = 100;
    protected debugPercent: number = 0;
    protected isDown: boolean = false;

    constructor(x: number = 0, y: number = 0, public color: CatColor) {
        super(x, y);
        this.build();
        this.addInteraction();

        this.pivot.set(this.base.width * 0.5, this.base.y + this.base.height);
    }

    protected build(): void {
        const atlasId = Resources.CAT_SPRITESHEET.id;
        this.neckTop = this.addChild(new Sprite(45, 180, atlasId, this.color + '/' + 'neck_top.png')) as Sprite;
        this.neck = this.addChild(new TileSprite(46, 208 + Cat.DEFAULT_NECK_HEIGHT, atlasId, this.color + '/' + 'neck_tile.png', 81.5, Cat.DEFAULT_NECK_HEIGHT)) as TileSprite;
        this.neck.anchor.set(0, 1);

        this.iceCream = this.addChild(new IceCream(262, 148, this.color, Cat.EXTENDED_NECK_HEIGHT)) as IceCream;
        this.head = this.addChild(new Sprite(93, 186, atlasId, this.color + '/' + 'head.png')) as Sprite;

        this.tongue = this.head.addChild(new MovieClip(143, 54, Animation.generateFrames('tongue_', 0, 3))) as MovieClip;
        this.head.pivot.set(92, 186);

        this.eye = this.head.addChild(new Sprite(110, 63, atlasId, 'eye.png')) as Sprite;
        this.eye.visible = false;

        this.base = this.addChild(new Sprite(5, this.neckTop.y + this.neckTop.height + Cat.DEFAULT_NECK_HEIGHT - 70, atlasId, this.color + '/' + 'base.png')) as Sprite;
    }

    protected addInteraction(): void {
        this.head.interactive = true;

        this.head.on('mousedown', this.onMouseDown, this)
            .on('touchstart', this.onMouseDown, this)

        this.head.on('mouseup', this.onMouseUp, this)
            .on('touchend', this.onMouseUp, this)
            .on('mouseupoutside', this.onMouseUp, this)
            .on('touchendoutside', this.onMouseUp, this)
    }

    public onMouseDown(): void {
        this.isDown = true;
        this.debugPercent = 0;
    }

    public onMouseUp(): void {
        this.isDown = false;
        this.lick(this.debugPercent);
    }

    public update() {
        if (this.isDown) {
            if (this.debugPercent < 100) {
                this.debugPercent += 2;
            }
        }
        this.head.y = this.neck.y - this.neck.height + 5;
    }

    public lick(lickpercent: number): void {
        if (!this.lickEnabled || !this.canWin) {
            return;
        }

        this.lickEnabled = false;
        const dist = Cat.EXTENDED_NECK_HEIGHT * (lickpercent * 0.01);
        const time = dist / 1200;

        this.tongue.gotoAndStop(2);
        Animator.to(this.neck, time, { height: dist, ease: Sine.easeOut });

        Time.wait(time - 0.1).then(() => {
            this.tongue.gotoAndStop(1);
            this.eye.visible = true;
            Animator.to(this.head, 0.1, { rotation: -10 * (Math.PI / 180), ease: Sine.easeOut, yoyo: true, repeat: 1 });
            Time.wait(0.05).then(() => {
                this.tongue.gotoAndStop(3);
            });
            Time.wait(0.1).then(() => {
                this.tongue.gotoAndStop(0);
                Animator.to(this.neck, time * 0.6, { height: 1, ease: Sine.easeIn }).then(() => {
                    this.lickEnabled = true;
                    this.eye.visible = false;
                })
            });
        });

        this.amountNeededForDrop -= lickpercent;

        if (this.amountNeededForDrop <= 0) {
            this.iceCream.drop();
            this.amountNeededForDrop = Math.round(this.iceCream.remainingPieces / this.iceCream.totalPieces * 100);
        }

        if (this.iceCream.finished) {
            Time.wait(0.2).then(() => {
                this.finished = true;
            });
        }
    }
}