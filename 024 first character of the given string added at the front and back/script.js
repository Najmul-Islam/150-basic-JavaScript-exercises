function swift(text) {
    var first = text.substring(0, 1);
    return first + text + first;
}
console.log(swift('a'));
console.log(swift('ab'));
console.log(swift('abc'));

document.getElementById('btn').addEventListener('click', function () {
    var text = document.getElementById('input').value;
    var first = text.substring(0, 1);
    document.getElementById('result').innerText = first + text + first;
})