/**
 * @description Рекурсивное вычисление суммы элементов массива.
 * @param {number[]} arr - Массив, числа которого необходимо сложить
 * @returns {number} Сумма элементов массива
 */
function sum(arr) {
  if (arr.length === 0) return 0;
  else return arr[0] + sum(arr.slice(1));
}

module.exports = { sum };
