// --[BEGIN] Type Extensions
// type Animal11 = {
//   name: string;
// };

// type Dog = Animal11 & {
//   age: number;
// };

// type Cat = Animal11;

// let dog: Dog = {
//   name: '',
//   age: 99,
// };

// let cat: Cat = {
//   name: '',
// };
// --[END] Type Extensions

// --[BEGIN] Interface Extensions
// interface Animal11 {
//   name: string;
// }

// interface Dog extends Animal11 {}
// let dog: Dog = { name: '' };
// --[END] Interface Extensions


// --[BEGIN] Merge Interfaces (Note: `type` is not allowed)
interface Animal11 {
  name: string;
}

// merged by using the same name
interface Animal11 { 
  age: number;
}

let dog: Animal11 = { name: '', age: 0 };
// --[END] Merge Interfaces
