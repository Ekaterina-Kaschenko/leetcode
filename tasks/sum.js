const sum = (...rest) => {
  if (rest.length === 0) {
    return 0;
  }

  let newArr = [];

  rest.forEach(el => {
    if (!isNaN(parseInt(el)) && typeof el !== 'object') {
      newArr.push(parseInt(el));
    }
  });

  return newArr.reduce((curr, sum) => {
    return curr + sum;
  }, 0);
}

console.log('###', sum(1, 2, 3, null, "4", 4));