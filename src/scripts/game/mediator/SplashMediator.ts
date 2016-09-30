import {INotification} from 'bolt/interfaces';

import {BaseMediator} from 'game/mediator/BaseMediator';
import {Splash} from 'game/state/Splash';
import {Notifications} from 'game/utils';

export class SplashMediator extends BaseMediator {
    public static MEDIATOR_NAME: string = 'SplashMediator';

    private connectionsEnabled: boolean = true;

    public onRegister(): void {
    }
    public listNotificationInterests(): string[] {
        return [
            Notifications.GAME_CONNECTED,
            Notifications.PLAYER_CONNECTED,
            Notifications.START_GAME
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
                if (this.connectionsEnabled) {
                    this.playerConnected(body);
                }
                break;
            case Notifications.START_GAME:
                this.connectionsEnabled = false;
                this.splash.proceedToGame();
                break;
        }
    }

    public updateGameId(): void {
        this.splash.setGameId(this.appModel.gameId);
    }

    public playerConnected(playerNum: number, debug: boolean = false): void {
        if (debug) {
            this.appModel.numPlayers = playerNum;
        }
        this.splash.playerConnected(playerNum);
    }

    get numPlayers() {
        return this.appModel.numPlayers;
    }

    get name(): string {
        return SplashMediator.MEDIATOR_NAME;
    }

    get splash(): Splash {
        return this._viewComponent as Splash;
    }
}