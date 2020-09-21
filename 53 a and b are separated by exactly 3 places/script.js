function abCheck(str) {
    return (/a...b/).test(str) || (/b...a/).test(str);
}
console.log(abCheck("Chai sbreak"));
console.log(abCheck("pane borrowed"));
console.log(abCheck("abCheck"));