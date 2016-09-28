import {INotification} from 'bolt/interfaces';
import {BaseMediator} from './BaseMediator';
import {Splash} from '../state/Splash';
import {Notifications} from '../utils';

export class SplashMediator extends BaseMediator {
    public static MEDIATOR_NAME: string = 'SplashMediator';

    public listNotificationInterests():string[]{
        return [
            Notifications.RECEIVED_GAMES_LIST
        ]
    }

    public handleNotification(note:INotification){
        const name:string = note.getName();
        const body:any = note.getBody();
        
        switch(name){
            case Notifications.RECEIVED_GAMES_LIST:
            console.log('received', body)
                this.updateGamesList();
            break;
        }
    }

    public requestGamesList():void{
        this.sendNotification(Notifications.REQUEST_GAMES_LIST);
    }

    public updateGamesList():void{
        this.splash.refreshGamesList(this.appModel.gamesList);
    }

    public getGamesList():string[]{
        return this.appModel.gamesList;
    }

    get name(): string {
        return SplashMediator.MEDIATOR_NAME;
    }

    get splash(): Splash {
        return this._viewComponent as Splash;
    }
}