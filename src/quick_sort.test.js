const { expect } = require('chai');
const { quickSort } = require('./quick_sort');

describe('quickSort', () => {
  const myArr = [10, 5, 2, 3];
  const sortedArr = [2, 3, 5, 10];

  it(`должна возвращать для массива ${myArr} отсортированный массив ${sortedArr}`, () => {
    const res = quickSort(myArr);
    expect(res).to.eql(sortedArr, `${res} !== ${sortedArr}`);
  });
});
