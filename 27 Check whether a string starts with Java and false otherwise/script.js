// function startSpecStr(str) {
//     if (str.length < 4) {
//         return false;
//     }
//     var front = str.substring(0, 4);
//     if (front == 'Java') {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(startSpecStr("JavaScript"));
// console.log(startSpecStr("Java"));
// console.log(startSpecStr("Python"));

document.getElementById('btn').addEventListener('click', function () {
    const inValue = document.getElementById('input').value;
    if (inValue.length < 4) {
        var result = false;
    }
    else {
        var front = inValue.substring(0, 4);
        if (front == "Java") {
            var result = true;
        } else {
            var result = false;
        }
    }
    document.getElementById('result').innerText = result;
})