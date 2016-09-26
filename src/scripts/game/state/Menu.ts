import {State, Text} from 'lightning/display';
import {Fonts} from '../utils';

export class Menu extends State {
    public init(): void {
        console.log('menu init!')
    }

    public preload(): void {
        console.log('menu preload')
    }

    public build(): void {
        this.add.text(100, 100, 'KOODO', Fonts.STAG_SANS_BOLD, 50, 0xffffff);
        const spr = new PIXI.Sprite()
    }

    public update(): void {
    }

    public shutdown(): void {
    }
}