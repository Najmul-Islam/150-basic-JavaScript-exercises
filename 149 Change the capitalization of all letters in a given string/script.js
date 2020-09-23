function changeCase(txt) {
    var str1 = "";
    for (var i = 0; i < txt.length; i++) {
        if (/A-Z/.test(txt[i])) {
            str1 += txt[i].toLowerCase();
        } else {
            str1 += txt[i].toUpperCase();
        }
    }
    return str1;
}

console.log(changeCase("w3resource"));
console.log(changeCase("Germany"));