function print_temp_stats(temp_farenheit) {
    const temp_celcius = (temp_farenheit - 32) * 5 / 9;

    if (temp_celcius > 37) { 
        console.log("Temperature is: ", temp_celcius ,"C")
        console.log("It's really hot!");
    } else if (temp_celcius < 10) {
        console.log("Temperature is: ", temp_celcius ,"C")
        console.log("It's really cold!");
    } else {
        console.log("Temperature is: ", temp_celcius ,"C")
        console.log("It's moderate!");
    }
}

module.exports = print_temp_stats;