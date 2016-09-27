import {BaseMediator} from './BaseMediator';
import {KDApplication} from '../KDApplication';
import {Notifications} from '../utils';

export class ApplicationMediator extends BaseMediator {
    public static MEDIATOR_NAME: string = 'ApplicationMediator';

    get name(): string {
        return ApplicationMediator.MEDIATOR_NAME;
    }

    get kdApplication(): KDApplication {
        return this._viewComponent as KDApplication;
    }
}