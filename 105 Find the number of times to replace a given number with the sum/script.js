function digitToOne(num) {
    var digitSum = function (num) {
        var digitsum = 0;
        while (num) {
            digitsum += num % 10;
            num = Math.floor(num / 10);
        }
        return digitsum;
    };

    var result = 0;

    while (num >= 10) {
        result += 1;
        num = digitSum(num);
    }
    return result;
}

console.log(digitToOne(123))
console.log(digitToOne(156))