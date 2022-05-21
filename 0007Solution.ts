const reverse = (x: number): number => {
  let result = 0;
  while (x != 0) {
    let a: number;
    let b: number;
    a = Math.trunc(x / 10);
    b = x % 10;
    result = result * 10 + b;
    x = a;
  }
  if (result < (-2) ** 31 || result > 2 ** 31 - 1) {
    return 0;
  }

  return result;
};
