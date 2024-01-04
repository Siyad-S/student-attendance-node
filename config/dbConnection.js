const mongoose = require("mongoose");

const dbConnection = async () => {
    try {
        const connect = await mongoose.connect(`mongodb+srv://siyad:12345@siyad-cluster.gvtvydb.mongodb.net/student-attendance?retryWrites=true&w=majority`);
        console.log(
            "Database connected: ",
            connect.connection.host,
            connect.connection.name
        );
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
};

module.exports = dbConnection;