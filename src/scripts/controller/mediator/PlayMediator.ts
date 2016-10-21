import { INotification } from 'bolt/interfaces';

import { BaseMediator } from 'controller/mediator/BaseMediator';
import { Play } from 'controller/state/Play';
import { Notifications } from 'controller/utils';

export class PlayMediator extends BaseMediator {
    public static MEDIATOR_NAME: string = 'PlayMediator';

    public onRegister(): void {
    }
    public listNotificationInterests(): string[] {
        return [
            Notifications.PLAYER_SWIPE,
            Notifications.START_COUNTDOWN,
            Notifications.START_GAME,
            Notifications.RESTART_GAME,
            Notifications.GAME_OVER
        ]
    }

    public handleNotification(note: INotification) {
        const name: string = note.getName();
        const body: any = note.getBody();

        switch (name) {
            case Notifications.PLAYER_SWIPE:
                break;
            case Notifications.START_COUNTDOWN:
                this.controller.startCountdown();
                break;
            case Notifications.RESTART_GAME:
                this.controller.restartGame();
                break;
            case Notifications.GAME_OVER:
                this.controller.gameOver();
                break;
        }
    }

    public sendSwipe(percent: number) {
        this.sendNotification(Notifications.PLAYER_SWIPE, percent);
    }

    public sendStartGame() {
        this.sendNotification(Notifications.PLAYER_START_GAME);
    }

    public sendRestartGame() {
        this.sendNotification(Notifications.PLAYER_RESTART_GAME);
    }

    get controller(): Play {
        return this._viewComponent as Play;
    }
}