const { chromium } = require('playwright');

const scrapeProductsFromPage = async (page, url) => {
  await page.goto(url, { waitUntil: 'domcontentloaded' });

  await page.waitForSelector('.vtex-product-summary-2-x-element', {
    timeout: 10000,
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

  return products;
};

const fetchProducts = async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  let pageIndex = 1;
  let hasProducts = true;
  let allProducts = [];

  while (hasProducts) {
    const url = `https://www.grid.com.ar/botitas/zapatillas/jordan?initialMap=b&initialQuery=jordan&map=category-2,category-2,brand&order=OrderByReleaseDateDESC&page=${pageIndex}`;
    try {
      const products = await scrapeProductsFromPage(page, url);

      if (products.length === 0) {
        hasProducts = false;
        console.log('No se encontraron más productos.');
      } else {
        allProducts = allProducts.concat(products);
        console.log(`Página ${pageIndex}:`, products);
      }
      pageIndex++;
    } catch (error) {
      console.error(`Error al procesar la URL ${url}: ${error}`);
      hasProducts = false;
    }
  }

  await browser.close();
  return allProducts;
};

module.exports = { fetchProducts };
