const reverse = (x: number): number => {
  let result = 0;
  while (x != 0) {
    let a: number;
    let b: number;
    let c: number;
    a = x / 10;
    if (a < 0) {
      c = Math.ceil(a);
    } else {
      c = Math.floor(a);
    }
    b = x % 10;
    result = result * 10 + b;
    x = c;
  }
  if (result < (-2) ** 31 || result > 2 ** 31 - 1) {
    return 0;
  }

  return result;
};

console.log(reverse(123));
