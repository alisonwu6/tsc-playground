// --[BEGIN] extends 一般用法
// -- interface
interface A {
  name: string;
}
interface B extends A {}

const b: B = { name: '' };

// --class
class AA {}
class BB extends AA {}
// --[END]

// --[BEGIN] 在條件判斷上的extends
type T1 = string extends string ? string : number;
const a: T1 = '';
// -- 子介面
type T2 = B extends A ? string : number;
const aa: T2 = '';
// --[END]

// --[BEGIN] 誰能滿足誰？須確認D能涵蓋C的所有屬性
interface C {
  name: string;
}
interface D {
  name: string;
  age: number;
}
type T3 = D extends C ? string : number;
const aaa: T3 = '';
// --[END]

// --[BEGIN] 基本泛型用法
// type TT1 = 'bruce' extends 'bruce' ? string : number
type TT1<T> = T extends 'bruce' ? T : number
type res = TT1<'aaa'>
// --[END]

// --[BEGIN] Union泛型用法
// type TT2 = 'bruce' | 'bruce2' extends 'bruce' ? string : number

type TT3<T> = T extends 'bruce' ? string : number
type R1 = TT3<'bruce' | 'bruce2'>
// 1. 'bruce' -> T = string
// 2. 'bruce2' -> T = number
// 3. type R1 = string | number
// --[END]

// --[BEGIN] never 是所有類型的子類別
type N1 = never extends 'bruce' ? string : number

type N2<T> = T extends 'bruce' ? string : number
type R3 = N2<never> // 被當成一個空的union
// --[END] 

// --[BEGIN] [T] 等同於上方 `Union泛型用法` TT2
type TT4<T> = [T] extends ['bruce'] ? string : number
type R2 = TT4<'bruce' | 'bruce2'>
// --[END]