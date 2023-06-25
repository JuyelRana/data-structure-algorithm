/**
 * Given an array of integers nums and an integer target, return indices of the two numbers such that 
 * they add up to target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * 
 * Example 1:
 * Input: nums = [2,7,11,15], target = 9 Output: [0,1] 
 * Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
 * 
 * Example 2:
 * Input: nums = [3,2,4], target = 6 Output: [1,2]
 * 
 * Example 3:
 * Input: nums = [3,3], target = 6 Output: [0,1]
 * 
 * Constraints:
 * 2 <= nums.length <= 104
 * -109 <= nums[i] <= 109
 * -109 <= target <= 109
 * Only one valid answer exists.
 */

const twoSum = (nums, target) =>{
    const pair = [];
    const hasTable = [];
    nums.forEach(num => {
        const currentNumber = num;
        const counterNumber = target - num;
        if (hasTable.indexOf(counterNumber) !== -1) {
            pair.push(nums.indexOf(counterNumber), nums.lastIndexOf(currentNumber));
        }
        hasTable.push(currentNumber);
    });
    return pair;
}
console.log(twoSum([2,7,11,15], 9)); // [0, 1]
console.log(twoSum([3,2,4], 7)); // [0, 2]
console.log(twoSum([3,3], 6)); // [0, 1]