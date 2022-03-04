
interface User11Type {
  // name, age, location 모두 string일 때, 하나하나 지정해주는거보다 간편하게 쓰는 법
  [key : string] : string | number,
  // name : string,
  // age : string,
  // location : string
}

let User11 :User11Type = {
  name : 'kim',
  age : 20,
  location : 'seoul',
  0 : 'haha',
  1 : 40,
  2 : 'hi'
}

console.log(User11.age);
console.log(User11[2]);


// recursive 하게 타입 만드는 법
interface MyType {
  'font-size': MyType | number,
}

let css :MyType = {
  'font-size' : {
    'font-size' : {
      'font-size' : 14
    }
  }
}