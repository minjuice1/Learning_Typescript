// Generic함수 (파라미터로 타입을 입력하는 함수)
// Generic함수의 장점 : 확장성
function 기본넘버함수(x) {
    return x[0];
}
var a = 기본넘버함수([4, 2]);
var b = 기본넘버함수(['4', '2']);
console.log(a);
console.log(b);
function 다른넘버함수(x) {
    return x.length;
}
var c = 다른넘버함수('100');
console.log(c);
// (숙제1) 문자를 집어넣으면 문자의 갯수, array를 집어넣으면 array안의 자료 갯수를 콘솔창에 출력해주는 함수는 어떻게 만들까요? 
function Hw07One(x) {
    return console.log(x.length);
}
Hw07One('hello');
Hw07One(['kim', 'park']);
var data = '{"name" : "dog", "age" : 1}';
function Hw07Two(x) {
    return JSON.parse(x);
}
var result = Hw07Two(data);
console.log(result);
// (숙제3) class를 수정해봅시다.
var Person = /** @class */ (function () {
    function Person(d) {
        this.name = d;
    }
    return Person;
}());
var d = new Person(['어쩌구']);
console.log(d.name); //string[] 타입이 되었넹 
