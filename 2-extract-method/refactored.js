const prompt = require('prompt-sync')();

function calc_bmi(weight_kg, height_cm) {
    const height_m = height_cm / 100
    return weight_kg / height_m ** 2    
}

function main() {
    const weight_kg = prompt("Enter Weight in kgs:")
    const height_cm = prompt("Enter height in cms:")
    print("BMI is: ", calc_bmi(weight_kg, height_cm));
}

module.exports = calc_bmi;