import {Text, Container, Sprite} from 'lightning/display';
import {Resources, Colours, Fonts} from 'common/utils';
export class TextButton extends Container {
    private bg: Sprite;
    private colorBg: Sprite;
    private label: Text;

    private _text: string;
    public enabled: boolean = true;

    constructor(x, y, text: string, public color: "pink" | "blue" | "green" | "orange", autoSetColor: boolean = false, public buttonWidth: number = 342.5) {
        super(x, y);
        this._text = text;
        this.build();

        if (autoSetColor) {
            this.setColor(this.color);
        }
    }

    protected build(): void {
        this.bg = this.addChild(new Sprite(0, 0, Resources.UI_SPRITESHEET.id, 'button_background.png')) as Sprite;
        this.bg.anchor.set(0.5, 0.5);
        this.bg.width = this.buttonWidth;
        this.bg.scale.y = this.bg.scale.x;
        this.bg.x = this.bg.y = 2 * this.bg.scale.x;

        const gfx = this.addChild(new PIXI.Graphics()) as PIXI.Graphics;
        gfx.beginFill(0xffffff);
        gfx.drawRect(0, 0, this.buttonWidth - 6 * this.bg.scale.x, this.bg.height - 5 * this.bg.scale.x); 
        gfx.endFill();

        this.colorBg = this.addChild(new Sprite(0, 0, gfx.generateTexture(this.app.renderer, 1))) as Sprite;
        this.colorBg.anchor.set(0.5, 0.5);
        this.colorBg.tint = 0x666666;

        this.label = this.addChild(new Text(0, 0, this._text.toUpperCase(), Fonts.STAG_SANS_BLACK, 24 * this.app.resolution, 0xffffff)) as Text;
        this.label.resolution = this.app.resolution;
        this.label.anchor.set(0.5, 0.5);

        this.removeChild(gfx);
        gfx.destroy();
    }

    public down(): void {
        this.colorBg.x = this.colorBg.y = this.label.x = this.label.y = 2* this.bg.scale.x;
        this.bg.visible = false;
    }

    public up(selected: boolean = false) {
        if (selected) {
            this.enabled = false;
        }
        this.colorBg.x = this.colorBg.y = this.label.x = this.label.y = 0;
        this.bg.visible = true;
    }

    public setColor(color: "pink" | "blue" | "green" | "orange"): void {
        this.color = color;
        this.colorBg.tint = Colours.getPrimary(this.color);
    }

    get text(): string {
        return this._text;
    }
}