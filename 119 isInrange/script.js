function increasingDigits(num) {
    var arrNum = ('' + num).split('');

    for (var i = 0; i < arrNum.length - 1; i++) {
        if (parseInt(arrNum[i]) >= parseInt(arrNum[i + 1]))
            return false;
    }
    return true;
}

console.log(increasingDigits(123));
// console.log(increasingDigits(1223));
// console.log(increasingDigits(45677));