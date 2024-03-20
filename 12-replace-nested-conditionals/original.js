function calculatePropertyPrice(property) {
    if (property) {
        if (property.location && property.size && property.bedrooms) {
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
            } else {
                return null;
            }
        } else {
            return null;
        }
    } else {
        return null;
    }
}