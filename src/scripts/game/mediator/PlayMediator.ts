import { INotification } from 'bolt/interfaces';

import { BaseMediator } from 'game/mediator/BaseMediator';
import { Play } from 'game/state/Play';
import { Notifications } from 'game/utils';

export class PlayMediator extends BaseMediator {
    public static MEDIATOR_NAME: string = 'PlayMediator';

    public onRegister(): void {
    }
    public listNotificationInterests(): string[] {
        return [
            Notifications.GAME_CONNECTED,
            Notifications.START_COUNTDOWN,
            Notifications.PLAYER_SWIPE,
            Notifications.RESTART_GAME
        ]
    }

    public handleNotification(note: INotification) {
        const name: string = note.getName();
        const body: any = note.getBody();

        switch (name) {
            case Notifications.PLAYER_SWIPE:
                this.game.inputSwipe(body.playerNum, body.percent);
                break;
            case Notifications.START_COUNTDOWN:
                this.game.startCountdown();
                break;
            case Notifications.RESTART_GAME:
                this.game.restartGame();
                break;
        }
    }

    public gameOver():void{
        this.sendNotification(Notifications.GAME_OVER);
    }

    public sendInitCountdown(): void {
        this.sendNotification(Notifications.INIT_COUNTDOWN);
    }

    get numPlayers() {
        return this.appModel.numPlayers;
    }

    get game(): Play {
        return this._viewComponent as Play;
    }
}