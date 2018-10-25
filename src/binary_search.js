/**
 * @description Ищет число бинарным поиском в массиве и возвращает его позицию.
 * Время выполнения O(lonN)
 * @param {number[]} list - Отсортированный массив
 * @param {number} item - Искомое значение
 * @returns {number|null} Позиция найденного значения в массиве или null, если значение не найдено
 */
function binarySearch(list, item) {
  let low = 0;
  let high = list.length - 1;

  while (low <= high) {
    let mid = (low + high) / 2;
    mid = Math.floor(mid);
    const guess = list[mid];
    if (guess === item) return mid;
    if (guess > item) high = mid - 1;
    else low = mid + 1;
  }

  return null;
}

module.exports = { binarySearch };
