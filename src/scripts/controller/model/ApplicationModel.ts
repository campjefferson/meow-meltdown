import {Model} from 'bolt/mvc';

export class ApplicationModel extends Model {
    public static MODEL_NAME: string = 'ApplicationModel';
    public playerNum:number = -1;
    public gameId:string = null;
    public gamesList:string[] = null;

    get name(): string {
        return ApplicationModel.MODEL_NAME;
    }
}