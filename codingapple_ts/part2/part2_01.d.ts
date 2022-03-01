declare let person: {
    student: boolean;
    age: number;
};
declare function 최댓값(...param: number[]): number;
interface UserType {
    user: string;
    comment: number[];
    admin: boolean;
}
declare function 함수2({ user, comment, admin }: UserType): void;
declare type 타입 = (number | string | boolean)[];
declare function 함수3([a, b, c]: 타입): void;
