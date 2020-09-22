function capitalLetter(str) {
    var str = str.split(" ");
    var x = str.length;

    for (var i = 0; i < x; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }
    return str.join(' ');
}

console.log(capitalLetter("Write a JavaScript program to capitalize the first letter of each word of a given string."));