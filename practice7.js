let battery = 85;
let chargerConnected = true;

if (battery <= 90 && chargerConnected === true) {
    console.log("Charging Normally");
} else {
    console.log("Not Charging");
}