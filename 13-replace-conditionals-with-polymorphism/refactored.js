// We've created classes for the different property types, and moved the price calculation logic into
// them. This has vastly improved upon the original code, which had a deeply nested and confusing conditionals.

// Note that we've now separated seemingly related logic - calculating the price of a property - into
// separate classes. This is a tradeoff for improved readability of the property price calculation.

// This type of change would be more justified if we expected price calculation logic to diverge over time,
// and less justified if we expected it to stay very similar, and differ only by price ranges.

class GenericProperty {
    constructor(size) {
        this.size = size;
    }

    getPropertyPrice() {
        return null;
    }
}

class SuburbanProperty {
    constructor(size) {
        this.size = size;
    }

    getPropertyPrice() {
        if (this.size < 1000) {
            return 150000;
        } else if (this.size < 2000) {
            return 250000;
        } else {
            return 350000;
        }
    }
}

class UrbanProperty {
    constructor(size) {
        this.size = size;
    }

    getPropertyPrice() {
        if (property.size < 1000) {
            return 200000;
        } else if (property.size < 2000) {
            return 300000;
        } else {
            return 400000;
        }
    }
}

function calculatePropertyPrice(property) {
    if (!property) {
        return null;
    }
    return property.getPropertyPrice();
}
