function examStatus(totalMark, isExam) {
    if (isExam) {
        return totalMark >= 90;
    } else {
        return (totalMark >= 89 && totalMark <= 100);
    }
}

console.log(examStatus("78", " "));
console.log(examStatus("89", "true "));
console.log(examStatus("99", "true "));