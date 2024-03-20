// We've made the code a little more readable by doing all the error checking up front, and
// returning early if any of the conditions are not met.
// This change also makes it easier to perform a follow on refactoring that extracts the
// calculation code into its own function.

function calculatePropertyPrice(property) {
    if (!property) {
        return null;
    }

    if (!property.location || !property.size || !property.bedrooms) {)
        return null;
    }

    if (property.location !== 'city' && property.location !== 'suburb') {
        return null;
    }

    if (property.location === 'city') {
        if (property.size < 1000) {
            return 200000;
        } else if (property.size < 2000) {
            return 300000;
        } else {
            return 400000;
        }
    } else if (property.location === 'suburb') {
        if (property.size < 1000) {
            return 150000;
        } else if (property.size < 2000) {
            return 250000;
        } else {
            return 350000;
        }
    }
}
