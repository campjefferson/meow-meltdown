import {Container, Sprite} from 'lightning/display';
import {Animator, Time} from 'bolt/utils';
import {Resources} from 'common/utils';
import {CatColor} from 'game/gameobjects/Cat';

export class IceCream extends Container {
    public totalPieces: number;
    public remainingPieces: number;
    public topPiece: Sprite;
    public stack: Sprite[];

    public finished: boolean = false;

    constructor(x: number = 0, y: number = 0, public color: CatColor, public stackHeight: number) {
        super(x, y);

        this.build();
    }

    // public methods
    public drop(): void {
        if (this.finished) {
            return;
        }
        const piece = this.stack.shift();
        this.remainingPieces = this.stack.length;
        Animator.to(piece.scale, 0.3, { x: 0, y: 0 }).then(() => {
            this.removeChild(piece);
        });
        this.animateDrop();

        if (this.remainingPieces === 0) {
            this.finished = true;
        }
    }

    // private methods
    protected build(): void {
        this.stack = [];

        let ypos = 0,
            piece: Sprite;

        while (ypos < this.stackHeight) {
            piece = this.addChild(new Sprite(0, -ypos, Resources.CAT_SPRITESHEET.id, this.color + '/' + 'ice_cream_stack.png')) as Sprite;
            piece.anchor.set(0.5, 1);
            this.stack.push(piece);
            ypos += 25;
        }
        piece = this.addChild(new Sprite(0, -ypos, Resources.CAT_SPRITESHEET.id, this.color + '/' + 'ice_cream_top.png')) as Sprite;
        piece.anchor.set(0.5, 1);

        this.stack.push(piece);
        this.totalPieces = this.stack.length;
        this.remainingPieces = this.stack.length;
    }

    public reset():void{
        this.stack.forEach((piece)=>{
            this.removeChild(piece);
        });
        this.build();
    }

    protected animateDrop(): void {
        Animator.to(this, 0.2, { y: "+=25", ease: Sine.easeIn })
    }
}