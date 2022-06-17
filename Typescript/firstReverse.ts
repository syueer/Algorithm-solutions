let n = 'Hello World and Coders';
const firstReverse = (str: string) => {
  let array = str.split('');
  // let result = '';
  for (let i = 0; i < array.length / 2; i++) {
    let temp = str[i];
    array[i] = array[str.length - 1 - i];
    array[array.length - 1 - i] = temp;
  }
  return array.join('');
};

console.log(firstReverse(n));
