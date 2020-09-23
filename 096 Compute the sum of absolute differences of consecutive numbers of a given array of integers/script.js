function sumAdjacentDifference(arr) {
    var result = 0;
    for (var i = 1; i < arr.length; i++) {
        result += Math.abs(arr[i] - arr[i - 1]);
    }
    return result;
}

console.log(sumAdjacentDifference([1, 2, 3, 2, -5]));