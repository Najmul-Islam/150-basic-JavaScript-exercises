function arrayMaxSum(nums, k) {
    let result = 0;
    let tempSum = 0;
    for (var i = 0; i < k - 1; i++) {
        tempSum += nums[i];
    }
    for (var i = k - 1; i < nums.length; i++) {
        tempSum += nums[i];
        if (tempSum > result) {
            result = tempSum;
        }
        tempSum -= nums[i - k + 1];
    }
    return result;
};

console.log(arrayMaxSum([1, 2, 3, 14, 5], 2))
console.log(arrayMaxSum([2, 3, 5, 1, 6], 3))
console.log(arrayMaxSum([9, 3, 5, 1, 7], 2))