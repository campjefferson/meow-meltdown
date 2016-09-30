import {PIXIApplication} from 'lightning/core';
import {Time} from 'bolt/utils';

import {ApplicationMediator} from 'controller/mediator/ApplicationMediator';
import {ApplicationModel} from 'controller/model/ApplicationModel';
import {Splash} from 'controller/state/Splash';
import {Play} from 'controller/state/Play';

export class KDController extends PIXIApplication {
    protected createMediator(): void {
        this.model = new ApplicationModel();
        this.mediator = new ApplicationMediator(this);
    }

    protected addStates(): void {
        this.state.add(Splash, 'splash');
        this.state.add(Play, 'play');
        this.state.start('splash');
    }
}