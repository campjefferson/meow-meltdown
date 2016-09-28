import {INotification} from 'bolt/interfaces';
import {BaseMediator} from './BaseMediator';
import {KDController} from '../KDController';
import {Notifications} from '../utils';

export class ApplicationMediator extends BaseMediator {
    public static MEDIATOR_NAME: string = 'ApplicationMediator';
    public socket;

    public onRegister(): void {
        this.socket = io.connect('http://localhost:4000');
        this.socket.on('controller_connected', (event) => { this.handleSocketEvent('controller_connected', event) });
        this.socket.on('games_list', (event) => { this.handleSocketEvent('games_list', event) });

        this.requestGamesList();
    }

    public listNotificationInterests():string[]{
        return [
            Notifications.REQUEST_GAMES_LIST,
            Notifications.RECEIVED_GAMES_LIST
        ]
    }

    public handleNotfication(note:INotification){
        const name:string = note.getName();
        const body:any = note.getBody();
        
        switch(name){
            case Notifications.REQUEST_GAMES_LIST:
                this.requestGamesList();
            break;
        }
    }

    protected handleSocketEvent(type: string, event: any): void {
        console.log('handleSocketEvent', type,  event)
        switch (type) {
            case 'controller_connected':
                this.appModel.gameId = event.id;
                break;
             case 'games_list':
                this.appModel.gamesList = event.list;
                this.sendNotification(Notifications.RECEIVED_GAMES_LIST, this.appModel.gamesList);
                break;
        }
    }

    public requestGamesList():void{
        this.socket.emit('request_games_list');
    }

    get name(): string {
        return ApplicationMediator.MEDIATOR_NAME;
    }

    get controller(): KDController {
        return this._viewComponent as KDController;
    }
}