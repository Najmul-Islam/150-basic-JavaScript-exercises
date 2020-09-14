const btn = document.querySelector('#btn');

btn.addEventListener('click', function () {
    let inValue = document.getElementById('num').value;

    if (inValue === "") {
        inValue = "Give me a year"
    } else {
        if ((inValue % 4 === 0 && inValue % 100 === 0 && inValue % 400 === 0) || (inValue % 4 === 0 && inValue % 100 !== 0)) {
            inValue = "This year is a Leap year";
        } else {
            inValue = "This year is not a Leap year";
        }
    }

    document.getElementById('show').textContent = inValue;
});