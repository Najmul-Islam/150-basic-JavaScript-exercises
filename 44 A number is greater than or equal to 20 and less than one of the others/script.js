function checkGreater20(x, y, z) {
    if ((x >= 20 && (x < y || x < z)) || (y >= 20 && (y < x || y < z)) || (z >= 20 && (z < x || z < y))) {
        return true;
    } else {
        return false;
    }
}

console.log(checkGreater20(23, 45, 10));
console.log(checkGreater20(23, 23, 10));
console.log(checkGreater20(21, 66, 75));