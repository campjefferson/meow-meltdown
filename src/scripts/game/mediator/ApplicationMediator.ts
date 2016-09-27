import {BaseMediator} from './BaseMediator';
import {KDGame} from '../KDGame';
import {Notifications} from '../utils';
import io from 'socket.io-client';

export class ApplicationMediator extends BaseMediator {
    public static MEDIATOR_NAME: string = 'ApplicationMediator';
    public socket;

    public onRegister(): void {
        this.socket = io.connect('http://localhost:4000');
        this.socket.on('game_connected', (event) => { this.handleSocketEvent('game_connected', event) });
        this.socket.emit('game_connect');
    }

    protected handleSocketEvent(type: string, event: any): void {
        switch (type) {
            case 'game_connected':
                this.appModel.gameId = event.id;
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