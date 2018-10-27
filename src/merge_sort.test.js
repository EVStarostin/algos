const { expect } = require('chai');
const { mergeSort } = require('./merge_sort');

describe('mergeSort', () => {
  const myArr = [7, 9, 3, 1, 5];
  const sortedArr = [1, 3, 5, 7, 9];

  it(`должна возвращать для массива ${myArr} отсортированный массив ${sortedArr}`, () => {
    const res = mergeSort(myArr);
    expect(res).to.eql(sortedArr, `${res} !== ${sortedArr}`);
  });
});
