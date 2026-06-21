function passwordStrength(length) {
    if (length <=6 ) return "Weak Password!";
    if (length >=7 && length <= 10) return "Good Password";
    return "Strong Password"
}

console.log(passwordStrength(12));