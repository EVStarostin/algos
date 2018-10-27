/**
 * @description Рекурсивное вычисление факториала.
 * @param {number} x - Число, факториал которого надо найти
 * @returns {number} Факториал
 */
function recursiveFactorial(x) {
  if (x === 1) return 1;
  return x * recursiveFactorial(x - 1);
}

module.exports = { recursiveFactorial };
