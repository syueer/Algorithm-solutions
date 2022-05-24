/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
  if (k > nums.length) {
    k = k % nums.length;
  }
  swap(nums, 0, nums.length - 1);
  swap(nums, 0, k - 1);
  swap(nums, k, nums.length - 1);
}

function swap(nums: number[], i: number, j: number): void {
  while (i < j) {
    let temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
    i++;
    j--;
  }
}
