function creatorLevel(followers) {
    if (followers >= 0 && followers <= 1000) return "New Creator";
    if (followers >= 1001 && followers <= 10000) return "Growing Creator";
    return "Influencer";
}

console.log(creatorLevel(25000));