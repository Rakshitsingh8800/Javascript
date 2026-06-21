function signalStrength(bars) {
    if (bars >= 0 && bars <= 2) return "Weak Signals!";
    if (bars >= 3 && bars <= 4) return "Moderate Signals";
    return "Strong Signals"
}

console.log(signalStrength(2));