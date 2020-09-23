function kelement(arr, k) {
    arr.sort(function (a, b) {
        return b - a;
    })
    return arr[k - 1];
}

console.log(kelement([1, 2, 6, 4, 5], 3))
console.log(kelement([-10, -25, -47, -36, 0], 1))