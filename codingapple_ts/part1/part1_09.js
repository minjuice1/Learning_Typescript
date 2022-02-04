//methods 안에 타입지정하기
var 회원정보 = {
    name: "kim",
    age: 30,
    plusOne: function (x) {
        return x + 1;
    },
    changeName: function () {
        console.log("안녕");
    },
};
회원정보.plusOne(1);
회원정보.changeName();
var cutZero = function (x) {
    var result = x.replace(/^0+/, "");
    return result;
};
console.log(cutZero("0하하하ㅏ"));
var removeDash = function (a) {
    var result = a.replace(/-/g, "");
    return parseFloat(result);
};
console.log(removeDash("010-123-234-"));
// 숙제 3
function 전체함수(a, func1, func2) {
    var result = func1(a);
    var result2 = func2(result);
    console.log(result2);
}
전체함수("010-1111-2222", cutZero, removeDash);
