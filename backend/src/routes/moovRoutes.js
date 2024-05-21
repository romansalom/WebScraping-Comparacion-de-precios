const express = require('express');
const router = express.Router();
const { fetchProducts } = require('../handlers/moovControler.js'); //');
// Tus rutas aquí
router.get('/ruta', (req, res) => {
  res.send('Respuesta de la ruta');
});
router.get('', async (req, res) => {
  try {
    const products = await fetchProducts();
    res.json(products);
    console.log(products.length);
  } catch (error) {
    console.error('Error scraping products:', error);
    res.status(500).send('Error scraping products');
  }
});

module.exports = router;
