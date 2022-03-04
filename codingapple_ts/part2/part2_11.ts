
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

// (숙제1) 다음 자료의 타입을 지정해보십시오. 

interface obj11Type {
  [key: string] : string | number
}

let obj11: obj11Type = {
  model : 'k5',
  brand : 'kia',
  price : 6000,
  year : 2030,
  date : '6월',
  percent : '5%',
  dealer : '김차장',
}

// (숙제2) 다음 object 자료의 타입을 interface 써서 만들어보십시오.

interface obj11_1Type {
  'font-size': number,
  [key: string] : number | obj11_1Type,
}

let obj11_1: obj11_1Type = {
  'font-size' : 10,
  'secondary' : {
    'font-size' : 12,
    'third' : {
      'font-size' : 14
    }
  }
}
