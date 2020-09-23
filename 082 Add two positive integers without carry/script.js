function withoutCarry(num1, num2) {
    let result = 0;
    let x = 1;
    while (num1 > 0 && num2 > 0) {
        result += x * ((num1 + num2) % 10);
        num1 = Math.floor(num1 / 10);
        num2 = Math.floor(num2 / 10);
        x *= 10;
    }
    return result;
}

console.log(withoutCarry(222, 911));

// for only 3 digite
// function sumNumber(a, b) {
//     return (a + b) % 1000;
// }

// console.log(sumNumber(222, 911))
// console.log(sumNumber(200, 900))