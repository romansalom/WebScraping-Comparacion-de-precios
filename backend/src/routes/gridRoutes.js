const express = require('express');
const router = express.Router();
const { fetchProducts } = require('../handlers/gridControler.js');
router.get('', async (req, res) => {
  try {
    const products = await fetchProducts();
    res.json(products);
  } catch (error) {
    console.error('Error al obtener productos:', error);
    res.status(500).send('Error al obtener productos');
  }
});

module.exports = router;
