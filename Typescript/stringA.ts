let n = ['aabbb', 'aaa', 'baab', 'ba', 'bb', 'aab', 'abba', 'accc', 'abcd'];

const findIndex = (n: string[]): boolean[] => {
  let result: boolean[] = [];
  for (let s of n) {
    let lastAIndex = -1;
    let firstBIndex = s.length;
    for (let i = 0; i < s.length; i++) {
      if (s[i] !== 'a' && s[i] !== 'b') {
        lastAIndex = s.length;
        firstBIndex = -1;
      }
      if (s[i] === 'a') {
        lastAIndex = i;
      }
    }
    for (let j = s.length - 1; j >= 0; j--) {
      if (s[j] === 'b') {
        firstBIndex = j;
      }
    }
    if (firstBIndex < lastAIndex) {
      result.push(false);
    } else {
      result.push(true);
    }
  }
  return result;
};

console.log(findIndex(n));
