function print_temp_stats(temp_farenheit) {
    // We've simplified logic by extracting a repeatedly calculated value into a temporary variable.
    const temp_celcius = (temp_farenheit - 32) * 5 / 9;
    console.log("Temperature is: ", temp_celcius ,"C")

    if (temp_celcius > 37) { 
        console.log("It's really hot!");
    } else if (temp_celcius < 10) {
        console.log("It's really cold!");
    } else {
        console.log("It's moderate!");
    }
}

module.exports = print_temp_stats;