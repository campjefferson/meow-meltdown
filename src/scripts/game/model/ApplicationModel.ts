import {Model} from 'bolt/mvc';

export class ApplicationModel extends Model {
    public static MODEL_NAME: string = 'ApplicationModel';

    public hasCopy: boolean = false;
    public hasFlightData: boolean = false;

    get name(): string {
        return ApplicationModel.MODEL_NAME;
    }
}