const prompt = require('prompt-sync')();

function main() {
    const weight = prompt("Enter Weight in kgs:")
    const height = prompt("Enter height in cms:")
    const heightInM = height / 100
    const BMI = weight / heightInM ** 2
    console.log("BMI is: ", BMI)
}