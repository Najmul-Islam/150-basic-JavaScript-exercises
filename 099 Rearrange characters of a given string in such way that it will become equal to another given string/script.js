function rearrangementCharacters(str1, str2) {
    var firstSet = str1.split(''),
        secondSet = str2.split(''),
        result = true;

    firstSet.sort();
    secondSet.sort();

    for (var i = 0; i < Math.max(firstSet.length, secondSet.length); i++) {
        if (firstSet[i] !== secondSet[i]) {
            result = false;
        }
    }

    return result;
}

console.log(rearrangementCharacters("xyz", "zyx"))
console.log(rearrangementCharacters("xyz", "zyp"))