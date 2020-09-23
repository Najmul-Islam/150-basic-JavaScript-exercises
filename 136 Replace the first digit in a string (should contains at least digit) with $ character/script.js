function replaceFirstDigit(inputStr) {
    return inputStr.replace(/[0-9]/, '$');
}

console.log(replaceFirstDigit("abc1dabc"));
console.log(replaceFirstDigit("p3ython"));
console.log(replaceFirstDigit("ab1cabc")); 