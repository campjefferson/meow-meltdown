import {ApplicationMediator} from './mediator/ApplicationMediator';
import {PIXIApplication} from 'lightning/core';
import {Time} from 'bolt/utils';
import {Menu} from './state/Menu';
import {Connect} from './state/Connect';

export class KDApplication extends PIXIApplication {
    protected createMediator(): void {
        this.mediator = new ApplicationMediator(this);
    }

    protected addStates(): void {
        this.state.add(Menu, 'menu');
        this.state.add(Connect, 'connect');
        this.state.start('menu');
    }
}