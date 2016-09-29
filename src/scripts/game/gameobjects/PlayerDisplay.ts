import {Animator} from 'bolt/utils';
import {Colours, Resources, Fonts} from 'common/utils';
import {Container, Text, Sprite} from 'lightning/display';
import {CatColor} from 'game/gameobjects/Cat';

export class PlayerDisplay extends Container {
    private static LABEL_X: number = 0;
    private static LABEL_Y: number = 150;

    private gfx: PIXI.Graphics;
    private colorBg:Sprite;
    private bg: Sprite;
    private label: Text;
    private avatar: Sprite;
    private labelContainer: Container;

    constructor(x: number, y: number, public color: CatColor, public playerNum: number) {
        super(x, y);
        this.build();
    }

    private build(): void {
        this.avatar = this.addChild(new Sprite(0, 0, Resources.UI_SPRITESHEET.id, this.color + '_cat.png')) as Sprite;
        this.avatar.anchor.set(0.5, 0.5);

        this.labelContainer = this.addChild(new Container(PlayerDisplay.LABEL_X, PlayerDisplay.LABEL_Y)) as Container;

        this.bg = this.labelContainer.addChild(new Sprite(2, 2, Resources.UI_SPRITESHEET.id, 'button_background.png')) as Sprite;
        this.bg.anchor.set(0.5, 0.5);

        const gfx = this.labelContainer.addChild(new PIXI.Graphics()) as PIXI.Graphics;
        gfx.beginFill(Colours.getPrimary(this.color));
        gfx.drawRect(0, 0, 336, 75);
        gfx.endFill();
        this.colorBg = this.addChild(new Sprite(0, 0, gfx.generateTexture(this.app.renderer, this.app.resolution))) as Sprite;
        this.colorBg.anchor.set(0.5, 0.5);
       
        this.labelContainer.removeChild(gfx);
        gfx.destroy();

        this.label = this.labelContainer.addChild(new Text(0, 0, 'PLAYER ' + this.playerNum + ' CONNECTED', Fonts.STAG_SANS_BLACK, 24, 0xffffff)) as Text;
        this.label.anchor.set(0.5, 0.5);

        this.avatar.scale.set(0, 0);
        this.labelContainer.y += 150;
    }

    public show(): void {
        Animator.to(this.avatar.scale, .3, { x: 1, y: 1, ease: Back.easeOut});
        Animator.to(this.labelContainer, .3, { x: PlayerDisplay.LABEL_X, y: PlayerDisplay.LABEL_Y, ease: Sine.easeOut, delay: .3 });
    }
}