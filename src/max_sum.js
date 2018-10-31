/**
 * @description Возвращает максимальную сумму фрагмента
 * @param {number[]} a - Массив чисел
 * @returns {number[]} Максимальная сумма фрагмента
 */
function getMaxSum(a) {
  let maxsum = 0;
  let sum = 0;
  for (let i = 0; i < a.length; i += 1) {
    sum += a[i];
    if (maxsum < sum) {
      maxsum = sum;
    } else if (sum < 0) {
      sum = 0;
    }
  }
  return maxsum;
}

module.exports = { getMaxSum };
