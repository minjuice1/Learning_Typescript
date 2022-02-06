var 제목 = document.querySelector("#title");
// 1. !=
if (제목 != null) {
    제목.innerHTML = "반가워요";
}
// 2. instanceof 연산자 (가장 많이 사용)
if (제목 instanceof Element) {
    제목.innerHTML = "반가워요";
}
// 3. as 키워드 (되도록이면 사용 X)
var 제목2 = document.querySelector("#title");
제목2.innerHTML = "반가워요";
// 4. object에 옵셔널체이닝 추가
if ((제목 === null || 제목 === void 0 ? void 0 : 제목.innerHTML) != undefined) {
    제목.innerHTML = "반가워요";
}
// 5. tsconfig.json 에서 코드 수정
// "strictNullChecks": true를 false로 바꾸거나 삭제
// a태그는 Element가 아닌 HTMLAnchorElement 타입으로
// 타입스크립트에서 쓸 수 있는 HTML 타입들은
// Element, HTMLElement, HTMLAnchorElement 등이 있음.
// 숙제 1
var 버튼 = document.querySelector("#button");
// 옵셔널도 narrowing으로 인정해줘서 이렇게 사용해도 됨.
버튼 === null || 버튼 === void 0 ? void 0 : 버튼.addEventListener("click", function () { });
var 이미지 = document.querySelector("#image");
if (이미지 instanceof HTMLImageElement) {
    이미지.src = "new.jpg";
}
// 숙제 2
var 링크 = document.querySelector(".link");
if (링크 instanceof HTMLAnchorElement) {
    링크.href = "https://kakao.com";
}
