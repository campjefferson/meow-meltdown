import {Animator} from 'bolt/utils';
import {Colours, Resources, Fonts} from 'common/utils';
import {Container, Text, Sprite} from 'lightning/display';
import {CatColor} from 'game/gameobjects/Cat';

export class Ribbon extends Container {
    private bg: Sprite;
    private label: Text;
    private positionLabel: Text;
    private labelContainer: Container;

    constructor(x: number, y: number, public color: CatColor) {
        super(x, y);
        this.build();
    }

    private build(): void {
        const gfx = this.addChild(new PIXI.Graphics()) as PIXI.Graphics;
        gfx.beginFill(Colours.getDark(this.color));
        gfx.drawCircle(0, 0, 75);
        gfx.endFill();

        this.bg = this.addChild(new Sprite(0, 0, gfx.generateTexture(this.app.renderer, this.app.resolution))) as Sprite;
        gfx.destroy();
        this.removeChild(gfx);

        this.pivot.set(75, 75);

        this.labelContainer = this.addChild(new Container(75, 75)) as Container;

        this.label = this.labelContainer.addChild(new Text(0, 0, '1', Fonts.STAG_SANS_BLACK, 73, 0xffffff)) as Text;
        this.positionLabel = this.labelContainer.addChild(new Text(0, 0, 'ST', Fonts.STAG_SANS_BLACK, 26, 0xffffff)) as Text;

        this.scale.set(0, 0);
    }

    public setPosition(position: number) {
        let posLabel: string;
        switch (position) {
            case 1:
                posLabel = 'ST';
                break;
            case 2:
                posLabel = 'ND';
                break;
            case 3:
                posLabel = 'RD';
                break;
            case 4:
                posLabel = 'TH';
                break;
        }

        this.label.text = position.toString();
        this.positionLabel.text = posLabel;

        this.positionLabel.x = this.label.width + 2;
        this.positionLabel.y = this.label.y + 10;

        this.labelContainer.pivot.set(this.label.width, this.label.height * 0.5);

        this.show();
    }

    public show(): void {
        Animator.to(this.scale, .3, { x: 1, y: 1, ease: Back.easeOut });
    }
}