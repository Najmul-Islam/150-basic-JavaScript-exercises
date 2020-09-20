// function first_last(str1) {
//     if (str1.length <= 1) {
//         return str1;
//     } else {
//         var midChar = str1.substring(1, str1.length - 1);
//         console.log(midChar)
//         return (str1.charAt(str1.length - 1)) + midChar + str1.charAt(0);
//     }

// }

// console.log(first_last('a'));
// console.log(first_last('ab'));
// console.log(first_last('abc'));

document.getElementById('btn').addEventListener('click', function () {
    const inVlue = document.getElementById('input').value;
    if (inVlue <= 0) {
        var result = inVlue;
    } else {
        var midchar = inVlue.substring(1, inVlue.length - 1);
        var result = inVlue.charAt(inVlue.length - 1) + midchar + inVlue.charAt(0);
    }
    document.getElementById('result').innerText = result;
})