declare class Custom {
    private a;
    protected b: number;
}
declare class NewCustom extends Custom {
    doThis(): void;
}
declare let 고객: Custom;
declare let 새고객: NewCustom;
declare class StaticEX {
    static x: number;
    y: number;
}
declare class NewStaticEX extends StaticEX {
}
declare let 자식: StaticEX;
declare let 새자식: NewStaticEX;
declare class Info {
    protected skill: string;
    intro: string;
}
declare class NewInfo extends Info {
    Info: any;
    skill: string;
    intro: string;
}
declare let 철수: Info;
declare let 영희: NewInfo;
declare class HwOne {
    private static x;
    static y: number;
    protected z: number;
}
declare class HwTwo {
    private static x;
    static y: number;
    static addOne(a: number): void;
    static printX(): void;
}
declare class Square {
    width: number;
    height: number;
    color: string;
    constructor(width: number, height: number, color: string);
    draw(): void;
}
declare let 네모: Square;
