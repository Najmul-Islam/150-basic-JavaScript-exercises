function timeConvert(num) {
    var hours = Math.floor(num / 60);
    var minutes = num % 60;

    return hours + ":" + minutes;
}

console.log(timeConvert(71));
console.log(timeConvert(450));
console.log(timeConvert(1441));