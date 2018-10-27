function merge(left, right) {
  const result = [];
  let iL = 0;
  let iR = 0;

  while (iL < left.length && iR < right.length) {
    if (left[iL] < right[iR]) {
      result.push(left[iL]);
      iL += 1;
    } else {
      result.push(right[iR]);
      iR += 1;
    }
  }
  // merge what is left
  return result.concat(left.slice(iL), right.slice(iR));
}

/**
 * @description Сортировка слиянием.
 * Время выполнения O(n * log n)
 * @param {number[]} arr - Неотсортированный массив
 * @returns {number[]} Отсортированный массив
 */
function mergeSort(items) {
  if (items.length < 2) {
    return items;
  }

  const middle = Math.floor(items.length / 2);
  // create two arrays
  const left = items.slice(0, middle);
  const right = items.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

module.exports = { mergeSort };
