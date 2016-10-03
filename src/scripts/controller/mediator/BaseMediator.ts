import {Mediator, CopyModel} from 'bolt/mvc';
import {ApplicationModel} from 'controller/model/ApplicationModel';

export class BaseMediator extends Mediator {
    public static MEDIATOR_NAME: string = 'BaseMediator';

    public getCopy(groupId: string, itemId: string): string {
        return this.copyModel.getCopy(groupId, itemId);
    }

    public getCopyGroup(groupId: string): any {
        return this.copyModel.getCopyGroup(groupId);
    }

    public get name(): string {
        return this.mediatorName || BaseMediator.MEDIATOR_NAME;
    }

    public get appModel(): ApplicationModel {
        return this.app.retrieveModel(ApplicationModel.MODEL_NAME) as ApplicationModel;
    }

    public get copyModel(): CopyModel {
        return this.app.retrieveModel(CopyModel.MODEL_NAME) as CopyModel;
    }
    
    public get playerNum(): number {
        return this.appModel.playerNum;
    }
}