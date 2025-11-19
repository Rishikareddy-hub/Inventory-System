const express = require('express');
const cors = require('cors');
require('dotenv').config();
require('./config/db');


const authRoutes = require('./routes/auth');
const productRoutes = require('./routes/products');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);

app.get('/', (req, res) => res.send('Inventory API running'));



const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
