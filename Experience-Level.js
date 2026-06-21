function experienceLevel(years) {
    if (years >= 0 && years <= 1) return "Beginner";
    if (years >=2 && years <= 5) return "Intermediate";
    return "Expert"
}

console.log(experienceLevel(25));