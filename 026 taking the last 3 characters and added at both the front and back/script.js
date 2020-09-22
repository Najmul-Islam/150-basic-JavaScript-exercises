// function frontBack(text) {
//     if (text.length >= 3) {
//         var textLen = 3;
//         var back = text.substring(text.length - 3);
//         return back + text + back;
//     } else {
//         return false;
//     }
// }
// console.log(frontBack("abc"));
// console.log(frontBack("ab"));
// console.log(frontBack("abcd"));

document.getElementById('btn').addEventListener('click', function () {
    const str = document.getElementById('input').value
    if (str.length >= 3) {
        var strLen = 3;
        var back = str.substring(str.length - 3);
        var result = back + str + back;
    } else {
        var result = false;
    }
    document.getElementById('result').innerText = result;
})