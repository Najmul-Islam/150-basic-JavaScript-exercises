function checkAPoint(a, b, x, y, r) {
    var distPoints = (a - x) * (a - x) + (b - y) * (b - y);
    r *= r;
    if (distPoints < r) {
        return true;
    }
    return false;
}

console.log(checkAPoint(0, 0, 2, 4, 6));
console.log(checkAPoint(0, 0, 6, 8, 6));