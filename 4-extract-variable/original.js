function print_temp_stats(temp_farenheit) {
    console.log("Temperature is: ", (temp_farenheit - 32) * 5 / 9 ,"C")

    if (((temp_farenheit - 32) * 5 / 9) > 37) { 
        console.log("It's really hot!");
    } else if (((temp_farenheit - 32) * 5 / 9) < 10) {
        console.log("It's really cold!");
    } else {
        console.log("It's moderate!");
    }
}

module.exports = print_temp_stats;