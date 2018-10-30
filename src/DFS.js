/**
 * @description Прямой обход бинарного дерева в глубину
 * @param {Object} tree - Бинарное дерево
 * @returns {string[]} Значения узлов дерева
 */
function preOrder(tree) {
  const arr = [];

  function next(node) {
    if (node == null) return;
    arr.push(node.value);
    next(node.left);
    next(node.right);
  }

  next(tree);
  return arr;
}

module.exports = { preOrder };
