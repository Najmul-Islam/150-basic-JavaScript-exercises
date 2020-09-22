function firstLast(nums) {
    var end = nums.length - 1;
    if (nums.length >= 1) {
        return nums[0] == nums[end];
    } else {
        return false;
    }
}

console.log(firstLast([10, 20, 30]));
console.log(firstLast([10, 20, 30, 10]));
console.log(firstLast([20, 20, 20])); 