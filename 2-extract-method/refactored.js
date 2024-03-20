const prompt = require('prompt-sync')();

// We've made this code more readable by extracting related logic into a function with a clear name.
function calc_bmi(weight_kg, height_cm) {
    const height_m = height_cm / 100
    return weight_kg / height_m ** 2    
}

function main() {
    const weight_kg = prompt("Enter Weight in kgs:")
    const height_cm = prompt("Enter height in cms:")
    console.log("BMI is: ", calc_bmi(weight_kg, height_cm));
}

module.exports = calc_bmi;