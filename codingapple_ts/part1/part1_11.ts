// name 속성에 타입지정

class Person1 {
	name;
	age;
	constructor(a: string) {
		this.name = a;
		this.age = 20;
	}
}

class Person2 {
	name;
	age;
	// park을 default parameter로 지정
	constructor(a = "park") {
		this.name = a;
		this.age = 20;
	}
}

// constructor 함수는 return 타입지정을 하면 안됨.

class Car {
	model: string;
	price: number;

	constructor(a: string, b: number) {
		this.model = a;
		this.price = b;
	}

	tax(): number {
		return this.price / 10;
	}
}

let car1 = new Car("소나타", 3000);
console.log(car1);
console.log(car1.tax());

// 숙제 2

class Word {
	num;
	str;

	constructor(...param: (string | number)[]) {
		let numbers: number[] = [];
		let strings: string[] = [];

		param.forEach((i) => {
			if (typeof i === "string") {
				strings.push(i);
			} else {
				numbers.push(i);
			}
		});

		this.num = numbers;
		this.str = strings;
	}
}

let obj = new Word("kim", 3, 5, "park");
console.log(obj.num);
console.log(obj.str);
