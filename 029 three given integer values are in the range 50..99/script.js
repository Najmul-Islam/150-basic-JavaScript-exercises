function checkInt(x, y, z) {
    if (x >= 50 && x <= 99 || y >= 50 && y <= 99 || z >= 50 && z <= 99) {
        return true;
    } else {
        return false;
    }
}

console.log(checkInt(50, 90, 99));
console.log(checkInt(5, 9, 199));
console.log(checkInt(65, 89, 199));
console.log(checkInt(65, 9, 199));