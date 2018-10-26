const { expect } = require('chai');
const { recursiveSum } = require('./recursive_sum');

describe('recursiveSum', () => {
  const myArr = [2, 4, 6];

  it(`должна возвращать для массива ${myArr} число 12`, () => {
    const res = recursiveSum(myArr);
    expect(res).to.equal(12);
  });
});
