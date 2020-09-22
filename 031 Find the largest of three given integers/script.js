function largestNum(x, y, z) {
    var max_val = 0;
    if (x > y) {
        max_val = x;
    } else {
        max_val = y;
    } if (z > max_val) {
        max_val = z;
    }
    return max_val;
}
console.log(largestNum(1, 0, 1));
console.log(largestNum(0, -10, -20));
console.log(largestNum(1000, 510, 440));

function largestNum2(x, y, z) {
    return Math.max(x, y, z);
}
console.log(largestNum2(1, 0, 1));
console.log(largestNum2(0, -10, -20));
console.log(largestNum2(1000, 510, 440));
