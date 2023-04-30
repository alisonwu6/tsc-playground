//  1. What is object-oriented programming？
// `class`: object of user functions
// name age address
// - add data
// - update data
// - delete data

// 2. how to use class，what is `new` object？
// Design of User Object
class User {
  constructor(userName: string) {
    console.log('before creating User Object');
    this.name = userName;
  }
  // properties
  name: string;
  age: number;
  address: string;

  // functions
  add() {}
  update() {}
  delete() {}
}

const u1 = new User('Ed Sheeran');
const u2 = new User('Sam Smith');
const u3 = new User('Shawn Mendes');

console.log('u1', u1);
console.log('u2', u2);
console.log('u3', u3);
