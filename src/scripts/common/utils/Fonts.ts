export interface IFont {
    fontFamily: string;
    fontWeight: number;
}

export class Fonts {
    public static STAG_SANS_BOLD: IFont = { fontFamily: 'Stag Sans Bold', fontWeight: 700 };
    public static STAG_SANS_BLACK: IFont = { fontFamily: 'Stag Sans Black', fontWeight: 900 };
}