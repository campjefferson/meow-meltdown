import {ILoaderResource} from 'lightning/core';

export class Resources {
    public static CAT_SPRITESHEET: ILoaderResource = {
        id: 'cat',
        url: 'assets/img/spritesheet/cat.json',
        hdurl: 'assets/img/spritesheet/cat@2x.json'
    }

    public static UI_SPRITESHEET: ILoaderResource = {
        id: 'ui',
        url: 'assets/img/spritesheet/ui.json',
        hdurl: 'assets/img/spritesheet/ui@2x.json'
    }
}