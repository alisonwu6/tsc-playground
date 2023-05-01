// --[BEGIN] interface
// interface Card<T> {
//   title: string;
//   desc: T;
// }

// function printCardInfo<TT>(desc: TT): Card<TT> {
//   const data: Card<TT> = {
//     title: 'Bruce',
//     desc,
//   };
//   return data;
// }

// console.log(printCardInfo<number>(1129));

// --[BEGIN] class
interface CarProps<T> {
  name: T;
}

class Car<TT> implements CarProps<TT> {
  name: TT;
  constructor(value: TT) {
    this.name = value;
  }
}

const car = new Car<string>("Bruce's Car");
console.log(car);
