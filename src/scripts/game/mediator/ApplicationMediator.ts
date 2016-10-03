import io from 'socket.io-client';
import {Time} from 'bolt/utils';
import {INotification} from 'bolt/interfaces';

import {KDGame} from 'game/KDGame';
import {BaseMediator} from 'game/mediator/BaseMediator';
import {Notifications} from 'game/utils';

export class ApplicationMediator extends BaseMediator {
    public static MEDIATOR_NAME: string = 'ApplicationMediator';
    public socket;

    public onRegister(): void {
        this.socket = io.connect('http://localhost:4000');
        // events to handle
        this.socket.on('game_connected', (event) => { this.handleSocketEvent('game_connected', event) });
        this.socket.on('player_connected', (event) => { this.handleSocketEvent('player_connected', event) });
        this.socket.on('player_swipe', (event) => { this.handleSocketEvent('player_swipe', event) });
        this.socket.on('start_game', (event) => { this.handleSocketEvent('start_game', event) });
        this.socket.on('start_countdown', (event) => { this.handleSocketEvent('start_countdown', event) });

        // connect game
        this.socket.emit('game_connect');
    }

    public listNotificationInterests(): string[] {
        return [
            Notifications.INIT_COUNTDOWN
        ]
    }

    public handleNotification(note: INotification) {
        const name: string = note.getName();
        const body: any = note.getBody();

        switch (name) {
            case Notifications.INIT_COUNTDOWN:
                this.socket.emit('init_countdown');
                break;
        }
    }

    protected handleSocketEvent(type: string, event: any): void {
        console.log('handleSocketEvent', type, event);
        switch (type) {
            case 'game_connected':
                this.appModel.gameId = event.id;
                this.sendNotification(Notifications.GAME_CONNECTED, event.id);
                break;
            case 'player_connected':
                this.appModel.numPlayers = event.player;
                this.sendNotification(Notifications.PLAYER_CONNECTED, event.player);
                break;
            case 'player_swipe':
                this.sendNotification(Notifications.PLAYER_SWIPE, { playerNum: event.player, percent: event.percent });
                break;
            case 'start_game':
                this.sendNotification(Notifications.START_GAME);
                break;
            case 'start_countdown':
                this.sendNotification(Notifications.START_COUNTDOWN);
                break;
        }
    }

    get name(): string {
        return ApplicationMediator.MEDIATOR_NAME;
    }

    get kdApplication(): KDGame {
        return this._viewComponent as KDGame;
    }
}