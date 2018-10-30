function bfs(node) {
  const queue = [];
  const values = [];
  queue.push(node);
  while (queue.length > 0) {
    const tempNode = queue.shift();
    values.push(tempNode.value);
    if (tempNode.left) {
      queue.push(tempNode.left);
    }
    if (tempNode.right) {
      queue.push(tempNode.right);
    }
  }
  return values;
}

module.exports = { bfs };
