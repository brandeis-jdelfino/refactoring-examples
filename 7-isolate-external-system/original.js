const DatabaseClient = require('./db_client');

class UserManager {
    constructor() {
        this.db_client = new DatabaseClient();
    }

    add_user(name, age, address) {
        const connection = this.db_client.connect();
        connection.query("INSERT INTO users (name, age, address) VALUES (?, ?, ?)", [name, age, address]);
        connection.close();
    }

    update_address(name, new_address) {
        const connection = this.db_client.connect();
        connection.query("UPDATE users SET address = ? WHERE name = ?", [new_address, name]);
        connection.close();
    }

    delete_user(name) {
        const connection = this.db_client.connect();
        connection.query("DELETE FROM users WHERE name = ?", [name]);
        connection.close();
    }   
}

class PurchaseTracker {
    constructor() {
        this.db_client = new DatabaseClient();
    }

    add_purchase(user, item, quantity) {
        const connection = this.db_client.connect();
        connection.query("INSERT INTO purchases (user, item, quantity) VALUES (?, ?, ?)", [user, item, quantity]);
        connection.close();
    }
}

module.exports = {UserManager, PurchaseTracker};