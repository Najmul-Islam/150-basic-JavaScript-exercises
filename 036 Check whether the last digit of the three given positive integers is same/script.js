function lastDigit(x, y, z) {
    if (x > 0 && y > 0 && z > 0) {
        return (x % 10 == y % 10 && y % 10 == z % 10 && x % 10 == z % 10)
    } else {
        return false;
    }
}

console.log(lastDigit(20, 30, 400));
console.log(lastDigit(21, 30, 400));
console.log(lastDigit(20, 31, 400));
console.log(lastDigit(21, 31, 41));

function check(x, y, z) {
    var check1 = x.toString();
    var A = check1.charAt(check1.length - 1);
    var check2 = y.toString();
    var B = check2.charAt(check2.length - 1);
    var check3 = z.toString();
    var C = check3.charAt(check3.length - 1);
    if (A === B && B === C) {
        return true;
    } else {
        return false;
    }
}

console.log(check(20, 30, 400));
console.log(check(21, 30, 400));
console.log(check(20, 31, 400));
console.log(check(21, 31, 41));