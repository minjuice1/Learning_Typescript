import {Part2Car, Part2Bike} from './part2_06-1'
import {ObjFunction} from './part2_06-2'

// (숙제1) Car 그리고 Bike 타입을 만들었는데 너무 길어요 
let car: Part2Car = {wheel: 4, model : 'sony'}
console.log(car);

// (숙제2) 너무 자주만들어 쓰는 함수가 하나 있습니다
let 함수 : ObjFunction = function(a) {
  console.log(a);
}

함수({hello: 'world'})

// (숙제3) 타입 중복이 너무 많이 발생합니다.
namespace WildDog {
  export type Part2Dog = string;
}

namespace HomeDog {
  export interface Part2Dog {name : string};
}

let dog1 :WildDog.Part2Dog = 'bark';
let dog2 :HomeDog.Part2Dog = { name : 'paw' };

console.log(dog1);
console.log(dog2);
