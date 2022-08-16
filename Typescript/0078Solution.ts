// Given an integer array nums of unique elements, return all possible subsets (the power set).

// The solution set must not contain duplicate subsets. Return the solution in any order.

const subsets = (nums: number[]): number[][] => {
  let result: number[][] = [];
  if (nums === null || nums.length === 0) return [];
  let currentValue: number[] = [];
  helper(nums, 0, currentValue, result);
  return result;
};

const helper = (
  nums: number[],
  currentIndex: number,
  currentValue: number[],
  result: number[][]
): void => {
  result.push(currentValue);
  for (let i = currentIndex; i < nums.length; i++) {
    helper(nums, i + 1, currentValue.concat(nums[i]), result);
  }
};
