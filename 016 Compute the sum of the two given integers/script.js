document.getElementById('btn').addEventListener('click', function () {
    const firstValue = parseInt(document.getElementById('first').value);
    const secondValue = parseInt(document.getElementById('second').value);

    if (firstValue == secondValue) {
        var result = (firstValue + secondValue) * 3;
    } else {
        var result = firstValue + secondValue;
    }
    document.getElementById('result').innerText = "Result : " + result;
})