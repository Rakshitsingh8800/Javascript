let isLoggedIn = true;
let postText = "Hello World!";

if (isLoggedIn  && postText !== "") {
    console.log("Post created: " + postText);
} else {
    console.log("Please log in and enter text to create a post.")
}