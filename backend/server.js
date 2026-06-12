const dashboardRoutes = require("./routes/dashboard");
const express = require("express");
const cors = require("cors");
const db = require("./db");

const studentRoutes = require("./routes/students");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Student Dashboard Backend Running");
});

app.use("/students", studentRoutes);
app.use("/dashboard", dashboardRoutes);

app.listen(5000, () => {
    console.log("Server running on port 5000");
});