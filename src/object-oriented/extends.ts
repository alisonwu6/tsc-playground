// --[BEGIN] extends
// class Animal {
//   name: string;
//   run() {
//     console.log('run...');
//   }
// }
// class Dog extends Animal {
//   run() {
//     console.log('dog run...');
//   }
// }
// class Cat extends Animal {}
// const d1 = new Dog();
// d1.run();
// const c1 = new Cat();
// c1.run();

// --[BEGIN] `constructor` && `super`
// class Animal {
//   name: string;
//   constructor(name1: string) {
//     this.name = name1;
//   }
//   run() {
//     console.log('Animal run()', this.name);
//   }
// }
// class Dog extends Animal {
//   run() {
//     super.run();
//     console.log('Dog run()', this.name);
//   }
// }
// const d1 = new Dog('QQ');
// d1.run();

// --[BEGIN] abstract class
// This function is declared, but not defined. 
// Any class that derives from the class containing this abstract function 
// must provide its own implementation of the function.
abstract class Animal {
  run() {
    console.log('Animal run()');
  }
  abstract hello(): void; // 
}
// const a1 = new Animal();  // ❌ ERROR: Cannot create an instance of an abstract class.

class Dog extends Animal {
  hello() {
    console.log('hello from Dog');
  }
}

const d1 = new Dog();
d1.run();
d1.hello();
