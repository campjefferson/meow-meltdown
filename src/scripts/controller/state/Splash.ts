import {State, Text} from 'lightning/display';
import {Animation} from 'lightning/utils';

import {Fonts, Resources} from '../utils';

export class Splash extends State {
    public splashText: Text;

    public init(): void {
        console.log('splash init!')
    }

    public preload(): void {
        console.log('splash preload')
        //this.app.asset.load(Resources.CAT_SPRITESHEET);
    }

    public build(): void {
        this.splashText = this.add.text(this.app.width * 0.5, this.app.height * 0.5, 'CONTROLLER', Fonts.STAG_SANS_BLACK, 54, 0x000000);
        this.splashText.anchor.set(0.5, 0.5);

        this.listGames();
        this.refreshGames();
    }

    protected listGames(): void {
        
    }

    protected refreshGames(): void { 

    }

    public update(): void {
    }

    public shutdown(): void {
    }
}