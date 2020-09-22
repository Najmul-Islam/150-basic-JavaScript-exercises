// function differance(n) {
//     if (n <= 13) {
//         return 13 - n;
//     } else {
//         return (n - 13) * 2;
//     }

//     document.getElementById('result')
// }


document.getElementById('btn').addEventListener('click', () => {
    const inputValue = document.getElementById('first').value;
    if (inputValue <= 13) {
        var result = 13 - inputValue;

    } else {
        var result = (inputValue - 13) * 2;
    }
    document.getElementById('result').innerText = "Result : " + result;
});


