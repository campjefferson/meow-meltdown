import {PIXIApplication} from 'lightning/core';
import {Time} from 'bolt/utils';
import {ApplicationModel} from 'game/model/ApplicationModel';
import {ApplicationMediator} from 'game/mediator/ApplicationMediator';
import {Play, Splash} from 'game/state';

export class KDGame extends PIXIApplication {
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