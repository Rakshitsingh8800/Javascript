function checkSpeed(speed) {
    if (speed >= 0 && speed <= 30) return "Slow";
    if (speed >= 31 && speed <= 80) return "Normal";
    return "Fast";
}
console.log(checkSpeed(62));