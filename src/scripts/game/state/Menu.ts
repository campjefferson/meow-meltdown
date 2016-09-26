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
        const text1 = this.add.text(100, 100, 'KOODO', Fonts.STAG_SANS_BOLD, 50, 0xffffff);
        const text2 = this.add.text(100, 200, 'KOODO', Fonts.STAG_SANS_BLACK, 50, 0xffffff);
    }

    public update(): void {
    }

    public shutdown(): void {
    }
}