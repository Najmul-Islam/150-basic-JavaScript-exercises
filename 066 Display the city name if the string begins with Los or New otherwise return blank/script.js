function cityName(str) {
    if (str.length >= 3 && ((str.substring(0, 3) == 'Los') || (str.substring(0, 3) == 'New'))) {
        return str;
    } else {
        return '';
    }
}

console.log(cityName("New York"));
console.log(cityName("Los Angeles"));
console.log(cityName("London"));