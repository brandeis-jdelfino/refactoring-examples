class DataStore {
    constructor(db_client) {
        this.db_client = db_client
    }

    _execute_query(query, params) {
        const connection = this.db_client.connect();
        connection.query(query, params);
        connection.close();
    }

    add_user(name, age, address) {
        this._execute_query("INSERT INTO users (name, age, address) VALUES (?, ?, ?)", [name, age, address]);
    }

    update_address(name, new_address) {
        this._execute_query("UPDATE users SET address = ? WHERE name = ?", [new_address, name]);
    }

    delete_user(name) {
        this._execute_query("DELETE FROM users WHERE name = ?", [name]);
    }
    
    add_purchase(user, item, quantity) {
        this._execute_query("INSERT INTO purchases (user, item, quantity) VALUES (?, ?, ?)", [user, item, quantity]);
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