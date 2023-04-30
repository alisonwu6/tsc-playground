// unknown?
let name1: unknown = 'bruce';
name1 = 999;

// Assertion using as?
let name2: unknown = 'bruce2';
let name3 = name2 as string;

// 斷言應用
async function getData1() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const data = (await res.json()) as {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  };
  console.log('data', data);
}
// getData1()

// any and unknown
// unknown is safer than any
const liveStatus = false;

// [begin] --- any is more dangerous because it won't show some alert.
// function getLiveName() {
//   let liveName: any;
//   if (liveStatus) {
//     liveName = 'Wu Live';
//   } else {
//     liveName = null;
//   }
//   return liveName;
// }

// const result = getLiveName();
// result.split();
// [end] --- any is more dangerous because it won't show some alert.

function getLiveName() {
  let liveName: unknown;
  if (liveStatus) {
    liveName = 'Wu Live';
  } else {
    liveName = null;
  }
  return liveName;
}

const result = getLiveName();
if (typeof result === 'string') {
  result.split('');
}
