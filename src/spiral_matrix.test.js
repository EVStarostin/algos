const { expect } = require('chai');
const { spiralMatrix } = require('./spiral_matrix');

describe('spiralMatrix', () => {
  const n = 4;
  const expectedResult = [
    ['01', '02', '03', '04'],
    ['12', '13', '14', '05'],
    ['11', '16', '15', '06'],
    ['10', '09', '08', '07'],
  ];

  it(`должна возвращать для n = ${n} спиральную матрицу \n${expectedResult.join('\n')}`, () => {
    const res = spiralMatrix(n);
    expect(res).to.eql(expectedResult, `${res} !== ${expectedResult}`);
  });
});
