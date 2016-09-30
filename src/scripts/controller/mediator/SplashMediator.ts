import {INotification} from 'bolt/interfaces';
import {BaseMediator} from './BaseMediator';
import {Splash} from 'controller/state/Splash';
import {Notifications} from 'controller/utils';

export class SplashMediator extends BaseMediator {
    public static MEDIATOR_NAME: string = 'SplashMediator';

    public listNotificationInterests(): string[] {
        return [
            Notifications.RECEIVED_GAMES_LIST,
            Notifications.CONNECT_TO_GAME,
            Notifications.CONNECTED_TO_GAME
        ]
    }

    public handleNotification(note: INotification) {
        const name: string = note.getName();
        const body: any = note.getBody();

        switch (name) {
            case Notifications.RECEIVED_GAMES_LIST:
                this.updateGamesList();
                break;
            case Notifications.CONNECT_TO_GAME:
                //
                break;
            case Notifications.CONNECTED_TO_GAME:
                console.log('controller connected to game ', this.appModel.gameId, ' as player ', this.appModel.playerNum)
                this.splash.showConnection(this.appModel.gameId, this.appModel.playerNum);
                break;
        }
    }

    public requestGamesList(): void {
        this.sendNotification(Notifications.REQUEST_GAMES_LIST);
    }

    public connectToGame(gameId: string): void {
        console.log('attempting to connectto game ', gameId)
        this.sendNotification(Notifications.CONNECT_TO_GAME, gameId);
    }

    public updateGamesList(): void {
        this.splash.refreshGamesList(this.appModel.gamesList);
    }

    public getGamesList(): string[] {
        return this.appModel.gamesList;
    }

    get name(): string {
        return SplashMediator.MEDIATOR_NAME;
    }

    get splash(): Splash {
        return this._viewComponent as Splash;
    }
}