function numberOrder(x, y, z) {
    if (y > x && z > y) {
        return 'strict mode';
    } else if (z > y) {
        return 'Soft mode';
    } else {
        return 'Undifined';
    }
}

console.log(numberOrder(10, 15, 31));
console.log(numberOrder(24, 25, 31));
console.log(numberOrder(50, 21, 15));