function fibbonachi (n) {ч
  if (n === 1) {
    return 0;
  }

  let [n1, n2] = [0, 1];
  for (let i = 2; i < n; i +=1) {
    [n1, n2] = [n2, n1 + n2];
  }
  return n2;
}
