const puppeteer = require('puppeteer');

// Define la lista de URLs que quieres visitar
const urls = [
  'https://www.grid.com.ar/botitas/zapatillas/jordan?initialMap=b&initialQuery=jordan&map=category-2,category-2,brand&order=OrderByReleaseDateDESC&page=1',
  'https://www.grid.com.ar/botitas/zapatillas/jordan?initialMap=b&initialQuery=jordan&map=category-2,category-2,brand&order=OrderByReleaseDateDESC&page=2',

  // Agrega más URLs aquí según sea necesario
];

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  for (let i = 0; i < urls.length; i++) {
    const url = urls[i];
    try {
      await page.goto(url);

      // Esperar a que los elementos estén presentes en la página
      await page.waitForSelector('.vtex-product-summary-2-x-element');

      const products = await page.evaluate(() => {
        const productElements = document.querySelectorAll(
          '.vtex-product-summary-2-x-element'
        );
        const productsArray = [];
        productElements.forEach((productElement) => {
          const titleElement = productElement.querySelector(
            '.vtex-product-summary-2-x-productBrand'
          );
          const priceElement = productElement.querySelector(
            '.vtex-product-summary-2-x-currencyInteger.vtex-product-summary-2-x-currencyInteger--product-box'
          );
          const priceDecimalElement = productElement.querySelector(
            '.vtex-product-summary-2-x-currencyFraction.vtex-product-summary-2-x-currencyFraction--product-box'
          );
          const imageElement = productElement.querySelector(
            '.vtex-product-summary-2-x-imageNormal'
          );

          const title = titleElement
            ? titleElement.textContent.trim()
            : 'Sin título';
          const price = priceElement
            ? parseInt(priceElement.textContent.trim()) * 1000 + 999
            : 0;
          const priceDecimal = priceDecimalElement
            ? parseInt(priceDecimalElement.textContent.trim())
            : 0;
          const imageUrl = imageElement
            ? imageElement.getAttribute('src')
            : 'Imagen no encontrada';

          productsArray.push({ title, price, priceDecimal, imageUrl });
        });
        return productsArray;
      });

      console.log(products);
      console.log(products.length);
    } catch (error) {
      console.error(`Error al procesar la URL ${url}: ${error}`);
      // Si hay un error, continúa con la siguiente URL
      continue;
    }
  }

  await browser.close();
})();
