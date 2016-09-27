import {State, Text} from 'lightning/display';
import {Animation} from 'lightning/utils';

import {Fonts, Resources} from '../utils';
import {Cat} from '../gameobjects/Cat';

export class Menu extends State {
    public cat1: Cat;
    public cat2: Cat;
    public cat3: Cat;
    public cat4: Cat;

    public init(): void {
        console.log('menu init!')
    }

    public preload(): void {
        console.log('menu preload')
        this.app.asset.load(Resources.CAT_SPRITESHEET);
    }

    public build(): void {
        this.cat1 = this.addChild(new Cat(this.app.width * 0.2, this.app.height + 5, 'pink')) as Cat;
        this.cat2 = this.addChild(new Cat(this.app.width * 0.4, this.app.height + 5, 'blue')) as Cat;
        this.cat3 = this.addChild(new Cat(this.app.width * 0.6, this.app.height + 5, 'green')) as Cat;
        this.cat4 = this.addChild(new Cat(this.app.width * 0.8, this.app.height + 5, 'orange')) as Cat;
    }

    public update(): void {
        this.updateCats();
    }

    private updateCats():void{
        this.cat1.update();
        this.cat2.update();
        this.cat3.update();
        this.cat4.update();
    }

    public shutdown(): void {
    }
}