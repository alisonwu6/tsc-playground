// Function Generics 泛型 `<>`

// T -> type
// This is useful for creating reusable functions that can be used with different types of objects.
function print<T>(data: T) {
  // let name: T;
  console.log(data);
}

// to avoid creating the same logic functions
// function print(data: string) {
//   console.log(data);
// }

// function print(data: number) {
//   console.log(data);
// }

// function print(data: boolean) {
//   console.log(data);
// }

// 使用
print<string>('bruce');
print<number>(99);
print<boolean>(true);
