function getPrimes(n) {
  const arr = [];

  for (let i = 1; i <= n; i += 1) {
    let isPrime = true;

    for (let j = 2; j <= Math.sqrt(i); j += 1) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) arr.push(i);
  }

  return arr;
}

module.exports = { getPrimes };
