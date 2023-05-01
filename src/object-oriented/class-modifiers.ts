// Class modifiers in TypeScript

// modifiers: public(default), private, protected
// public - A public class is visible to any other class.
// protected - A protected class is visible to any class in the same package or any subclasses.
// private - A private class is only visible within the class in which it was declared.

// --[BEGIN]
// class UserInformation {
//   public greeting: string = 'Hello!';
//   private name: string = 'Bruce';
//   protected age: number = 10;
//   getName() {
//     return this.name; // when property is private, use function to return its value instead.
//   }
// }

// class StreamerInformation extends UserInformation {
//   hello() {
//     console.log('StreamerInformation hello()');
//     console.log('* public greeting:', this.greeting);
//     // console.log('* private name:', this.name);
//     console.log('* protected age:', this.age);
//   }
// }

// const uInfo = new StreamerInformation();
// console.log(uInfo.greeting);
// // console.log(uInfo.name); // Property 'name' is private and only accessible within class
// // console.log(uInfo.age); // Property 'age' is protected and only accessible within class
// console.log('uInfo.getName()', uInfo.getName());
// uInfo.hello();
// --[END]

// --[BEGIN] JS原生私有成員寫法 (2020的新功能）  tsconfig: compilerOptions.target: es6 or higher
class UserInformation {
  #name: string = 'Bruce'; // private
  getName() {
    return this.#name;
  }
}

const u = new UserInformation();
console.log(u.getName());
// --[END]
