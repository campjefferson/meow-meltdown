export class Colours {
    public static PINK_PRIMARY: number = 0xee2c74;
    public static BLUE_PRIMARY: number = 0x00aedb;
    public static GREEN_PRIMARY: number = 0xd5e04d;
    public static ORANGE_PRIMARY: number = 0xfbaf34;

    public static PINK_BACKGROUND: number = 0xfabbcb;
    public static BLUE_BACKGROUND: number = 0x6ad1e3;
    public static GREEN_BACKGROUND: number = 0xe9ec6b;
    public static ORANGE_BACKGROUND: number = 0xfdd26e;

    public static PINK_DARK: number = 0x672046;
    public static BLUE_DARK: number = 0x002f86;
    public static GREEN_DARK: number = 0x009539;
    public static ORANGE_DARK: number = 0xcf451f;

    public static getPrimary(color: string): number {
        let result: number = Colours.PINK_PRIMARY;
        switch (color) {
            case 'pink':
                result = Colours.PINK_PRIMARY;
                break;
            case 'blue':
                result = Colours.BLUE_PRIMARY;
                break;
            case 'green':
                result = Colours.GREEN_PRIMARY;
                break;
            case 'orange':
                result = Colours.ORANGE_PRIMARY;
                break;
        }
        return result;
    }

    public static getBackground(color: string): number {
        let result: number = Colours.PINK_BACKGROUND;
        switch (color) {
            case 'pink':
                result = Colours.PINK_BACKGROUND;
                break;
            case 'blue':
                result = Colours.BLUE_BACKGROUND;
                break;
            case 'green':
                result = Colours.GREEN_BACKGROUND;
                break;
            case 'orange':
                result = Colours.ORANGE_BACKGROUND;
                break;
        }
        return result;
    }

    public static getDark(color: string): number {
        let result: number = Colours.PINK_DARK;
        switch (color) {
            case 'pink':
                result = Colours.PINK_DARK;
                break;
            case 'blue':
                result = Colours.BLUE_DARK;
                break;
            case 'green':
                result = Colours.GREEN_DARK;
                break;
            case 'orange':
                result = Colours.ORANGE_DARK;
                break;
        }
        return result;
    }
}