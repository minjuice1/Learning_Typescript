var person = { student: true, age: 20 };
function 함수(_a) {
    var student = _a.student, age = _a.age;
    console.log(student, age);
}
함수({ student: true, age: 20 });
// 숙제 1
function 최댓값() {
    var param = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        param[_i] = arguments[_i];
    }
    var result = 0;
    param.forEach(function (i) {
        if (result < i) {
            result = i;
        }
    });
    return result;
}
console.log(최댓값(4, 6, 3, 2));
function 함수2(_a) {
    var user = _a.user, comment = _a.comment, admin = _a.admin;
    console.log(user, comment, admin);
}
함수2({ user: 'kim', comment: [3, 5, 4], admin: false });
function 함수3(_a) {
    var a = _a[0], b = _a[1], c = _a[2];
    console.log(a, b, c);
}
함수3([40, 'wine', false]);
