// function helloWorld(text: string) {
//   console.log(text);
// }
// function helloWorld2(text: number) {
//   console.log(text);
// }
// helloWorld('bruce');
// helloWorld2(999);

// T = type
function helloWorld<T, U>(text: T, text2: U): U {
  let data: T = text;
  let data2: U = text2;
  console.log(data, data2);
  return data2;
}
helloWorld<string, number>('bruce', 999);
helloWorld<number, boolean>(100, true);
