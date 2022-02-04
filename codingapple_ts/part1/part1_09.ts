//methods 안에 타입지정하기

type member = {
	name: string;
	age: number;
	plusOne: (x: number) => number;
	changeName: () => void;
};

let 회원정보 = {
	name: "kim",
	age: 30,
	plusOne(x: number) {
		return x + 1;
	},
	changeName: () => {
		console.log("안녕");
	},
};
회원정보.plusOne(1);
회원정보.changeName();

// 숙제2

type 제로제거 = (a: string) => string;
type 대시제거 = (a: string) => number;

let cutZero: 제로제거 = function (x) {
	let result = x.replace(/^0+/, "");
	return result;
};

console.log(cutZero("0하하하ㅏ"));

let removeDash: 대시제거 = function (a) {
	let result = a.replace(/-/g, "");
	return parseFloat(result);
};

console.log(removeDash("010-123-234-"));

// 숙제 3

function 전체함수(a: string, func1: 제로제거, func2: 대시제거) {
	let result = func1(a);
	let result2 = func2(result);
	console.log(result2);
}
전체함수("010-1111-2222", cutZero, removeDash);
