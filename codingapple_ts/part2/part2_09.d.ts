// 타입정의 보관용 파일

// d.ts 파일 사용 이유 :
// 1. ts파일에 타입정의가 너무 길면 d.ts 파일을 만들어서 간결화.
// 2. 모든 타입을 정리해놓은 레퍼런스용으로 d.ts을 사용하기도 함.

// d.ts파일은 자동으로 글로벌 모듈 아님 => tsconfig.json에 설정

export type AgeType = number;
export interface PersonType {TestName: string}
type TestType = number;