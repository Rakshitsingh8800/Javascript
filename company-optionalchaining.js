let company = {
    name: "Neonex Corporation",
    founder: {
        personal: {
            firstName: "Rakshit",
            lastName: "Singh"
        }
    }
};

console.log(company.name);
console.log(company.founder.personal.firstName);
console.log(company?.founder?.personal?.middlename);
