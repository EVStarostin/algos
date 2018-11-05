const N = 8;
const position = new Array(N);
const solutions = [];

// Check if a position is safe
function isSafe(queenNumber, rowPosition) {
  // Check each queen before this one
  for (let i = 0; i < queenNumber; i += 1) {
    // Get another queen's rowPosition
    const otherRowPos = position[i];

    // Now check if they're in the same row or diagonals
    if (otherRowPos === rowPosition // Same row
      || otherRowPos === rowPosition - (queenNumber - i) // Same diagonal
      || otherRowPos === rowPosition + (queenNumber - i)) { // Same diagonal
      return false;
    }
  }
  return true;
}

// Recursively generate a tuple like [0 0 0 0], then [0 0 0 1] then etc...
function solve(k) {
  if (k === N) { // We placed N-1 queens (0 included), problem solved!
    // Solution found!
    const idx = solutions.length;
    solutions[idx] = [];
    for (let i = 0; i < N; i += 1) {
      solutions[idx].push(position[i]);
    }
  } else {
    for (let i = 0; i < N; i += 1) { // Generate ALL combinations
      // Before putting a queen (the k-th queen) into a row, test it for safeness
      if (isSafe(k, i)) {
        position[k] = i;
        // Place another queen
        solve(k + 1);
      }
    }
  }
}

function eightQueens() {
  solve(0);
  return solutions;
}

eightQueens();

module.exports = { eightQueens };
