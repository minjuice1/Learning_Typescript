// tuple type : 위치까지 고려한 구체적인 타입지정 가능
// tuple안에 옵션표시는 맨 뒤에 있는 인자만 적용 가능
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var 멍멍 = ['dog', true];
function 함수08() {
    var x = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        x[_i] = arguments[_i];
    }
    console.log(x);
}
function 함수08_1(a, b) {
    console.log([a, b]);
}
함수08(1, 'ddd');
함수08_1(2, 'ㅇㅇㅇ');
var arr = [1, 2, 3];
var arr2 = __spreadArray([4, 5], arr, true);
// (숙제1) 여러분이 최근에 사먹은 음식의 1. 이름 2. 가격 3. 맛있는지여부를 array 자료에 담아보고 타입지정까지 해보십시오.
var 녹차 = ['동서녹차', 4000, true];
var 녹차arr = ['동서녹차', 4000, true, false, true, true, false, true];
function 함수() {
    var rest = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        rest[_i] = arguments[_i];
    }
    console.log(rest);
}
함수('string', true, 1000, 123, 234, 'aa');
// (숙제4) 다음과 같은 문자/숫자 분류기 함수를 만들어보십시오.
function 숙제4함수() {
    var rest = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        rest[_i] = arguments[_i];
    }
    var result = [[], []];
    rest.forEach(function (a) {
        if (typeof a === 'string') {
            result[0].push(a);
        }
        else if (typeof a === 'number') {
            result[1].push(a);
        }
    });
    return console.log(result);
}
숙제4함수('b', 5, 6, 8, 'a');
