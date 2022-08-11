// Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

// If target is not found in the array, return [-1, -1].

// You must write an algorithm with O(log n) runtime complexity.

const searchRange = (nums: number[], target: number): number[] => {
  let temp: number[] = [];
  let result: number[] = [];
  if (nums.length === 0) {
    return [-1, -1];
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      temp.push(i);
    }
  }
  if (temp.length === 0) {
    return [-1, -1];
  } else if (temp.length === 1) {
    result.push(temp[0], temp[0]);
  } else {
    result.push(temp[0], temp[temp.length - 1]);
  }
  return result;
};
