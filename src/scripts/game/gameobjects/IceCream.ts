import {Container, Sprite} from 'lightning/display';
import {Resources} from '../utils';
import {CatColor} from './Cat';
import {Animator, Time} from 'bolt/utils';

export class IceCream extends Container {
    public totalPieces:number;
    public remainingPieces:number;
    public topPiece: Sprite;
    public stack: Sprite[];

    constructor(x: number = 0, y: number = 0, public color: CatColor, public stackHeight: number) {
        super(x, y);

        this.build();
    }
    
    // public methods
    public drop():void{
        const piece = this.stack.shift();
        this.remainingPieces = this.stack.length;
        Animator.to(piece.scale, 0.3, {x:0, y:0}).then(()=>{
            this.removeChild(piece);
        });
        this.animateDrop();
    }

    // private methods
    protected build(): void {
        this.stack = [];

        let ypos = 0, 
        piece:Sprite;

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

    protected animateDrop():void{
        Animator.to(this, 0.2, {y:"+=25", ease:Sine.easeIn})
    }
}