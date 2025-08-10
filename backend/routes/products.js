
const express = require('express');
const router = express.Router();
const Product = require('../models/Product');


router.get('/', async (req, res) => {
  const { search, sort } = req.query;
  const filter = search ? { name: { $regex: search, $options: 'i' } } : {};
  const sortOption = sort === 'asc' ? { price: 1 } : sort === 'desc' ? { price: -1 } : {};
  const products = await Product.find(filter).sort(sortOption);
  res.json(products);
});


router.post('/', async (req, res) => {
  const newProduct = new Product(req.body);
  await newProduct.save();
  res.json(newProduct);
});


router.delete('/:id', async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ success: true });
});


router.get('/:id', async (req, res) => {
  const product = await Product.findById(req.params.id);
  res.json(product);
});


router.put('/:id', async (req, res) => {
  const updated = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

module.exports = router;
