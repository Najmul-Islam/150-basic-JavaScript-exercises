function strConCat(str1, str2) {
    const m = Math.min(str1.length, str2.length);
    console.log(m);

    return str1.substring(str1.length - m) + str2.substring(str2.length - m);
}

console.log(strConCat("Python", "JS"));
console.log(strConCat("ab", "cdef"));