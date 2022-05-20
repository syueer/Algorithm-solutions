function fizzBuzz(n: number): string[] {
  let array = [];
  for (let i = 0; i < n; i++) {
    if ((i + 1) % 5 === 0 && (i + 1) % 3 === 0) {
      array[i] = 'FizzBuzz';
    } else if ((i + 1) % 5 === 0) {
      array[i] = 'Buzz';
    } else if ((i + 1) % 3 === 0) {
      array[i] = 'Fizz';
    } else {
      array[i] = (i + 1).toString();
    }
  }
  return array;
}
