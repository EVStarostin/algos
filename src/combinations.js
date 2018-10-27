const permutator = (inputArr) => {
  const result = [];

  const permute = (arr, comb) => {
    if (arr.length === 0) {
      result.push(comb);
    } else {
      for (let i = 0; i < arr.length; i += 1) {
        const curr = arr.slice();
        const next = curr.splice(i, 1);
        permute(curr, comb.concat(next));
      }
    }
  };

  permute(inputArr, []);

  return result;
};

module.exports = { permutator };
