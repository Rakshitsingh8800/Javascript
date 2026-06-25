let prices = [1000, 5000, 15000, 20000];

let newprices = prices.find((prices)=>{
    return prices > 10000;
});

console.log(newprices);
