const mongoose = require("mongoose");

const connectToDatabase = () => {
    mongoose
        .connect("mongodb://127.0.0.1/todolist-ais", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        })
        .then(() => {
            console.log("Connected to database");
        })
        .catch((error) => console.log(error));
};

module.exports = {
    connect: connectToDatabase,
};