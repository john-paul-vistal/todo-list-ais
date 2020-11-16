const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TodoListSchema = Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    dateCreated: { type: Date, required: true, default: Date.now() }
});

const TodoList = mongoose.model("Todo", TodoListSchema);

module.exports = TodoList;