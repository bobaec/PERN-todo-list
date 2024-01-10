const express = require("express");
const cors = require("cors");
const pool = require("./db");

const app = express();
app.use(cors());
app.use(express.json());

// routes

// post a todo
app.post("/todos", async (req, res) => {
    try {
        const { title, description, list_type, tags, list_color } = req.body;
        const newTodo = await pool.query(
            "INSERT INTO todo (title, description, list_type, tags, list_color) VALUES($1, $2, $3, $4, $5) RETURNING *",
            [title, description, list_type, tags, list_color]
        );
        res.json(newTodo.rows);
    } catch (error) {
        console.log("could not add todo because: ", error.message);
    }
});

//get all todos
app.get("/todos", async (req, res) => {
    try {
        const allTodos = await pool.query("SELECT * FROM todo");
        res.json(allTodos.rows);
    } catch (error) {
        console.log("could not get all todos because: ", error.message);
    }
});

// get a single todo
app.get("/todos/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const todo = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [
            id,
        ]);
        res.json(todo.rows);
    } catch (error) {
        console.log("could not fetch because: ", error.message);
    }
});

// update a todo
app.put("/todos/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description, list_type, tags, list_color } = req.body;
        const updateTodo = await pool.query(
            "UPDATE todo SET title = $1, description = $2, list_type = $3, tags = $4, list_color = $5 WHERE todo_id = $6",
            [title, description, list_type, tags, list_color, id]
        );
        res.json("Todo was updated");
    } catch (error) {
        console.log("could not update because: ", error.message);
    }
});

app.delete("/todos/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deleteTodo = await pool.query(
            "DELETE FROM todo where todo_id = $1",
            [id]
        );
        res.json("Todo was deleted");
    } catch (error) {
        console.log("could not delete because: ", error.message);
    }
});

app.post("/todos/search/", async (req, res) => {
    try {
        const { value } = req.body;
        const searchTodo = await pool.query(
            "SELECT * FROM todo WHERE title ILIKE '%'||$1||'%' OR description ILIKE '%'||$1||'%' OR list_type ILIKE '%'||$1||'%' OR $1 ILIKE ANY(tags)",
            [`%${value}%`]
        );
        res.json(searchTodo.rows);
    } catch (error) {
        console.log("could not search because: ", error.message);
    }
});

app.post("/todos/filter", async (req, res) => {
    try {
        const value = req.body;
        const filterTodoByList = await pool.query(
            "SELECT * FROM todo WHERE list_type = $1 AND list_color = $2",
            [value.list_type, value.list_color]
        );
        res.json(filterTodoByList.rows);
    } catch (error) {
        console.log("could not search because: ", error.message);
    }
});
app.listen(5000, () => {
    console.log("Server listening on port 5000");
});
