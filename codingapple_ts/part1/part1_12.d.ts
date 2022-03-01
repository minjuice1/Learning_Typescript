interface 학생타입 {
    name: string;
}
interface 선생타입 extends 학생타입 {
    age: number;
}
declare type Animal = {
    name: string;
};
declare type Cat = {
    age: number;
} & Animal;
declare let 학생: 학생타입;
declare let 선생: 선생타입;
interface items {
    brand: string;
    serialNumber: number;
    model: string[];
}
declare let 상품: items;
interface shopping {
    product: string;
    price: number;
}
declare let 장바구니: shopping[];
interface Newshopping extends shopping {
    card: boolean;
}
interface 플마 {
    plus: (a: number, b: number) => number;
    minus: (a: number, b: number) => number;
}
declare let 오브젝트: 플마;
