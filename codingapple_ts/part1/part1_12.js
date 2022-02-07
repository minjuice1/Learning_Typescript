// interface는 중복선언 가능, type은 중복선언 불가능
// type은 중복선언 가능한것 처럼 보이지만, 막상 사용하면 에러가 남.
// 따라서 interface를 쓰는 것이 더 안전?하다.
// 아니면 일반 변수는 type을 해주고, object는 interface를 사용하는 것도 나쁘지 않음.
var 학생 = { name: "kim" };
var 선생 = { name: "kim", age: 20 };
var 상품 = {
    brand: "Samsung",
    serialNumber: 1360,
    model: ["TV", "phone"],
};
var 장바구니 = [
    { product: "청소기", price: 7000 },
    { product: "삼다수", price: 800 },
];
var 오브젝트 = {
    plus: function (a, b) {
        return a + b;
    },
    minus: function (a, b) {
        return a - b;
    },
};
