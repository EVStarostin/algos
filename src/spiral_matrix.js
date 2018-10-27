function addZero(arr) {
  const zeros = Math.floor(arr.length / 10) + 2;
  return arr.map((el) => {
    const elStr = el.toString();
    const len = elStr.length;
    return len < zeros + 1 ? '0'.repeat(zeros - len) + elStr : elStr;
  });
}

function makeMatrix(n) {
  const matrix = [];
  for (let i = 0; i < n; i += 1) {
    matrix[i] = [];
    for (let j = 0; j < n; j += 1) {
      matrix[i][j] = [];
    }
  }

  return matrix;
}

/**
 * @description Генерация спиральной матрицы
 * @param {number} n - Размер спиральной матрицы (n * n)
 * @returns {Array.<string[]>} Спиральная матрица
 */
function spiralMatrix(n) {
  const matrix = makeMatrix(n);

  let minRow = 0;
  let maxRow = n - 1;
  let minCol = 0;
  let maxCol = n - 1;

  let k = 1;
  while (k <= n * n) {
    // Верхняя строка
    for (let col = minCol; col <= maxCol; col += 1) {
      matrix[minRow][col] = k;
      k += 1;
    }

    // Правый столбец
    for (let row = minRow + 1; row <= maxRow; row += 1) {
      matrix[row][maxCol] = k;
      k += 1;
    }
    maxCol -= 1;

    // Нижняя строка
    for (let col = maxCol; col >= minCol; col -= 1) {
      matrix[maxRow][col] = k;
      k += 1;
    }
    maxRow -= 1;

    // Левый столбец
    for (let row = maxRow; row >= minRow + 1; row -= 1) {
      matrix[row][minCol] = k;
      k += 1;
    }
    minRow += 1;
    minCol += 1;
  }

  const res = matrix.map(el => addZero(el));
  return res;
}

module.exports = { spiralMatrix };
