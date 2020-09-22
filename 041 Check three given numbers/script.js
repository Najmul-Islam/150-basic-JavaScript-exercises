function checkThree(x, y, z) {
    if (x == y && y == z) {
        return 30;
    } else if (x == y || y == z || z == x) {
        return 40;
    } else {
        return 20;
    }
}

console.log(checkThree(8, 8, 8));
console.log(checkThree(8, 8, 18));
console.log(checkThree(8, 7, 18));