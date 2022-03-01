declare type member = {
    name: string;
    age: number;
    plusOne: (x: number) => number;
    changeName: () => void;
};
declare let 회원정보: {
    name: string;
    age: number;
    plusOne(x: number): number;
    changeName: () => void;
};
declare type 제로제거 = (a: string) => string;
declare type 대시제거 = (a: string) => number;
declare let cutZero: 제로제거;
declare let removeDash: 대시제거;
declare function 전체함수(a: string, func1: 제로제거, func2: 대시제거): void;
