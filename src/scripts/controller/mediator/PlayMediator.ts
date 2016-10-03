import {INotification} from 'bolt/interfaces';

import {BaseMediator} from 'controller/mediator/BaseMediator';
import {Play} from 'controller/state/Play';
import {Notifications} from 'controller/utils';

export class PlayMediator extends BaseMediator {
    public static MEDIATOR_NAME: string = 'PlayMediator';

    public onRegister(): void {
    }
    public listNotificationInterests(): string[] {
        return [
            Notifications.PLAYER_SWIPE,
            Notifications.START_COUNTDOWN,
            Notifications.START_GAME
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
        }
    }

    public sendSwipe(percent: number) {
        this.sendNotification(Notifications.PLAYER_SWIPE, percent);
    }

    public sendStartGame() {
        this.sendNotification(Notifications.PLAYER_START_GAME);
    }

    get controller(): Play {
        return this._viewComponent as Play;
    }
}