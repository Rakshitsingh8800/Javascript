function dayType(day) {
    if (day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday") return "Weekday!";
    if (day === "Sunday" || day === "Saturday") return "Weekend!";
    return "Invalid days!";
}

console.log(dayType("Sunday"));