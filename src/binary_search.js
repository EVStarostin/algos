/**
 * Для списка из N элементов бинарный поиск выполняется за logN шагов:
 * n = 1: 1 step;
 * n = 2: 1 step;
 * n = 3: 2 steps;
 * ...
 * n = 8: 3 steps (2 ** 3)
 * n = 1024: 10 steps (2 ** 10);
 * Логарифм - операция, обратная возведению в степень
 * 2 ** 5 < — > log32 = 5
 * Бинарный поиск работает только если список отсортирован
 */

/**
 * @description Ищет число бинарным поиском в массиве и возвращает его позицию
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
