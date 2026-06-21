function ageCategory(age) {
    if (age >= 0 && age <= 12) return "Kid";
    if (age >= 13 && age <= 17) return "Teen";
    if (age >= 18 && age <= 59) return "Adult";
    if (age >= 60) return "Senior";

    return "Invalid Age";
}

console.log(ageCategory(42));