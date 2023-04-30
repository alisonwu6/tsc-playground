// Rest Operator and Destructure

// --[BEGIN] 多個參數 -> func
// function calculate(...numArr: number[]) {
// console.log(numArr);
// }
// calculate(1, 2, 3, 4, 5, 99, 3213)
// --[END]

// --[BEGIN]
function calculate(a: number, b: number, c: number) {
  console.log('a', a);
  console.log('b', b);
  console.log('c', c);
}
const numbers = [1, 2, 3] as const;
calculate(...numbers);
// --[END]
