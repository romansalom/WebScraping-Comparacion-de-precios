const express = require('express');
const router = express.Router();
const { scrapeProductsFromPage } = require('../handlers/digitalControler.js');

router.get('', async (req, res) => {
  const url =
    'https://www.digitalsport.com.ar/search/?search=zapatillas%20jordan&category[2]=1';

  try {
    const products = await scrapeProductsFromPage(url);
    res.json(products);
    console.log(products.length);
  } catch (error) {
    console.error('Error al obtener productos:', error);
    res.status(500).send('Error al obtener productos');
  }
});
module.exports = router;
