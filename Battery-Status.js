function batteryStatus(percent) {
    if (percent >= 0 && percent <= 20) return "Low";
    if (percent >= 21 && percent <= 70) return "Medium";
    return "Full"
}

console.log(batteryStatus(95));