interface 학생타입 {
	name: string;
}

// name이 중복이기에 extends 사용. (interface의 장점! type은 extends 사용 X )
interface 선생타입 extends 학생타입 {
	age: number;
}

// type도 중복되면 복사 가능 (& 기호 (intersection)를 사용)
// intersection type은 복사는 아니고, 두 타입을 전부 만족하는 타입이라는 뜻
type Animal = { name: string };
type Cat = { age: number } & Animal;

// interface는 중복선언 가능, type은 중복선언 불가능
// type은 중복선언 가능한것 처럼 보이지만, 막상 사용하면 에러가 남.
// 따라서 interface를 쓰는 것이 더 안전?하다.
// 아니면 일반 변수는 type을 해주고, object는 interface를 사용하는 것도 나쁘지 않음.

let 학생: 학생타입 = { name: "kim" };
let 선생: 선생타입 = { name: "kim", age: 20 };

// 숙제 1

interface items {
	brand: string;
	serialNumber: number;
	model: string[];
}

let 상품: items = {
	brand: "Samsung",
	serialNumber: 1360,
	model: ["TV", "phone"],
};

// 숙제 2

interface shopping {
	product: string;
	price: number;
}

let 장바구니: shopping[] = [
	{ product: "청소기", price: 7000 },
	{ product: "삼다수", price: 800 },
];

// 숙제 3

interface Newshopping extends shopping {
	card: boolean;
}

// 숙제 4

interface 플마 {
	plus: (a: number, b: number) => number;
	minus: (a: number, b: number) => number;
}

let 오브젝트: 플마 = {
	plus(a, b) {
		return a + b;
	},
	minus(a, b) {
		return a - b;
	},
};
