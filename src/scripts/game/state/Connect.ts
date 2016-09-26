import {State} from 'lightning/display';

export class Connect extends State {
    public init(): void {
        console.log('connect init!')
    }

    public preload(): void {
        console.log('connect preload')
    }

    public build(): void {

    }

    public update(): void {
    }

    public shutdown(): void {
        console.log('connect shutdown')
    }
}