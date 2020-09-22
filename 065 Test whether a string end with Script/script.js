function endEscript(str) {
    if (str.substring(str.length - 6, str.length) == "Script") {
        return true;
    } else {
        return false;
    }
}

console.log(endEscript("JavaScript"));
console.log(endEscript("Java Script"));
console.log(endEscript("Java Scripts"));