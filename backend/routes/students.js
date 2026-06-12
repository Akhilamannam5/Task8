const express = require("express");
const router = express.Router();
const db = require("../db");

// Get all students
router.get("/", (req, res) => {
    const sql = "SELECT * FROM students";

    db.query(sql, (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send(err);
        } else {
            res.json(result);
        }
    });
});
// Search students
router.get("/search/data", (req, res) => {

    const { name, id } = req.query;

    let sql = "SELECT * FROM students WHERE 1=1";
    let values = [];

    if (name) {
        sql += " AND student_name LIKE ?";
        values.push("%" + name + "%");
    }

    if (id) {
        sql += " AND id=?";
        values.push(id);
    }

    db.query(sql, values, (err, result) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(result);
        }
    });

});
// Get student by ID
router.get("/:id", (req, res) => {
    const id = req.params.id;

    const sql = "SELECT * FROM students WHERE id=?";

    db.query(sql, [id], (err, result) => {
        if (err) {
            res.status(500).send(err);
        } else {
            if (result.length === 0) {
                res.status(404).json({
                    message: "Student not found"
                });
            } else {
                res.json(result[0]);
            }
        }
    });
});
module.exports = router;