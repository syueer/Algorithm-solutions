let num = 4;

const firstFactorial = (num: number): number => {
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
};

console.log(firstFactorial(8));
