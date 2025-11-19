const mysql = require("mysql2");

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Password@o98",   // YOUR PASSWORD
    database: "inventory"       // YOUR DATABASE NAME
});

db.connect(err => {
    if (err) throw err;
    console.log("MySQL Connected");
});

module.exports = db;
