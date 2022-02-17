var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Custom = /** @class */ (function () {
    function Custom() {
        // private, protected 붙이면 class {} 안에서만 사용가능.
        this.a = 10;
        this.b = 10;
    }
    return Custom;
}());
var NewCustom = /** @class */ (function (_super) {
    __extends(NewCustom, _super);
    function NewCustom() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // private : extends된 class는 사용불가능, 자식들 사용불가능 (Property 'a' is private and only accessible within class 'Custom')
    // protected : extends된 class는 사용가능, 자식들 사용불가능
    NewCustom.prototype.doThis = function () {
        this.b = 20;
    };
    return NewCustom;
}(Custom));
var 고객 = new Custom();
var 새고객 = new NewCustom();
console.log(고객);
console.log(새고객);
var StaticEX = /** @class */ (function () {
    function StaticEX() {
        this.y = 20; // 자식만 사용 가능.
        // private / protected / public + static 가능
    }
    StaticEX.x = 10; // static 키워드 붙이면 부모 class에 직접 부여됨 (자식에게 안물려줌)
    return StaticEX;
}());
var NewStaticEX = /** @class */ (function (_super) {
    __extends(NewStaticEX, _super);
    function NewStaticEX() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return NewStaticEX;
}(StaticEX));
var 자식 = new StaticEX();
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
var 새자식 = new NewStaticEX();
console.log(새자식);
// Q. static 이런걸 언제 씁니까
// 주로 class 안에 간단한 메모를 하거나, 기본 설정값을 입력하거나
// class로 부터 생성되는 object가 사용할 필요가 없는 변수들을 만들어놓고 싶을 때 사용합니다. 
////////////////////활용예시//////////////////////////////
var Info = /** @class */ (function () {
    function Info() {
        this.skill = 'js';
        this.intro = this.skill + '전문가입니다'; // Info {skill: 'js', intro: 'js전문가입니다'}
    }
    return Info;
}());
var NewInfo = /** @class */ (function (_super) {
    __extends(NewInfo, _super);
    function NewInfo() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.skill = 'java';
        _this.intro = _this.skill + '전문가입니다';
        return _this;
    }
    return NewInfo;
}(Info));
var 철수 = new Info();
console.log(철수);
var 영희 = new NewInfo();
console.log(영희);
////////////////////////숙제//////////////////////////////////
// (숙제1) 다음 x, y, z 속성의 특징을 설명해보십시오.
var HwOne = /** @class */ (function () {
    function HwOne() {
        this.z = 30;
    }
    HwOne.x = 10;
    HwOne.y = 20;
    return HwOne;
}());
// private static : extends된 class는 사용불가능, 자식들 사용불가능, class에 직접 부여됨 (자식에게 안물려줘서 불러오지 못함), 내부 수정만 됨
// public static : class {} 외에서도 사용 가능, class에 직접 부여됨 (자식에게 안물려줘서 불러오지 못함), 내부 외부 수정 가능
// protected : extends된 class는 사용가능, 자식들 사용불가능. 부모에서 불러와야 됨.
// private, protected 붙이면 class {} 안에서만 사용가능.
// private : extends된 class는 사용불가능, 자식들 사용불가능 (Property 'a' is private and only accessible within class 'Custom')
// protected : extends된 class는 사용가능, 자식들 사용불가능
// static 키워드 붙이면 부모 class에 직접 부여됨 (자식에게 안물려줌)
// static은 자식에게 물려주지 않기 때문에 불러오지 못한다.
// (숙제2) x 속성에 숫자를 더해주는 함수가 필요합니다.
var HwTwo = /** @class */ (function () {
    function HwTwo() {
    }
    HwTwo.addOne = function (a) {
        HwTwo.x += a;
    };
    HwTwo.printX = function () {
        console.log(HwTwo.x);
    };
    HwTwo.x = 10;
    HwTwo.y = 20;
    return HwTwo;
}());
HwTwo.addOne(3); //이렇게 하면 x가 3 더해져야함
HwTwo.printX(); //이렇게 하면 콘솔창에 x값이 출력되어야함
HwTwo.addOne(4); //이렇게 하면 x가 4 더해져야함
HwTwo.printX(); //이렇게 하면 콘솔창에 x값이 출력되어야함
// (숙제3) 이런거 어떻게 만들게요
var Square = /** @class */ (function () {
    function Square(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }
    Square.prototype.draw = function () {
        var a = Math.random();
        var square = "<div style=\"position:relative; \n      top:".concat(a * 400, "px; \n      left:").concat(a * 400, "px; \n      width:").concat(this.width, "px; \n      height : ").concat(this.height, "px; \n      background:").concat(this.color, "\"></div>");
        document.body.insertAdjacentHTML('beforeend', square);
    };
    return Square;
}());
var 네모 = new Square(40, 40, 'blue');
네모.draw();
네모.draw();
네모.draw();
네모.draw();
