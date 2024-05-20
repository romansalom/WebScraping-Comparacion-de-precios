const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  let pageIndex = 1;
  let hasProducts = true;

  while (hasProducts) {
    const url = `https://www.grid.com.ar/botitas/zapatillas/jordan?initialMap=b&initialQuery=jordan&map=category-2,category-2,brand&order=OrderByReleaseDateDESC&page=${pageIndex}`;
    try {
      await page.goto(url, { waitUntil: 'networkidle2' });

      // Esperar a que los elementos estén presentes en la página
      await page.waitForSelector('.vtex-product-summary-2-x-element', {
        timeout: 5000,
      });

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

      if (products.length === 0) {
        hasProducts = false;
        console.log('No se encontraron más productos.');
      } else {
        console.log(`Página ${pageIndex}:`, products);
      }
      pageIndex++;
    } catch (error) {
      console.error(`Error al procesar la URL ${url}: ${error}`);
      hasProducts = false;
    }
  }

  await browser.close();
})();
