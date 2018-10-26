const { expect } = require('chai');
const { recursiveFactorial } = require('./recursive_factorial');

describe('recursiveFactorial', () => {
  it('должна возвращать для 3! число 6', () => {
    const res = recursiveFactorial(3);
    expect(res).to.equal(6);
  });
});
