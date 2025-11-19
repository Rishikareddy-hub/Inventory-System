-- Create DB (run as a user that can create DB)
CREATE DATABASE IF NOT EXISTS inventory_db;
USE inventory_db;

-- Users table (simple)
CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(100) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Products
CREATE TABLE IF NOT EXISTS products (
  id INT AUTO_INCREMENT PRIMARY KEY,
  product_name VARCHAR(200) NOT NULL,
  quantity INT NOT NULL DEFAULT 0,
  price DECIMAL(10,2) NOT NULL DEFAULT 0,
  category VARCHAR(100) DEFAULT '',
  date_added TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Seed admin user (password: admin123)
-- Generate hash with bcrypt (we'll also show a quick way)
-- For convenience, here's a pre-hashed password for "admin123" using bcrypt cost 10:
INSERT INTO users (username, password_hash)
VALUES ('admin', '$2b$10$2v2qQ4pFv2nYb5Qn7pQeOe6q1q8VwqT4rQ7xT3QHbq2v1oE1N0xQy');

-- Seed some products
INSERT INTO products (product_name, quantity, price, category) VALUES
('Red T-shirt', 50, 9.99, 'Apparel'),
('Blue Jeans', 20, 24.99, 'Apparel'),
('USB-C Cable', 100, 5.49, 'Accessories'),
('Laptop 14-inch', 5, 699.00, 'Electronics');
