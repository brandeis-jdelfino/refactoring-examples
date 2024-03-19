class DatabaseClient {
    connect() {
        console.log("Connecting to database...");
    }
    query(sql, params) {
        console.log("Executing query: ", sql, " with params: ", params);
    }
    close() {
        console.log("Closing connection...");
    }
}

module.exports = DatabaseClient