const { expect } = require('chai');
const { binarySearch } = require('./binary_search');

describe('binarySearch', () => {
  const myList = [1, 3, 5, 7, 9];
  
  it(`должна возвращать позицию 1 для значения 3 в массиве ${myList}`, () => {
    const res = binarySearch(myList, 3);
    expect(res).to.equal(1, `${res} !== 1`);
  });

  it(`должна возвращать null для значения -1 в массиве ${myList}`, () => {
    const res = binarySearch(myList, -1);
    expect(res).to.be.a('null', `${res} !== null`);
  });
});
