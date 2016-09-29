import {INotification} from 'bolt/interfaces';

import {BaseMediator} from 'game/mediator/BaseMediator';
import {Splash} from 'game/state/Splash';
import {Notifications} from 'game/utils';

export class SplashMediator extends BaseMediator {
    public static MEDIATOR_NAME: string = 'SplashMediator';

    public onRegister(): void {
        console.log('hi')
    }
    public listNotificationInterests(): string[] {
        return [
            Notifications.GAME_CONNECTED,
            Notifications.PLAYER_CONNECTED
        ]
    }

    public handleNotification(note: INotification) {
        const name: string = note.getName();
        const body: any = note.getBody();

        switch (name) {
            case Notifications.GAME_CONNECTED:
                this.updateGameId();
                break;
            case Notifications.PLAYER_CONNECTED:
                this.updatePlayers(body);
                break;
        }
    }

    public updateGameId(): void {
        this.splash.setGameId(this.appModel.gameId);
    }

    public updatePlayers(playerNum: number): void {
        this.splash.setPlayers(playerNum);
    }

    get name(): string {
        return SplashMediator.MEDIATOR_NAME;
    }

    get splash(): Splash {
        return this._viewComponent as Splash;
    }
}