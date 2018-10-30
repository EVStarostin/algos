const { expect } = require('chai');
const { revertList } = require('./revert_list');

describe('revertList', () => {
  const myList = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null,
        },
      },
    },
  };
  const revertedList = {
    value: 4,
    next: {
      value: 3,
      next: {
        value: 2,
        next: {
          value: 1,
          next: null,
        },
      },
    },
  };

  it('должна возвращать развернутый односвязный список', () => {
    const res = revertList(myList);
    expect(res).to.eql(revertedList);
  });
});
