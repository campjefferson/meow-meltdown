import { INotification } from 'bolt/interfaces';
import { BaseMediator } from 'controller/mediator/BaseMediator';
import { KDController } from 'controller/KDController';
import { Notifications } from 'controller/utils';

export class ApplicationMediator extends BaseMediator {
    public static MEDIATOR_NAME: string = 'ApplicationMediator';
    public socket;

    public onRegister(): void {
        // this.socket = io.connect('http://localost:4000');
        this.socket = io.connect('https://meow-meltdown.herokuapp.com');

        this.socket.on('controller_connected', (event) => { this.handleSocketEvent('controller_connected', event) });
        this.socket.on('games_list', (event) => { this.handleSocketEvent('games_list', event) });
        this.socket.on('start_game', (event) => { this.handleSocketEvent('start_game', event) });
        this.socket.on('game_over', (event) => { this.handleSocketEvent('game_over', event) });
        this.socket.on('restart_game', (event) => { this.handleSocketEvent('restart_game', event) });
        this.socket.on('start_countdown', (event) => { this.handleSocketEvent('start_countdown', event) });

        this.socket.emit('controller_connect');
    }

    public listNotificationInterests(): string[] {
        return [
            Notifications.REQUEST_GAMES_LIST,
            Notifications.RECEIVED_GAMES_LIST,
            Notifications.CONNECT_TO_GAME,
            Notifications.CONNECTED_TO_GAME,
            Notifications.PLAYER_SWIPE,
            Notifications.PLAYER_START_GAME,
            Notifications.PLAYER_RESTART_GAME,
            Notifications.START_GAME
        ]
    }

    public handleNotification(note: INotification) {
        const name: string = note.getName();
        const body: any = note.getBody();

        switch (name) {
            case Notifications.REQUEST_GAMES_LIST:
                this.requestGamesList();
                break;
            case Notifications.CONNECT_TO_GAME:
                this.connectToGame(body);
                break;
            case Notifications.PLAYER_SWIPE:
                this.sendSwipe(body);
                break;
            case Notifications.PLAYER_START_GAME:
                this.sendPlayerStartGame();
                break;
            case Notifications.PLAYER_RESTART_GAME:
                this.sendPlayerRestartGame();
                break;
        }
    }

    protected handleSocketEvent(type: string, event: any): void {
        console.log('handleSocketEvent', type, event)
        switch (type) {
            case 'controller_connected':
                this.appModel.gameId = event.gameId;
                this.appModel.playerNum = event.playerNum;
                this.sendNotification(Notifications.CONNECTED_TO_GAME);
                break;
            case 'games_list':
                this.appModel.gamesList = event.list;
                this.sendNotification(Notifications.RECEIVED_GAMES_LIST, this.appModel.gamesList);
                break;
            case 'start_game':
                console.log('start game!');
                this.sendNotification(Notifications.START_GAME);
                break;
            case 'restart_game':
                this.sendNotification(Notifications.RESTART_GAME);
                break;
            case 'start_countdown':
                this.sendNotification(Notifications.START_COUNTDOWN);
                break;
            case 'game_over':
                this.sendNotification(Notifications.GAME_OVER);
                break;
        }
    }

    public requestGamesList(): void {
        this.socket.emit('request_games_list');
    }

    public sendSwipe(percent: number): void {
        this.socket.emit('player_swipe', { player: this.appModel.playerNum, percent: percent });
    }

    public sendPlayerStartGame(): void {
        this.socket.emit('player_start_game');
    }

    public sendPlayerRestartGame(): void {
        console.log('sent restart game')
        this.socket.emit('player_restart_game');
    }

    public connectToGame(gameId: string) {

        console.log('socket emitting controller_connect_to_game', { id: gameId });
        this.socket.emit('controller_connect_to_game', { id: gameId })
    }

    get name(): string {
        return ApplicationMediator.MEDIATOR_NAME;
    }

    get controller(): KDController {
        return this._viewComponent as KDController;
    }
}