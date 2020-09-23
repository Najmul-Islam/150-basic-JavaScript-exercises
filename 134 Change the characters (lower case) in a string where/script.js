function changeChar(str1) {
    var result = [];
    for (var i = 0; i < str1.length; i++) {
        var charOrder = str1.charCodeAt(i) - 'a'.charCodeAt(0),
            changeChar = 25 - charOrder + 'a'.charCodeAt(0);
        result.push(String.fromCharCode(changeChar));
    }

    return result.join('');
}

console.log(changeChar("abcxyz"));
console.log(changeChar("python"));