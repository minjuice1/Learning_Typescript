declare function 기본넘버함수<MyType>(x: MyType[]): MyType;
declare let a: number;
declare let b: string;
interface LengthCheck {
    length: number;
}
declare function 다른넘버함수<MyType extends LengthCheck>(x: MyType): number;
declare let c: number;
declare function Hw07One<MyType extends string | string[]>(x: MyType): void;
interface Animal07 {
    name: string;
    age: number;
}
declare let data: string;
declare function Hw07Two<Type>(x: string): Type;
declare let result: Animal07;
declare class Person<T> {
    name: T;
    constructor(d: T);
}
declare let d: Person<string[]>;
