// 在infer之前，補充extends用法 (Array)
// function sliceArr<T>(a: T) {
//   console.log(a.length)
// }

// function sliceArr<T extends Array<number>>(a: T) {
//   console.log(a.length)
// }

// --[BEGIN] infer用法
// var a = 100
// let
type TT2<T> = T extends Array<infer P> ? P : never;
type RR2 = TT1<['bruce', 1]>;
// type RR3 = TT1<number>
// --[END]

// --[BEGIN] function用法
type ParamType<T> = T extends (param1: infer P) => any ? P : never;

type RR3 = ParamType<(a: number) => void>;

// interface UserCard { name: string }
// type R2 = ParamType<(a: UserCard) => void>

// type R3 = ParamType<[]>
// --[END]
