function getTemperature(temp) {
    if (temp <=0) return "Freezing";
    if (temp >=1 && temp <= 15) return "Cold";
    if (temp >=16 && temp <= 29) return "Warm";
    if (temp >=30) return "Hot";

    return "Invalid Data!";
}

console.log(getTemperature(15));