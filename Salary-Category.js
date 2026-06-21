function salaryCategory(salary) {
    if (salary >= 0 && salary <= 20000) return "Low";
    if (salary >= 20001 && salary <= 50000) return "Medium";
    return "High";
}

console.log(salaryCategory(18001));