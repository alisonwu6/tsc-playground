// Array
const arr1 = [1, 2, 3];
const arr2 = [1, 2, '3'];

const arr3: number[] = [];
const arr4: Array<string> = [];

const arr5: (string | boolean)[] = [];
arr5.push(false);
arr5.push('');

// Tuple
const tu1: [number, string, boolean] = [999, 'bruce', false];
const tu2: [number, number][] = [
  [11, 22],
  [33, 44],
];
