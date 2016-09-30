import {INotification} from 'bolt/interfaces';

import {BaseMediator} from 'game/mediator/BaseMediator';
import {Play} from 'game/state/Play';
import {Notifications} from 'game/utils';

export class PlayMediator extends BaseMediator {
    public static MEDIATOR_NAME: string = 'PlayMediator';

    public onRegister(): void {
    }
    public listNotificationInterests(): string[] {
        return [
            Notifications.GAME_CONNECTED,
            Notifications.PLAYER_SWIPE
        ]
    }

    public handleNotification(note: INotification) {
        const name: string = note.getName();
        const body: any = note.getBody();

        switch (name) {
            case Notifications.PLAYER_SWIPE:
                this.game.inputSwipe(body.playerNum, body.percent); 
                break;
        }
    }

    public sendSwipe(percent:number){
        this.sendNotification(Notifications.PLAYER_SWIPE, percent);
    }

    get numPlayers() {
        return this.appModel.numPlayers;
    }

    get game(): Play {
        return this._viewComponent as Play;
    }
}