/**
 * @description Быстрая сортировка
 * В худшем случае работает за O(n ** 2) времени. В среднем за O(nlogn)
 * @param {number[]} array - Неосортированный массив
 * @returns {number[]} Отсортированный массив
 */
function quickSort(array) {
  if (array.length < 2) {
    return array;
  } else {
    const pivot = array[0];
    const less = array.slice(1).filter(el => el <= pivot);
    const greater = array.slice(1).filter(el => el > pivot);
    return quickSort(less).concat(pivot, quickSort(greater));
  }
}

module.exports = { quickSort };
