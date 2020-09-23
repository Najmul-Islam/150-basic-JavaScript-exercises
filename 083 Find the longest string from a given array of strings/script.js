function longestStr(str) {
    var max = str[0].length;
    str.map(value => max = Math.max(max, value.length));

    result = str.filter(value => value.length == max);
    return result;
}

console.log(longestStr(['a', 'aa', 'aaa', 'aaaaa', 'aaaa']));