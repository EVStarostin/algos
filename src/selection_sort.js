/**
 * @description Поиск наименьшего элемента в массиве
 * @param {number[]} arr - Массив, в котором выполняется поиск
 * @returns {number} - Индекс наименьшего элемента
 */
function findSmallest(arr) {
  let smallest = arr[0];
  let smallestIndex = 0;

  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] < smallest) {
      smallest = arr[i];
      smallestIndex = i;
    }
  }

  return smallestIndex;
}

/**
 * @description Сортировка выбором выполняется за время O(n ** 2)
 * @param {number[]} arr - Неотсортированный массив
 * @returns {number[]} Отсортированный массив
 */
function selectionSort(arr) {
  const newArr = [];
  while (arr.length) {
    const smallest = findSmallest(arr);
    newArr.push(arr.splice(smallest, 1)[0]);
  }

  return newArr;
}

module.exports = { selectionSort };
