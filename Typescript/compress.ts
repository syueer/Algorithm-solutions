const compress = (message: string): string => {
  let result: string = '';
  let stack: { key: string; value: number }[] = [];

  let first = { key: message[0], value: 1 };
  stack.push(first);
  for (let i = 1; i < message.length; i++) {
    if (stack[stack.length - 1].key === message[i]) {
      stack[stack.length - 1].value++;
    } else {
      stack.push({ key: message[i], value: 1 });
    }
  }
  for (let i = 0; i < stack.length; i++) {
    result += stack[i].key;
    if (stack[i].value !== 1) {
      result += stack[i].value;
    }
  }
  return result;
};

console.log(compress('aaabbbccc'));
