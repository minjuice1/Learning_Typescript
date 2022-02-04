//숙제 2

type 숙제2 = {
	color?: string;
	size: number;
	readonly position: number[];
};

let 숙제2타입테스트: 숙제2 = {
	size: 123,
	position: [1, 2, 3],
};

// 숙제 3

type 숙제3 = {
	name: string;
	phone: number;
	email: string;
};

let 숙제3고객정보테스트: 숙제3 = {
	name: "kim",
	phone: 123,
	email: "abc@naver.com",
};

// 숙제 4

type 숙제4 = {
	name: string;
	phone: number;
	email: string;
};

type Adult = { adult: boolean };

type extend = 숙제4 & Adult;

let 숙제4테스트: extend = {
	name: "kim",
	phone: 123,
	email: "abc@naver.com",
	adult: false,
};
