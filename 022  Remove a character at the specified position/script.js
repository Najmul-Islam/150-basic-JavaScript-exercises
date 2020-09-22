// function removeCharacter(str, charPos) {
//     var part1 = str.substring(0, charPos);
//     var part2 = str.substring(charPos + 1, str.length);
//     return part1 + part2;


// }
// console.log(removeCharacter("Python", 3));


document.getElementById('btn').addEventListener('click', function () {
    let inputT = document.getElementById('inputT').value;
    let inputN = parseInt(document.getElementById('inputN').value);
    let part1 = inputT.substring(0, inputN);
    let part2 = inputT.substring(inputN + 1, inputT.length);

    document.getElementById('result').innerText = part1 + part2;

})