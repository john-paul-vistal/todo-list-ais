const express = require("express");
const router = express.Router();

const {
    getTodos,
    addTodo,
    getTodoById,
    updateTodo,
    deleteTodo,
} = require("../controllers/todoController");

router.get("/", getTodos);
router.get("/:id", getTodoById);
router.post("/", addTodo);
router.post("/:id", updateTodo);
router.get("/delete/:id", deleteTodo);


module.exports = router;