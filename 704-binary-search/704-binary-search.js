/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    return isNaN(nums.indexOf(target))? -1 : nums.indexOf(target);
};