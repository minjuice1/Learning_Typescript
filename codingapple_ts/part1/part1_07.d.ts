declare type 숙제2 = {
    color?: string;
    size: number;
    readonly position: number[];
};
declare let 숙제2타입테스트: 숙제2;
declare type 숙제3 = {
    name: string;
    phone: number;
    email: string;
};
declare let 숙제3고객정보테스트: 숙제3;
declare type 숙제4 = {
    name: string;
    phone: number;
    email: string;
};
declare type Adult = {
    adult: boolean;
};
declare type extend = 숙제4 & Adult;
declare let 숙제4테스트: extend;
