const { binarySearch } = require('./src/binary_search');

const myList = [1, 3, 5, 7, 9];

const res1 = binarySearch(myList, 3);
console.log(res1);
const res2 = binarySearch(myList, -1);
console.log(res2);
