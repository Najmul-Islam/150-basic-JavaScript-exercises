// function checkChar(str1, char) {
//     ctr = 0;
//     for (let i = 0; i < str1.length; i++) {
//         if (str1.charAt(i) == char && i >= 1 && i <= 3) {
//             ctr = 1;
//             break;
//         }
//     } if (ctr == 1) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(checkChar("Python", "y"));
// console.log(checkChar("JavaScript", "a"));
// console.log(checkChar("Console", "o"));
// console.log(checkChar("Console", "C"));
// console.log(checkChar("Console", "e"));
// console.log(checkChar("JavaScript", "S"));

function checkChar(a, b) {
    return (a.substring(1, 4).includes(b));
}
console.log(checkChar("Python", "y"));
console.log(checkChar("JavaScript", "a"));
console.log(checkChar("Console", "o"));
console.log(checkChar("Console", "C"));
console.log(checkChar("Console", "e"));
console.log(checkChar("JavaScript", "S"));