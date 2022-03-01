declare class Person1 {
    name: string;
    age: number;
    constructor(a: string);
}
declare class Person2 {
    name: string;
    age: number;
    constructor(a?: string);
}
declare class Car {
    model: string;
    price: number;
    constructor(a: string, b: number);
    tax(): number;
}
declare let car1: Car;
declare class Word {
    num: number[];
    str: string[];
    constructor(...param: (string | number)[]);
}
declare let obj: Word;
