import {State, Text, Container} from 'lightning/display';
import {Animation} from 'lightning/utils';
import {Animator, Time} from 'bolt/utils';
import {SplashMediator} from 'controller/mediator/SplashMediator';

import {TextButton} from 'common/ui';
import {Fonts, Resources} from 'common/utils';

export class Splash extends State {
    private static COLOURS: ("pink" | "blue" | "green" | "orange")[] = ["pink", "blue", "green", "orange"];

    public splashText: Text;
    public splashText2: Text;
    protected mediator: SplashMediator;
    private listContainer: Container = null;
    private buttons: { [id: string]: TextButton } = {};

    public init(): void {
        console.log('splash init!');
        this.mediator = new SplashMediator(this);
    }

    public preload(): void {
        console.log('splash preload')
        this.app.asset.load(Resources.UI_SPRITESHEET);
    }

    public build(): void {
        this.splashText = this.addChild(new Text(this.app.width * 0.5, 100, 'MEOW MELTDOWN', Fonts.STAG_SANS_BLACK, 32, 0xffffff)) as Text;
        this.splashText.anchor.set(0.5, 0.5);

        this.splashText2 = this.addChild(new Text(this.app.width * 0.5, 150, 'SELECT A GAME', Fonts.STAG_SANS_BLACK, 24, 0xffffff)) as Text;
        this.splashText2.anchor.set(0.5, 0.5);

        this.listContainer = this.add.container(this.app.width * 0.5, this.app.height * 0.25);
        this.refreshGamesList(this.mediator.getGamesList());
    }

    public refreshGamesList(gamesList: string[]): void {
        if (!this.listContainer || !gamesList) {
            return;
        }
        this.listContainer.removeChildren();
        this.buttons = {};
        gamesList.forEach(this.addGameButton, this);
    }

    public showConnection(gameId: string, playerNum: number): void {
        this.buttons[gameId].setColor(Splash.COLOURS[playerNum - 1]);

        Time.wait(1).then(()=>{this.proceedToGame()});
    }

    public proceedToGame():void{
        Animator.staggerTo([this.splashText, this.splashText2, this.listContainer], 0.5, {x:-500, ease:Back.easeIn}, 0.1).then(()=>{
            this.app.state.to('play');
        })
    }

    protected addGameButton(gameId: string): void {
        //const txt: Text = new Text(0, this.listContainer.children.length * 50, gameId, Fonts.STAG_SANS_BLACK, 36, 0);
        const btn: TextButton = new TextButton(0, this.listContainer.children.length * 85, gameId, 'blue');
        this.buttons[gameId] = btn;
        btn.interactive = true;
        btn.on('mousedown', this.onButtonPress, this)
            .on('touchstart', this.onButtonPress, this)

        btn.on('mouseup', this.onButtonRelease, this)
            .on('touchend', this.onButtonRelease, this)

        btn.on('mouseupoutside', this.onButtonReleaseOutside, this)
            .on('touchendoutside', this.onButtonReleaseOutside, this)

        this.listContainer.addChild(btn);
    }

    protected onButtonPress(e: Event): void {
        const target: any = e.target,
            btn: TextButton = (target as TextButton);
        if (!btn.enabled) {
            return;
        }
        btn.down();
    }

    protected onButtonRelease(e: Event): void {
        const target: any = e.target,
            btn: TextButton = (target as TextButton);
        if (!btn.enabled) {
            return;
        }
        btn.up(true);
        this.mediator.connectToGame(btn.text);
    }

    protected onButtonReleaseOutside(e: Event): void {
        const target: any = e.target,
            btn: TextButton = (target as TextButton);
        if (!btn.enabled) {
            return;
        }
        btn.up(false);
    }

    public update(): void {
    }

    public shutdown(): void {
    }
}