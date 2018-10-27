/**
 * @description Сортировка пузырьком
 * Сложность алгоритма: O (n ** 2).
 * @param {number[]} array - Неосортированный массив
 * @returns {number[]} Отсортированный массив
 */
function bubbleSort(array) {
  const sortedArray = array.slice();

  for (let i = 0; i < sortedArray.length - 1; i += 1) {
    let swapsQty = 0;
    for (let j = 0; j < sortedArray.length - i; j += 1) {
      if (sortedArray[j] > sortedArray[j + 1]) {
        const swap = sortedArray[j];
        sortedArray[j] = sortedArray[j + 1];
        sortedArray[j + 1] = swap;
        swapsQty += 1;
      }
    }

    if (swapsQty === 0) break;
  }

  return sortedArray;
}

module.exports = { bubbleSort };
