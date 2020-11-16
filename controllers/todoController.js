const { replaceOne } = require("../models/todo.model");
const Todo = require("../models/todo.model");
const parseRequestBody = require("../utils/parseRequestBody");

const getTodos = async(request, response) => {
    try {
        const todo = await Todo.find();
        if (!todo) {
            return response.status(400).json({
                error: "Error in getting todo list!",
            });
        }
        response.render("index", {
            todoList: todo
        })
    } catch (e) {
        return response.status(400).json({
            error: e,
        });
    }
};

const getTodoById = async(request, response) => {
    try {
        const todo = await Todo.find({ _id: request.params.id });

        if (!todo || todo.length === 0) {
            return response.status(400).json({
                error: "Todo not found!",
            });
        }

        response.status(200).json({
            todo: todo,
        });
    } catch (e) {
        return response.status(400).json({
            error: e,
        });
    }
};

const addTodo = async(request, response) => {
    try {
        const todo = {
            title: request.body.title,
            content: request.body.content
        };

        const newTodo = new Todo(todo);
        const result = await newTodo.save();

        if (!result) {
            return response.status(400).json({
                error: "Error in adding new Todo!",
            });
        }

        response.redirect('./')

    } catch (e) {
        return response.status(400).json({
            error: e,
        });
    }
};

const updateTodo = async(request, response) => {
    const updates = parseRequestBody(request.body);
    try {
        const result = await Todo.updateOne({ _id: request.params.id }, { $set: updates });
        if (!result) {
            return response.status(400).json({
                error: "Error in updating todo!",
            });
        }

        response.redirect('./')

    } catch (e) {
        return response.status(400).json({
            error: e,
        });
    }
};

const deleteTodo = async(request, response) => {
    try {
        await Todo.deleteOne({ _id: request.params.id }, (error, result) => {
            if (error) {
                return response.status(400).json({
                    error: error,
                });
            }

            response.redirect('../')
        });
    } catch (e) {
        return response.status(400).json({
            error: e,
        });

    }
};

module.exports = {
    getTodos,
    addTodo,
    getTodoById,
    updateTodo,
    deleteTodo,
};