
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const productRoutes = require('./routes/products');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

app.use('/api/products', productRoutes);

app.listen(5000, () => console.log('Server started on port 5000'));
