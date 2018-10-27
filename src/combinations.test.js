const { expect } = require('chai');
const { permutator } = require('./combinations');

describe('permutator', () => {
  const myArr = [1, 2, 3];
  const expectedResult = [
    [1, 2, 3],
    [1, 3, 2],
    [2, 1, 3],
    [2, 3, 1],
    [3, 1, 2],
    [3, 2, 1],
  ];

  it(`должна возвращать для массива ${myArr} комбинации \n${expectedResult.join('\n')}`, () => {
    const res = permutator(myArr);
    expect(res).to.eql(expectedResult, `${res} !== ${expectedResult}`);
  });
});
