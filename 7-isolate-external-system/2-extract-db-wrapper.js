class DataStore {
    constructor(db_client) {
        this.db_client = db_client
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
    
    add_purchase(user, item, quantity) {
        const connection = this.db_client.connect();
        connection.query("INSERT INTO purchases (user, item, quantity) VALUES (?, ?, ?)", [user, item, quantity]);
        connection.close();
    }
}

class UserManager {
    constructor(data_store) {
        this.data_store = data_store;
    }

    add_user(name, age, address) {
        this.data_store.add_user(name, age, address);
    }

    update_address(name, new_address) {
        this.data_store.update_address(name, new_address);
    }

    delete_user(name) {
        this.data_store.delete_user(name);
    }   
}

class PurchaseTracker {
    constructor(data_store) {
        this.data_store = data_store;
    }

    add_purchase(user, item, quantity) {
        this.data_store.add_purchase(user, item, quantity);
    }
}

module.exports = {UserManager, PurchaseTracker};