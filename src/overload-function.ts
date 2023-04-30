// Function Overload 函式重載

/**
 * Function overloading is a feature in Typescript that allows you to have 
 * multiple functions with the same name, but different parameters.
 */
function getData(data: string) {
  // ...
}
function getData2(data: number) {
  // ...
}

// overload
type Info2 = {};

function getData(data: string): string[];
function getData(data: number): number;
function getData(data: boolean): boolean;
function getData(data: Info2): Info2;
function getData(data: unknown): unknown {
  console.log();
  if (typeof data === 'string') return [];
  if (typeof data === 'number') return 999;
  // 判斷 Info2
  return false;
}

getData(99);
getData('');
getData(false);

// 函式重載必須與函式內容相符合，否則會出現錯誤提示。函式重載可寫可不寫
// --[BEGIN] 函式重載
function hello2(data: string): string[];
function hello2(data: number): number;
// --[END] 函式重載
function hello2(data: number | string): number | string[] {
  return 999;
}
