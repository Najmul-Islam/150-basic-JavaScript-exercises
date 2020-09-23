function changeCase(newStr) {
    var x = 0;
    var y = 0;

    for (var i = 0; i < newStr.length; i++) {
        if (/[A-Z]/.test(newStr[i])) {
            x++;
        } else {
            y++;
        }
    }

    if (y > x) {
        return newStr.toLowerCase();
    } else {
        return newStr.toUpperCase();
    }
}

console.log(changeCase("Write"))
console.log(changeCase("PHp"))