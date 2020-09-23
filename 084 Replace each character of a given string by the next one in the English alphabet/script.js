function alphabetShift(str) {
    var allChars = str.split('');
    for (var i = 0; i < allChars.length; i++) {
        var n = allChars[i].charCodeAt() - 'a'.charCodeAt();
        console.log(n);
        n = (n + 1) % 26;
        allChars[i] = String.fromCharCode(n + 'a'.charCodeAt());
    }
    return allChars.join('');
}

console.log(alphabetShift("abcdef"))
// var str = "a"
// for (var i = 0; i < str.length; i++) {
//     var result = str.charCodeAt(i);
//     console.log(result);
// }