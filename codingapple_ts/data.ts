// export var a = 10;

// ts는 변수를 생성하면 자동적으로 global 변수 취급 받음.
export {} // import export 있으면 자동으로 로컬 모듈.
let dataA = 10;

// 전역에서 관리하고 싶다면 declare global {}
declare global {
  type Dog = string;
}