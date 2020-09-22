function allMax(nums) {
    var maxVal = nums[0] > nums[2] ? nums[0] : nums[2];

    nums[0] = maxVal;
    nums[1] = maxVal;
    nums[2] = maxVal;

    return nums;
}

console.log(allMax([20, 30, 40]));
console.log(allMax([-7, -9, 0]));
console.log(allMax([12, 10, 3]));