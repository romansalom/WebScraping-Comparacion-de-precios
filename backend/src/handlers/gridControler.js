const { chromium } = require('playwright');

const scrapeProductsFromPage = async (page, url) => {
  try {
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
          ? parseInt(priceElement.textContent.trim())
          : 0;
        const priceDecimal = priceDecimalElement
          ? parseInt(priceDecimalElement.textContent.trim())
          : 0;
        const imageUrl = imageElement
          ? imageElement.getAttribute('src')
          : 'Imagen no encontrada';

        // El precio total en centavos
        const totalPrice = price * 100 + priceDecimal;

        productsArray.push({ title, price: totalPrice, imageUrl });
      });

      return productsArray;
    });

    return products;
  } catch (error) {
    console.error(`Error al extraer productos de la URL ${url}: ${error}`);
    return [];
  }
};

const fetchProducts = async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  let pageIndex = 1;
  let hasProducts = true;
  const productsMap = new Map();

  while (hasProducts) {
    const url = `https://www.grid.com.ar/botitas/zapatillas/jordan?initialMap=b&initialQuery=jordan&map=category-2,category-2,brand&order=OrderByReleaseDateDESC&page=${pageIndex}`;
    try {
      const products = await scrapeProductsFromPage(page, url);

      if (products.length === 0) {
        hasProducts = false;
        console.log('No se encontraron más productos.');
      } else {
        products.forEach((product) => {
          const productKey = `${product.title}-${product.imageUrl}`;
          if (!productsMap.has(productKey)) {
            productsMap.set(productKey, { ...product, key: productKey });
          }
        });
        pageIndex++;
      }
    } catch (error) {
      console.error(`Error al procesar la URL ${url}: ${error}`);
      hasProducts = false;
    }
  }

  await browser.close();
  // Convertir el mapa en un arreglo de productos
  const combinedProductsArray = Array.from(productsMap.values());
  console.log(combinedProductsArray);
  return combinedProductsArray; // Este es el arreglo combinado sin duplicados
};

module.exports = { fetchProducts };
