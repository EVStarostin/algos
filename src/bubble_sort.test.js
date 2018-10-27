const { expect } = require('chai');
const { bubbleSort } = require('./bubble_sort');

describe('bubbleSort', () => {
  const myArr = [5, 1, 4, 2, 8];
  const sortedArr = [1, 2, 4, 5, 8];

  it(`должна возвращать для массива ${myArr} отсортированный массив ${sortedArr}`, () => {
    const res = bubbleSort(myArr);
    expect(res).to.eql(sortedArr, `${res} !== ${sortedArr}`);
  });
});
