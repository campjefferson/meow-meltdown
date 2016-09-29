import {State, Text, Container} from 'lightning/display';
import {Animation} from 'lightning/utils';
import {SplashMediator} from '../mediator/SplashMediator';

import {Fonts, Resources} from '../utils';

export class Splash extends State {
    public splashText: Text;
    protected mediator: SplashMediator;

    private listContainer: Container = null;

    public init(): void {
        console.log('splash init!');
        this.mediator = new SplashMediator(this);
    }

    public preload(): void {
        console.log('splash preload')
        //this.app.asset.load(Resources.CAT_SPRITESHEET);
    }

    public build(): void {
        this.listContainer = this.add.container(this.app.width * 0.5, this.app.height * 0.5);
        this.refreshGamesList(this.mediator.getGamesList());
    }

    public refreshGamesList(gamesList: string[]): void {
        if (!this.listContainer || !gamesList) {
            return;
        }
        console.log('refreshGames', gamesList);
        this.listContainer.removeChildren();

        gamesList.forEach(this.addGameButton, this);
        this.listContainer.pivot.set(this.listContainer.width / this.app.resolution, this.listContainer.height / this.app.resolution);

    }

    protected addGameButton(gameId: string): void {
        const txt: Text = new Text(0, this.listContainer.children.length * 50, gameId, Fonts.STAG_SANS_BLACK, 36, 0);
        txt.interactive = true;
        txt.anchor.set(0.5, 0.5);
        txt.on('mousedown', this.onButtonPress, this)
            .on('mouseover', this.onButtonPress, this)
            .on('touchstart', this.onButtonPress, this)

        txt.on('mouseup', this.onButtonRelease, this)
            .on('touchend', this.onButtonRelease, this)

        txt.on('mouseupoutside', this.onButtonReleaseOutside, this)
            .on('touchendoutside', this.onButtonReleaseOutside, this)
            .on('mouseout', this.onButtonReleaseOutside, this)

        this.listContainer.addChild(txt);
    }

    protected onButtonPress(e: Event): void {
        const btn: any = e.target,
            scale = e.type === 'mouseover' ? 1.05 : 1.1,
            txt: Text = (btn as Text);

        txt.style.fill = e.type === 'mouseover' ? 0x666666 : 0xcccccc;
        TweenMax.to(txt.scale, 0.2, { x: scale, y: scale, ease: Sine.easeOut });
    }

    protected onButtonRelease(e: Event): void {
        const btn: any = e.target,
            txt: Text = (btn as Text);
        txt.style.fill = 0x000000;
        TweenMax.to(txt.scale, 0.1, { x: 1, y: 1, ease: Sine.easeIn });

        this.mediator.connectToGame(txt.text);
    }
    protected onButtonReleaseOutside(e: Event): void {
        const btn: any = e.target,
            txt: Text = (btn as Text);
        txt.style.fill = 0x000000;
        TweenMax.to(txt.scale, 0.1, { x: 1, y: 1, ease: Sine.easeIn });
    }

    public update(): void {
    }

    public shutdown(): void {
    }
}