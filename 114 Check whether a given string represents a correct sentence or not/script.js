function isCorrectSentence(inputStr) {
    var firstChar = inputStr[0];
    var lastChar = inputStr[inputStr.length - 1];
    return /[A-Z]/.test(firstChar) && lastChar == ".";
}

console.log(isCorrectSentence("This tool will help you write better English and efficiently corrects texts."));
console.log(isCorrectSentence("This tool will help you write better English and efficiently corrects texts"));
console.log(isCorrectSentence("this tool will help you write better English and efficiently corrects texts."));