// -- ts
function get(a: number, b: string, c: boolean) {
  return a + b;
}
get(99, '', true);

// -- 可選的參數
function setUser(name: string, age?: string) {
  if (typeof age === 'string') {
    return age.split('');
  }
}

// -- return type
function getNum(): number {
  return 100;
}

// -- type
type Info = {
  name: string;
  age: number;
};

function createUserInfo(info: Info) {
  // console.log(info.age);
}

// -- never (timeout or error)
function getUserData(): never {
  throw new Error('error');
}

// -- void (static)
function hello() {
  console.log('hello');
}

// -- Constructor Functions 構建函式 (`new`)
type CardObj = {
  name: string;
};

type CardCreator = {
  new (name: string): CardObj;
};

// function car() {
//   this.name = '';
// }
// const c1 = new car();

function createCard(cardCreator: CardCreator) {
  console.log('createCard', new cardCreator('bruce'));
  return new cardCreator('bruce');
}

// -- return [], settings for avoiding union types
function getArr() {
  // return [0, 1, 'bruce'];  // to avoid union type, see next line
  // return [0, 1, 'bruce'] as const; // or next line
  return [0, 1, 'bruce'] as [number, number, string]; // using tuple
}

const [id, age, userName] = getArr(); // avoid union type check getArr()
