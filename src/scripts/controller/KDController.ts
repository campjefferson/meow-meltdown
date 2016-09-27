import {ApplicationMediator} from './mediator/ApplicationMediator';
import {PIXIApplication} from 'lightning/core';
import {Time} from 'bolt/utils';
import {Splash} from './state/Splash';

export class KDController extends PIXIApplication {
    protected createMediator(): void {
        this.mediator = new ApplicationMediator(this);
    }

    protected addStates(): void {
        this.state.add(Splash, 'splash');
        this.state.start('splash');
    }
}