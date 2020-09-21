function upperLower(str) {
    if (str.length < 3) {
        return str.toUpperCase();
    } else {
        frontPart = (str.substring(0, 3)).toLowerCase();
        backPart = str.substring(3, str.length);
        return frontPart + backPart;
    }
}

console.log(upperLower("PYTHON"));
console.log(upperLower("Py"));
console.log(upperLower("JAVAScript"));


document.getElementById('btn').addEventListener('click', function () {
    const inValue = document.getElementById('input').value;
    if (inValue < 3) {
        var result = inValue.upperLower();
    } else {
        var frontPart = inValue.substring(0, 3).toLowerCase();
        var backPart = inValue.substring(3, inValue.length);
        var result = frontPart + backPart;
    }
    document.getElementById('result').innerText = result;
})