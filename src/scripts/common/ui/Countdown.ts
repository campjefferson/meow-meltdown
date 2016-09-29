import Promise from "bluebird";
import {Animator, Time} from 'bolt/utils';
import {Colours, Resources, Fonts} from 'common/utils';
import {Container, Text, Sprite} from 'lightning/display';
import {CatColor} from 'game/gameobjects/Cat';

export class Countdown extends Container {
    private bg: Sprite;
    private circle: Sprite;
    private label: Text;

    constructor(x: number, y: number, public color: CatColor, public countdownTime: number = 5, public zeroDisplay: string = 'GO') {
        super(x, y);
        this.build();
    }

    private build(): void {
        const gfx = this.addChild(new PIXI.Graphics()) as PIXI.Graphics;
        gfx.beginFill(0, 0.25);
        gfx.drawRect(0, 0, this.app.width, this.app.height);
        gfx.endFill();

        this.bg = this.addChild(new Sprite(0, 0, gfx.generateTexture(this.app.renderer, this.app.resolution))) as Sprite;

        gfx.clear();
        gfx.beginFill(0xffffff);
        gfx.drawCircle(100, 100, 100);
        gfx.endFill();

        this.circle = this.addChild(new Sprite(this.app.width * 0.5, this.app.height * 0.5, gfx.generateTexture(this.app.renderer, this.app.resolution))) as Sprite;
        this.circle.anchor.set(0.5, 0.5);

        gfx.destroy();
        this.removeChild(gfx);

        this.label = this.circle.addChild(new Text(0, 0, '5', Fonts.STAG_SANS_BLACK, 130, Colours.getPrimary(this.color))) as Text;
        this.label.anchor.set(0.5, 0.5);

        this.circle.scale.set(0, 0);
        this.alpha = 0;
    }

    public show(delay: number = 0): void {
        this.visible = true;
        Animator.to(this, 0.3, { delay: delay, alpha: 1, ease: Sine.easeOut }).then(() => {
            Animator.to(this.circle.scale, 0.3, { x: 1, y: 1, ease: Back.easeOut });
        });
    }

    public countdown(): Promise<{}> {
        return Time.count(this.countdownTime, this.onTimeUpdate, this);
    }

    protected onTimeUpdate(currentTime: number): void {
        if (currentTime > 0) {
            Animator.to(this.circle.scale, 0.2, { x: 1.15, y: 1.15, ease: Sine.easeOut, yoyo: true, repeat: 1 })
            Time.wait(0.075).then(() => {
                this.label.text = currentTime === 0 ? this.zeroDisplay : currentTime.toString();
            });
        } else {
            Animator.to(this.circle.scale, 0.4, { delay:0.1, x: 0, y: 0, ease: Back.easeIn })
        }
    }

    public hide(): void {
        if (this.circle.scale.x === 1) {
            Animator.to(this.circle.scale, 0.2, { x: 0, y: 0, ease: Back.easeIn }).then(() => {
                Animator.to(this, 0.2, { alpha: 0, ease: Sine.easeIn }).then(() => { this.visible = false; });
            });
        } else {
            Animator.to(this, 0.2, { alpha: 0, ease: Sine.easeIn }).then(() => { this.visible = false; });
        }
    }
}