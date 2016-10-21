import { ILoaderResource, ISoundResource } from 'lightning/core';

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

    public static SFX: ISoundResource = {
        id: 'sfx',
        src: 'assets/audio/sprite/sfx',
        extensions: ['ogg', 'webm', 'm4a'],
        sprite: {
            "air_horn": [
                0,
                2768.9795918367345
            ],
            "banana_peel_slip": [
                5000,
                517.8004535147389
            ],
            "fruit_collected": [
                8000,
                1018.1179138321994
            ],
            "meow_cat": [
                12000,
                1251.7233560090694
            ],
            "meow_kitten": [
                16000,
                5000
            ],
            "ship_bell": [
                23000,
                3745.6689342403633
            ],
            "slurp": [
                29000,
                2914.195011337867
            ],
            "slurping_2": [
                34000,
                1212.2902494331101
            ],
            "straw_slurp": [
                38000,
                10193.560090702946
            ],
            "tomcat": [
                51000,
                1978.979591836733
            ]
        }
    }

    public static MUSIC_SPLASH: ISoundResource = {
        id: 'music_splash',
        src: 'assets/audio/sound/music_pinball.ogg',
        volume: 0.4,
        loop: true
    }

    public static MUSIC_GAME: ISoundResource = {
        id: 'music_game',
        src: 'assets/audio/sound/music_pinball_2.ogg',
        volume: 0.3,
        loop: true
    }
}