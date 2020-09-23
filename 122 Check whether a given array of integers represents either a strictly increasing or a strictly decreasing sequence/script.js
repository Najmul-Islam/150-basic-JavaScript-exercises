function isMonotonous(num) {
    if (num.length === 1) {
        return true;
    }
    var numDirection = num[1] - num[0];
    for (var i = 0; i < num.length - 1; i++) {
        if (numDirection * (num[i + 1] - num[i]) <= 0) {
            return false;
        }
    }
    return true;
}

console.log(isMonotonous([1, 2, 3]));
console.log(isMonotonous([1, 2, 2]))
console.log(isMonotonous([-3, -2, -1]))