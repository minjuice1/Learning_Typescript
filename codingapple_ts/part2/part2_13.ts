
3 > 1 ? console.log('맞음') : console.log('아님');

// T의 타입이 string이냐? 맞으면 string 아니면 unknown
type Age13<T> = T extends string ? string : unknown;

let a13: Age13<string>
let a13_1: Age13<number>

// Q : 파라미터로 array 타입 입력하면 array 첫 자료의 타입을 남김
// - array 타입말고 다른거 입력하면 any 남김
type FirstItem<T> = T extends any[] ? T[0] : any

let age13_1: FirstItem<string[]>
let age13_2: FirstItem<string>

// 조건문에서 쓸 수 있는 infer 키워드 : 타입을 왼쪽에서 추출해준다. 
// 함수를 넣으면 함수의 return 타입만 뽑고 싶을 때 사용.
type Person13<T> = T extends (infer R) ? R : unknown;
                              // 왼쪽 T의 타입을 뽑아서 변수 R에 넣어줘라.
type 타입추출<T> = T extends ( ()=> infer R) ? R : unknown;
type a = 타입추출< ()=> void > // T는 ()=>void 형태로 되고, infer는 그 형태에서 타입만 뽑기때문에 void만 뽑힘. 그래서 a는 void만 남음.

// 근데 함수의 return 타입을 알고싶을 때 쓰는 함수는 따로 있다. => ReturnType이라는 기본 함수 사용.
type b = ReturnType< () => void >


// (숙제1) 타입 파라미터로
// 1. array 타입을 입력하면
// 2. array의 첫 자료가 string이면 string 타입을 그대로 남겨주고 
// 3. array의 첫 자료가 string이 아니면 unknown 을 남겨주려면 어떻게 타입을 만들어놔야할까요?

type Age13_1<T> = T extends [string, ...any] ? T[0] : unknown;

let age1 :Age13_1<[string, number]>;
let age2 :Age13_1<[boolean, number]>; 

// (숙제2) 함수의 파라미터의 타입을 뽑아주는 기계를 만들어보십시오. 

type 타입뽑기<T> = T extends (x: infer R) => any ? R : any;

let type13_1: 타입뽑기<(x :number) => void> //이러면 number가 이 자리에 남음
let type13_2: 타입뽑기<(x :string) => void> //이러면 string이 이 자리에 남음