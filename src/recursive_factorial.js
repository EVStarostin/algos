/**
 * @description Рекурсивное вычисление факториала.
 * @param {number} x - Число, факториал которого надо найти
 * @returns {number} Факториал
 */
function fact(x) {
  if (x === 1) return 1;
  else return x * fact(x - 1);
}

module.exports = { fact };
