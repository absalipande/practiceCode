const m = 4;
const n = 10;

const array = [  [3, 21, 43, 32, 84, 65, 23, 35, 90, 3],
  [65, 1, 79, 6, 55, 34, 3, 38, 62, 21],
  [27, 40, 92, 23, 30, 16, 53, 9, 37, 13],
  [83, 81, 29, 87, 41, 52, 34, 46, 43, 99],
];

if (array.length !== m || array[0].length !== n) {
  console.error('Input array does not have the expected dimensions');
} else {
  for (let i = 0; i < m / 2; i++) {
    const temp = array[i];
    array[i] = array[m - 1 - i];
    array[m - 1 - i] = temp;
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n / 2; j++) {
      const temp = array[i][j];
      array[i][j] = array[i][n - 1 - j];
      array[i][n - 1 - j] = temp;
    }
  }

  console.table(array);
}
