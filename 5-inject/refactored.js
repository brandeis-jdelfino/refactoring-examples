
// We've made the function testable by dependency-injecting a function for output.
function print_temp_stats(temp_farenheit, emit) {
    const temp_celcius = (temp_farenheit - 32) * 5 / 9;
    console.log("Temperature is: ", temp_celcius ,"C")

    if (temp_celcius > 37) { 
        emit("It's really hot!");
    } else if (temp_celcius < 10) {
        emit("It's really cold!");
    } else {
        emit("It's moderate!");
    }
}

module.exports = print_temp_stats;