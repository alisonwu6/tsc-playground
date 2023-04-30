// --[BEGIN] Type Extensions
// type Animal = {
//   name: string;
// };

// type Dog = Animal & {
//   age: number;
// };

// type Cat = Animal;

// let dog: Dog = {
//   name: '',
//   age: 99,
// };

// let cat: Cat = {
//   name: '',
// };
// --[END] Type Extensions

// --[BEGIN] Interface Extensions
// interface Animal {
//   name: string;
// }

// interface Dog extends Animal {}
// let dog: Dog = { name: '' };
// --[END] Interface Extensions


// --[BEGIN] Merge Interfaces (Note: `type` is not allowed)
interface Animal {
  name: string;
}

// merged by using the same name
interface Animal { 
  age: number;
}

let dog: Animal = { name: '', age: 0 };
// --[END] Merge Interfaces
