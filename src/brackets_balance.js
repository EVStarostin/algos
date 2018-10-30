function bracketsBalance(str) {
  const brackets = {
    '(': ')',
    '{': '}',
    '[': ']',
  };

  const stack = [];
  for (let i = 0; i < str.length; i += 1) {
    const c = str[i];
    const lastInStack = stack[stack.length - 1];

    if (brackets[c]) {
      stack.push(c);
    } else if (c === brackets[lastInStack]) {
      stack.pop();
    }
  }

  return !stack.length;
}

module.exports = { bracketsBalance };
