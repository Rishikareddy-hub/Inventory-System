const express = require("express");
const router = express.Router();
const db = require("../config/db");

router.post("/login", (req, res) => {
    const { email, password } = req.body;  // <-- THIS FIXED THE ERROR

    if (!email || !password) {
        return res.status(400).json({ message: "Email and password are required" });
    }

    const sql = "SELECT * FROM users WHERE email = ?";
    db.query(sql, [email], (err, result) => {
        if (err) return res.status(500).json({ message: "Database error" });

        if (result.length === 0) {
            return res.status(401).json({ message: "User does not exist" });
        }

        if (result[0].password !== password) {
            return res.status(401).json({ message: "Incorrect password" });
        }

        return res.json({ message: "Login successful" });
    });
});

module.exports = router;
