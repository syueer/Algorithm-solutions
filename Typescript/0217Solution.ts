// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

const containsDuplicate = (nums: number[]): boolean => {
  let map = new Map();
  for (const num of nums) {
    if (map.has(num)) {
      return true;
    } else {
      map.set(num, 1);
    }
  }
  return false;
};
