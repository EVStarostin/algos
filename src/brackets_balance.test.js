/* eslint-disable no-unused-expressions */

const { expect } = require('chai');
const { bracketsBalance } = require('./brackets_balance');

describe('bracketsBalance', () => {
  it('должна возвращать true для строки {()}[]', () => {
    const str = '{()}[]';

    const res = bracketsBalance(str);
    expect(res).to.be.true;
  });

  it('должна возвращать false для строки {[}]', () => {
    const str = '{[}]';

    const res = bracketsBalance(str);
    expect(res).to.be.false;
  });
});
