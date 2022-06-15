const R = 'SSSSAAA';
const solution = (R: string): number => {
  let totalTime: number = 40 * R.length;
  let left: number = 0;
  let right: number = 0;
  for (let j = 0; j < R.length; j++) {
    if (R[j] === 'A') {
      right += 20;
    } else if (R[j] === 'S') {
      right += 30;
    }
  }
  totalTime = left + right;
  for (let i = 0; i < R.length; i++) {
    if (R[i] === 'A') {
      left += 5;
      right -= 20;
    } else if (R[i] === 'S') {
      left += 40;
      right -= 30;
    }
    let total = left + right;
    if (total < totalTime) totalTime = total;
  }
  return totalTime;
};

console.log(solution(R));
