/* Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4
Example 2:

Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
Explanation: 2 does not exist in nums so return -1
 

Constraints:

1 <= nums.length <= 104
-104 < nums[i], target < 104
All the integers in nums are unique.
nums is sorted in ascending order. */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

const search = function (nums, target) {
  let left = 0,
    right = nums.length - 1;
  while (left < right) {
    let mid = Math.ciel((right + left) / 2);
    if (target < nums[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return nums[left] === target ? left : -1;
};

/* const search = function (nums, target) {
  let left = 0,
    right = nums.length - 1;
  while (left < right) {
    let mid = left + Math.floor((right - left + 1) / 2);
    if (target < nums[mid]) {
      right = mid - 1;
    } else {
      left = mid;
    }
  }
  return nums[left] === target ? left : -1;
}; */

/* const search = function (nums, target) {
  let start = 0,
    end = nums.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (nums[mid] == target) {
      return mid;
    } else if (nums[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return -1;
}; */
