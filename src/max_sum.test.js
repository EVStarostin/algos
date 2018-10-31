const { expect } = require('chai');
const { getMaxSum } = require('./max_sum');

describe('getMaxSum', () => {
  const myArr = [2, 3, -8, -1, 2, 4, -2, 3];
  const expectedResult = 7;

  it(`должна возвращать для массива ${myArr} максимальную сумму фрагмента ${expectedResult}`, () => {
    const res = getMaxSum(myArr);
    expect(res).to.be.equal(expectedResult, `${res} !== ${expectedResult}`);
  });
});
