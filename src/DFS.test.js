const { expect } = require('chai');
const { preOrder } = require('./DFS');

describe('preOrderDFS', () => {
  const binaryTree = {
    value: 'F',
    left: {
      value: 'B',
      left: {
        value: 'A',
        left: null,
        right: null
      },
      right: {
        value: 'D',
        left: {
          value: 'C',
          left: null,
          right: null
        },
        right: {
          value: 'E',
          left: null,
          right: null
        }
      }
    },
    right: {
      value: 'G',
      left: null,
      right: {
        value: 'I',
        left: {
          value: 'H',
          left: null,
          right: null
        },
        right: null
      }
    }
  };
  const expectedResult = ['F', 'B', 'A', 'D', 'C', 'E', 'G', 'I', 'H'];

  it(`должна возвращать массив со значениями узлов дерева ${expectedResult}`, () => {
    const res = preOrder(binaryTree);
    expect(res).to.eql(expectedResult, `${res} !== ${expectedResult}`);
  });
});
