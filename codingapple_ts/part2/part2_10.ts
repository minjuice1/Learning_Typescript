interface CarType {
  model: string,
  price: number
}

// implements는 class의 타입을 체크하는 용도로 사용함. 할당하는건 아님! (interface에 들어있는 속성을 가지고 있는지 확인만 하는것)
// 그렇기에, class에 있는 타입을 지우고, interface쪽에만 타입을 넣어준다고 반영되는건 아님.
class Car10 implements CarType{
  model;
  price : number = 1000;
  constructor(a : string) {
    this.model = a
  }
}

let 붕붕이 = new Car10 ('morning');
console.log(붕붕이)
