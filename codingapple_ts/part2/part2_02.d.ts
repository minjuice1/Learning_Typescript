declare type Car2 = {
    wheel: '4개';
    color: string;
};
declare type Bike = {
    wheel: '2개';
    color: string;
};
declare function F(x: Car2 | Bike): void;
