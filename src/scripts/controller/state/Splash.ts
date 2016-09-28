import {State, Text, Container} from 'lightning/display';
import {Animation} from 'lightning/utils';
import {SplashMediator} from '../mediator/SplashMediator';

import {Fonts, Resources} from '../utils';

export class Splash extends State {
    public splashText: Text;
    protected mediator:SplashMediator;

    private listContainer:Container = null;

    public init(): void {
        console.log('splash init!');
        this.mediator = new SplashMediator(this);
    }

    public preload(): void {
        console.log('splash preload')
        //this.app.asset.load(Resources.CAT_SPRITESHEET);
    }

    public build(): void {
        this.listContainer = this.add.container(this.app.width * 0.5, this.app.height * 0.5);
        this.refreshGamesList(this.mediator.getGamesList());
    }

    public refreshGamesList (gamesList:string[]): void { 
        if (!this.listContainer || !gamesList){
            return;
        }
        console.log('refreshGames', gamesList);
        this.listContainer.removeChildren();

        gamesList.forEach(this.addGameButton, this);
        this.listContainer.pivot.set(this.listContainer.width / this.app.resolution, this.listContainer.height / this.app.resolution);
        
    }

    protected addGameButton(gameId:string):void{
        this.listContainer.addChild(new Text(0, this.listContainer.children.length * 50, gameId, Fonts.STAG_SANS_BLACK, 36, 0));
    }

    public update(): void {
    }

    public shutdown(): void {
    }
}