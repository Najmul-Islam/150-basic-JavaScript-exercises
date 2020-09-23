function isInrange(x, y, z) {
    return y >= x && y <= z;
}

console.log(isInrange(1, 2, 3));
console.log(isInrange(1, 2, -3));
console.log(isInrange(1.1, 1.2, 1.3));