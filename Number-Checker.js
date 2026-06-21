function checkNumber(num) {
    if (num < 0) return "Negative";
    if (num > 0) return "Positive";
    return "Zero";
}

console.log(checkNumber(-50));