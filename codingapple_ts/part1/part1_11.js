// name 속성에 타입지정
var Person1 = /** @class */ (function () {
    function Person1(a) {
        this.name = a;
        this.age = 20;
    }
    return Person1;
}());
var Person2 = /** @class */ (function () {
    // park을 default parameter로 지정
    function Person2(a) {
        if (a === void 0) { a = "park"; }
        this.name = a;
        this.age = 20;
    }
    return Person2;
}());
// constructor 함수는 return 타입지정을 하면 안됨.
var Car = /** @class */ (function () {
    function Car(a, b) {
        this.model = a;
        this.price = b;
    }
    Car.prototype.tax = function () {
        return this.price / 10;
    };
    return Car;
}());
var car1 = new Car("소나타", 3000);
console.log(car1);
console.log(car1.tax());
// 숙제 2
var Word = /** @class */ (function () {
    function Word() {
        var param = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            param[_i] = arguments[_i];
        }
        var numbers = [];
        var strings = [];
        param.forEach(function (i) {
            if (typeof i === "string") {
                strings.push(i);
            }
            else {
                numbers.push(i);
            }
        });
        this.num = numbers;
        this.str = strings;
    }
    return Word;
}());
var obj = new Word("kim", 3, 5, "park");
console.log(obj.num);
console.log(obj.str);
