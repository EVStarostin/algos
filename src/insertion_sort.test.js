const { expect } = require('chai');
const { insertionSort } = require('./insertion_sort');

describe('insertionSort', () => {
  const myArr = [5, 8, 2, 1, 3];
  const sortedArr = [1, 2, 3, 5, 8];

  it(`должна возвращать для массива ${myArr} отсортированный массив ${sortedArr}`, () => {
    const res = insertionSort(myArr);
    expect(res).to.eql(sortedArr, `${res} !== ${sortedArr}`);
  });
});
