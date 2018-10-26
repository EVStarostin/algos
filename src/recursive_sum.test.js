const { expect } = require('chai');
const { sum } = require('./recursive_sum');

describe('sum', () => {
  const myArr = [2, 4, 6];

  it(`должна возвращать для массива ${myArr} число 12`, () => {
    const res = sum(myArr);
    expect(res).to.equal(12);
  });
});
