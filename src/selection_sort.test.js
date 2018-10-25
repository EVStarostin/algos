const { expect } = require('chai');
const { selectionSort } = require('./selection_sort');

describe('selectionSort', () => {
  const myArr = [5, 3, 6, 2, 10];
  const sortedArr = [2, 3, 5, 6, 10];

  it(`должна возвращать для массива ${myArr} отсортированный массив ${sortedArr}`, () => {
    const res = selectionSort(myArr);
    expect(res).to.eql(sortedArr, `${res} !== ${sortedArr}`);
  });
});
