function fuelStatus(fuel) {
    if (fuel >= 0 && fuel <= 10) return "Empty";
    if (fuel >= 11 && fuel <= 50) return "Half";
    return "Full";
}

console.log(fuelStatus(52));