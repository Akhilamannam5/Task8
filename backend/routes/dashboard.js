const express = require("express");
const router = express.Router();
const db = require("../db");

router.get("/stats", (req, res) => {

    const sql = `
    SELECT
    COUNT(*) AS totalStudents,

    SUM(CASE
        WHEN status='Active'
        THEN 1
        ELSE 0
    END) AS activeStudents,

    SUM(completed_courses) AS completedCourses,

    AVG(performance_score) AS averageScore

    FROM students
    `;

    db.query(sql, (err, result) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(result[0]);
        }
    });

});

module.exports = router;