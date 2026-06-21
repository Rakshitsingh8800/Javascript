function movieRating(rating) {
    if (rating >= 0 && rating <= 4) return "Poor rating!";
    if (rating >= 5 && rating <= 7) return "Average rating"
    return "Excellent rating";
}

console.log(movieRating(4));