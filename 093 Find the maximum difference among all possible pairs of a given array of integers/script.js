function arrayMaxDiff(arr) {
    var maxResult = 0;
    for (var i = 0; i < arr.length; i++) {
        for (var k = 0; k != i && k < arr.length; k++) {
            var diff = Math.abs(arr[i] - arr[k]);
            maxResult = Math.max(maxResult, diff);
        }
    }
    return maxResult;
}

console.log(arrayMaxDiff([1, 2, 3, 8, 9]))
console.log(arrayMaxDiff([1, 2, 3, 18, 9]))
console.log(arrayMaxDiff([13, 2, 3, 8, 9]))