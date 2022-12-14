/* Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

Example 1:

Input: nums = [3,2,3]
Output: 3
Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2 */

const majorityElement = (nums) => {
  const cache = {};
  for (let num of nums) {
    //cache[num] ? cache[num]++ : (cache[num] = 1);
    cache[num] = cache[num] + 1 || 1;
    if (cache[num] > nums.length / 2) return num;
  }
};

/* const majorityElement = (nums) => {
  nums.sort();
  return nums[Math.floor(nums.length / 2)];
}; */

/* const majorityElement = (nums) => {
  const hashMap = new Map();
  for (let num of nums) {
    hashMap.set(num, hashMap.has(num) ? hashMap.get(num) + 1 : 1);
    if (hashMap.get(num) > nums.length / 2) return num;
  }
}; */

console.log(majorityElement([3, 2, 3]), "3");
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]), "2");
