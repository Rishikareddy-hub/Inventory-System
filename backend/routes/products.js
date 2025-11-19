const express = require('express');
const router = express.Router();
const db = require('../config/db');

router.get('/', (req, res) => {
  db.query("SELECT * FROM products", (err, result) => {
    if (err) return res.status(500).json({ message: "Database error" });
    res.json(result);
  });
});

router.post('/', (req, res) => {
  const { name, quantity, price } = req.body;
  db.query(
    "INSERT INTO products (name, quantity, price) VALUES (?, ?, ?)",
    [name, quantity, price],
    (err, result) => {
      if (err) return res.status(500).json({ message: "Database error" });
      res.json({ message: "Product added" });
    }
  );
});

router.put('/:id', (req, res) => {
  const { quantity } = req.body;
  db.query(
    "UPDATE products SET quantity = ? WHERE id = ?",
    [quantity, req.params.id],
    (err) => {
      if (err) return res.status(500).json({ message: "Database error" });
      res.json({ message: "Product updated" });
    }
  );
});

router.delete('/:id', (req, res) => {
  db.query(
    "DELETE FROM products WHERE id = ?",
    [req.params.id],
    (err) => {
      if (err) return res.status(500).json({ message: "Database error" });
      res.json({ message: "Product deleted" });
    }
  );
});

module.exports = router;
