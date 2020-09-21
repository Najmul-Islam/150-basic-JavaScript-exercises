function sameRightDig(x, y, z) {
    var check1 = x.toString()
    var X = check1.charAt(check1.length - 1);
    var check2 = y.toString()
    var Y = check2.charAt(check2.length - 1);
    var check3 = z.toString()
    var Z = check3.charAt(check3.length - 1);

    if (X == Y && Y == Z) {
        return true;
    } else {
        return false;
    }
}

console.log(sameRightDig(22, 32, 42));
console.log(sameRightDig(102, 302, 2));
console.log(sameRightDig(20, 22, 45));