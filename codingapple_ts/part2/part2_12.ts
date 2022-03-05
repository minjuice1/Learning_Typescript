
// let obj12 = {name: 'kim', age : 25}
// console.log(Object.keys(obj12));

interface Person12 {
  // age: number,
  // name: string
  [key: string] : number
}

// keyof 연산자는 object 타입에 사용하면 object 타입이 가지고 있는 모든 key값을 union type으로 합쳐서 내보내준다.

type Personkeys = keyof Person12; // string | number
let a12 : Personkeys = 'age' // 가능
let b12 : Personkeys = 'nameList' // 불가능 (name, age 라는 key만 갖고있기 때문에) 

type Car12 = {
  color: boolean,
  model : boolean,
  price : boolean | number
}

// [자유작명 in keyof 타입파라미터 ] : 원하는 타입]
// in 키워드는 왼쪽이 오른쪽에 들어있냐

type TypeChanger12 <MyType> = {
  [key in keyof MyType] :string
}

type 새로운타입 = TypeChanger12<Car12>

let obj12 :새로운타입 = {
  color: 'red',
  model : 'kia',
  price : '300',
}

console.log(obj12)

// (숙제1) 다음 타입을 변환기를 돌려보십시오.

type Bus = {
  color : string,
  model : boolean,
  price : number
}

type BusTypeChanger <MyType> = {
  [key in keyof MyType] : string | number
}


type NewBus = BusTypeChanger<Bus>

// (숙제2) 이런 변환기는 어떻게 만들어야할까요?

type BusTypeChanger2 <MyType, T> = {
  [key in keyof MyType] : T;
}

type NewBus2 = BusTypeChanger2<Bus, boolean>
type NewBus3 = BusTypeChanger2<Bus, string[]>
