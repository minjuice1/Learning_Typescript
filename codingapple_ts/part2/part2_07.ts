// Generic함수 (파라미터로 타입을 입력하는 함수)
// Generic함수의 장점 : 확장성

function 기본넘버함수<MyType>(x: MyType[]) {
  return x[0]
}

let a = 기본넘버함수<number>([4, 2])
let b = 기본넘버함수<string>(['4', '2'])
console.log(a);
console.log(b);

// 변수 c에 제네릭을 해줘도 x-1을 return해주니깐 x가 number인지 string인지 모르기에 에러남.
// function 다른넘버함수<AnotherType>(x: AnotherType) {
//   return x - 1;
// }

// 타입파라미터 제한두기
// extends를 추가해줘서 AnotherType이 (파라미터로 받아오는 x가) 우측에 있는 속성 (number)을 가지고 있는지 체크.
// 커스텀 타입으로도 타입파라미터 제한 가능
interface LengthCheck {
  length : number
}

function 다른넘버함수<MyType extends LengthCheck>(x: MyType) {
  return x.length
}

let c = 다른넘버함수<string>('100')
console.log(c);

// (숙제1) 문자를 집어넣으면 문자의 갯수, array를 집어넣으면 array안의 자료 갯수를 콘솔창에 출력해주는 함수는 어떻게 만들까요? 

function Hw07One<MyType extends string | string[]>(x: MyType) {
  return console.log(x.length);
}

Hw07One<string>('hello');
Hw07One<string[]>( ['kim', 'park']);

// (숙제2) Animal 이라는 타입이 있습니다.

interface Animal07 {
  name: string;
  age: number
}

let data = '{"name" : "dog", "age" : 1}'

function Hw07Two<Type>(x: string) :Type {
  return JSON.parse(x);
}

let result = Hw07Two<Animal07>(data);
console.log(result)

// (숙제3) class를 수정해봅시다.

class Person<T> {
  name;
  constructor(d: T){
    this.name = d;
  }
}
let d = new Person<string[]>(['어쩌구']);
console.log(d.name) //string[] 타입이 되었넹 

