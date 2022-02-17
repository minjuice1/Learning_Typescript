class Custom {
  // private, protected 붙이면 class {} 안에서만 사용가능.
  private a = 10;
  protected b = 10;
}

class NewCustom extends Custom {
  // private : extends된 class는 사용불가능, 자식들 사용불가능 (Property 'a' is private and only accessible within class 'Custom')
  // protected : extends된 class는 사용가능, 자식들 사용불가능

  doThis() {
    this.b = 20;
  }
}

let 고객 = new Custom();
let 새고객 = new NewCustom();
console.log(고객);
console.log(새고객);

class StaticEX {
  static x = 10; // static 키워드 붙이면 부모 class에 직접 부여됨 (자식에게 안물려줌)
  y = 20; // 자식만 사용 가능.

  // private / protected / public + static 가능
}

class NewStaticEX extends StaticEX {

}

let 자식 = new StaticEX();
console.log(자식);
console.log(자식.y);
// static은 자식에게 물려주지 않기 때문에 불러오지 못한다.
// console.log(자식.x);

// static을 불러오고 싶을 경우
console.log(StaticEX.x);
// 위의 class StaticEx에서 만든 변수들은 원래 자식들만 가져다 쓸 수 있기 때문에
// 당연히 부모 (StaticEx)에서 자식(y)을 불러낼 수 없음.
// console.log(StaticEX.y);

// extends를 할 경우, static은 불러올 수 없다.
let 새자식 = new NewStaticEX();
console.log(새자식);


// Q. static 이런걸 언제 씁니까

// 주로 class 안에 간단한 메모를 하거나, 기본 설정값을 입력하거나

// class로 부터 생성되는 object가 사용할 필요가 없는 변수들을 만들어놓고 싶을 때 사용합니다. 

////////////////////활용예시//////////////////////////////
  

class Info {
  protected skill = 'js';
  intro = this.skill + '전문가입니다'; // Info {skill: 'js', intro: 'js전문가입니다'}
}

class NewInfo extends Info {
  Info.skill = 'java';
  intro = this.skill + '전문가입니다';
}

let 철수 = new Info();
console.log(철수);

let 영희 = new NewInfo();
console.log(영희);


////////////////////////숙제//////////////////////////////////


// (숙제1) 다음 x, y, z 속성의 특징을 설명해보십시오.

class HwOne {
  private static x = 10;
  public static y = 20;
  protected z = 30;
}

// private static : extends된 class는 사용불가능, 자식들 사용불가능, class에 직접 부여됨 (자식에게 안물려줘서 불러오지 못함), 내부 수정만 됨
// public static : class {} 외에서도 사용 가능, class에 직접 부여됨 (자식에게 안물려줘서 불러오지 못함), 내부 외부 수정 가능
// protected : extends된 class는 사용가능, 자식들 사용불가능. 부모에서 불러와야 됨.

// private, protected 붙이면 class {} 안에서만 사용가능.
// private : extends된 class는 사용불가능, 자식들 사용불가능 (Property 'a' is private and only accessible within class 'Custom')
// protected : extends된 class는 사용가능, 자식들 사용불가능
// static 키워드 붙이면 부모 class에 직접 부여됨 (자식에게 안물려줌)
// static은 자식에게 물려주지 않기 때문에 불러오지 못한다.


// (숙제2) x 속성에 숫자를 더해주는 함수가 필요합니다.

class HwTwo {
  private static x = 10;
  public static y = 20;

  static addOne(a: number) {
    HwTwo.x += a
  }

  static printX() {
    console.log(HwTwo.x);
  }
}
HwTwo.addOne(3) //이렇게 하면 x가 3 더해져야함
HwTwo.printX()  //이렇게 하면 콘솔창에 x값이 출력되어야함
HwTwo.addOne(4) //이렇게 하면 x가 4 더해져야함
HwTwo.printX()  //이렇게 하면 콘솔창에 x값이 출력되어야함

// (숙제3) 이런거 어떻게 만들게요

class Square {
  constructor(public width: number, public height: number, public color: string) {

  }
  draw(){
    let a = Math.random();
    let square = `<div style="position:relative; 
      top:${a * 400}px; 
      left:${a * 400}px; 
      width:${this.width}px; 
      height : ${this.height}px; 
      background:${this.color}"></div>`;
    document.body.insertAdjacentHTML( 'beforeend', square );
  }
}

let 네모 = new Square(40, 40, 'blue');
네모.draw()
네모.draw()
네모.draw()
네모.draw()