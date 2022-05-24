function evalRPN(tokens: string[]): number {
  let stack = [];
  for (let i = 0; i < tokens.length; i++) {
    if (isNaN(Number(tokens[i]))) {
      let a = stack.pop();
      let b = stack.pop();
      let c: string = `${b} ${tokens[i]} ${a}`;
      stack.push(Math.trunc(eval(c)));
    } else {
      stack.push(tokens[i]);
    }
  }
  return Number(stack[0]);
}
