// this

class CarInfo {
  title: string = "Bruce's Car";
  constructor() {
    // this.title = '';
  }
  
  // ❌ Arrow functions in a class can be created as many times as needed.
  // hello = () => {
  //   console.log('this.title', this, this.title);
  // };

  // ✅ Ordinary functions are stored in the prototype of an object
  hello() {
    console.log('this.title', this, this.title);
  }
}

// ✅ 當下真正執行的對象, this = CarInfo
const carInfo = new CarInfo();
carInfo.hello();
carInfo.title = "John's Car";
carInfo.hello();

// this = global (window)
const hello3 = carInfo.hello;
// hello3(); // ❌ ERROR: cannot read properties of undefined (reading 'title')

// --[BEGIN] Testing
const xxxCar = {
  title: "XXX's Car",
  hello3: () => {},
};

xxxCar.hello3 = carInfo.hello;
xxxCar.hello3();
