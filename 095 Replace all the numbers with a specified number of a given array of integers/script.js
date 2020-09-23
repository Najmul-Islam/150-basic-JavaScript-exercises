function arrayElementReplace(arr, oldValue, newValue) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === oldValue) {
            arr[i] = newValue;
        }
    }
    return arr;
}

num = [1, 2, 3, 2, 2, 8, 1, 9];
console.log("Original Array: " + num);
console.log(arrayElementReplace(num, 2, 5));