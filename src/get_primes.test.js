const { expect } = require('chai');
const { getPrimes } = require('./get_primes');

describe('getPrimes', () => {
  const n = 10;
  const primes = [1, 2, 3, 5, 7];

  it(`должна возвращать для n = ${n} массив ${primes}`, () => {
    const res = getPrimes(n);
    expect(res).to.eql(primes, `${res} !== ${primes}`);
  });
});
