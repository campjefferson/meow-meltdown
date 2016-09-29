import io from 'socket.io-client';
import {Time} from 'bolt/utils';

import {KDGame} from 'game/KDGame';
import {BaseMediator} from 'game/mediator/BaseMediator';
import {Notifications} from 'game/utils';

export class ApplicationMediator extends BaseMediator {
    public static MEDIATOR_NAME: string = 'ApplicationMediator';
    public socket;

    public onRegister(): void {
        this.socket = io.connect('http://localhost:4000');
        this.socket.on('game_connected', (event) => { this.handleSocketEvent('game_connected', event) });
        this.socket.on('player_connected', (event) => { this.handleSocketEvent('player_connected', event) });
        this.socket.emit('game_connect');
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
                Time.wait(1).then(()=>{
                    this.kdApplication.state.to('play');
                })
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