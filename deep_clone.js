let obj = {
  name: "Rakshit",
  age: 14,
  email: "test@yahoo.com",
  address: {
    city: "Gurgaon, Haryana",
  },
};

let obj2 = JSON.parse(JSON.stringify(obj));
console.log(obj);
