/**
 * @description Сортировка вставками
 * Худшее время O(n ** 2)
 * @param {number[]} arr - Неотсортированный массив
 * @returns {number[]} Отсортированный массив
 */
function insertionSort(arr) {
  const a = arr.slice();
  for (let j = 2; j < a.length; j += 1) {
    const key = a[j];

    let i = j - 1;
    while (i >= 0 && a[i] > key) {
      a[i + 1] = a[i];
      i -= 1;
    }

    a[i + 1] = key;
  }

  return a;
}

module.exports = { insertionSort };
