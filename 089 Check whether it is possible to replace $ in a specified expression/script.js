function checkArithmeticExpression(x, y, z) {
    return x + y == z || x * y == z || x / y == z || x - y == z;
}

console.log(checkArithmeticExpression(10, 25, 35))
console.log(checkArithmeticExpression(10, 25, 250))
console.log(checkArithmeticExpression(30, 25, 5))
console.log(checkArithmeticExpression(100, 25, 4.0))
console.log(checkArithmeticExpression(100, 25, 25))