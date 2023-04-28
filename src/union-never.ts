// union
const arr7: (string | boolean)[] = [];
arr7.push(false);
arr7.push('');

let liveName: string | number;
liveName = 'bruce';
liveName = 99;
// liveName = false

// never happens
if (typeof liveName === 'string') {
  // liveName.split(); // let liveName: never
}

// 強制斷言
let liveName2 = 999;
// .... api result data transforms
// let liveName3 = liveName2 as string; // convert the expression to 'unknown' first.
let liveName3 = liveName2 as unknown as string;
