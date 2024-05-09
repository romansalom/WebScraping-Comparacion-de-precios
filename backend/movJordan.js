const puppeteer = require('puppeteer');

(async () => {
  // Inicia el navegador headless
  const browser = await puppeteer.launch();
  // Abre una nueva página
  const page = await browser.newPage();
  // Navega a la URL deseada
  await page.goto(
    'https://www.moov.com.ar/buscar?q=zapatillas+jordan&start=0&sz=72'
  );

  // Extrae la información de los productos
  const products = await page.evaluate(() => {
    let items = [];
    document.querySelectorAll('.pdp-link').forEach((product) => {
      let titleElement = product.querySelector('a.link');
      let title = titleElement
        ? titleElement.textContent.trim()
        : 'Title not found';

      let priceElement = product
        .closest('.product')
        .querySelector('.price .value');
      let price = priceElement
        ? priceElement.getAttribute('content')
        : 'Price not found';

      let imageElement = product
        .closest('.product')
        .querySelector('.product-image-container img.tile-image');
      let imageUrl = imageElement
        ? imageElement.getAttribute('src')
        : 'Image not found';

      items.push({ title, price, imageUrl });
    });
    return items;
  });

  // Muestra los productos en la consola
  console.log(products);
  console.log(products.length);
  // Cierra el navegador
  await browser.close();
})();
