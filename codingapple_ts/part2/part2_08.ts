
// tuple type : 위치까지 고려한 구체적인 타입지정 가능
// tuple안에 옵션표시는 맨 뒤에 있는 인자만 적용 가능

let 멍멍 : [string, boolean?] = ['dog', true]

function 함수08(...x :[number, string]){
  console.log(x);
}

function 함수08_1(a: number, b: string){
  console.log([a, b]);
}
함수08(1, 'ddd');
함수08_1(2, 'ㅇㅇㅇ');

let arr = [1,2,3];
let arr2 :[number, number, ...number[]] = [4,5, ...arr];

// (숙제1) 여러분이 최근에 사먹은 음식의 1. 이름 2. 가격 3. 맛있는지여부를 array 자료에 담아보고 타입지정까지 해보십시오.

let 녹차 :[string, number, boolean] = [ '동서녹차', 4000, true ] 

// (숙제2) 이렇게 생긴 자료는 타입지정 어떻게 해야할까요?
type Arr = [string, number, ...boolean[]]
let 녹차arr :Arr = ['동서녹차', 4000, true, false, true, true, false, true]

// (숙제3) 함수에 타입지정을 해보도록 합시다.
type 함수타입 = [string, boolean, ...(string|number)[]]

function 함수(...rest: 함수타입) {
  console.log(rest)
}
함수('string', true, 1000, 123, 234, 'aa');

// (숙제4) 다음과 같은 문자/숫자 분류기 함수를 만들어보십시오.

function 숙제4함수(...rest: (string|number)[]) {
  let result : [string[], number[]] = [[], []];

  rest.forEach((a)=> {
    if(typeof a === 'string') {
      result[0].push(a)
    } else if (typeof a === 'number') {
      result[1].push(a)
    }
  })

  return console.log(result);
}

숙제4함수('b', 5, 6, 8, 'a')