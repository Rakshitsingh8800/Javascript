const user = {
    title: "Coding",
    ProgammingLng: "Javascript"
};

Object.entries(user).forEach(function (val) {
    console.log(val[0] + ": " + val[1]);
})
