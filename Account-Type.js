function accountType(posts) {
    if (posts === 0) return "Guest";
    if (posts >= 1 && posts <= 99) return "User";
    if (posts >= 100 && posts <= 999) return "Creator";
    return "Celebrity";
}

console.log(accountType(0));