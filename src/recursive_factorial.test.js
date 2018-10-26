const { expect } = require('chai');
const { fact } = require('./recursive_factorial');

describe('fact', () => {
  it('должна возвращать для 3! число 6', () => {
    const res = fact(3);
    expect(res).to.equal(6);
  });
});
