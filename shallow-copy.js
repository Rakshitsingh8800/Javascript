let laptop = {
    brand: "ASUS",
    specs: {
        ram: "16GB"
    }
};

let copy = { ...laptop };

copy.specs.ram = "32GB";

console.log(laptop);
console.log(copy);
