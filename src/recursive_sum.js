/**
 * @description Рекурсивное вычисление суммы элементов массива.
 * @param {number[]} arr - Массив, числа которого необходимо сложить
 * @returns {number} Сумма элементов массива
 */
function recursiveSum(arr) {
  if (arr.length === 0) return 0;
  return arr[0] + recursiveSum(arr.slice(1));
}

module.exports = { recursiveSum };
