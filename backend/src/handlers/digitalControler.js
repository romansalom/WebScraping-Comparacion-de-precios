const { chromium } = require('playwright');

const scrapeProductsFromPage = async (url) => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  try {
    await page.goto(url, { waitUntil: 'domcontentloaded' });

    // Wait for product elements
    await page.waitForSelector('.card');

    // Auto scroll function
    const autoScroll = async (page) => {
      await page.evaluate(async () => {
        await new Promise((resolve) => {
          const distance = 100;
          const delay = 100;

          const scrollInterval = setInterval(() => {
            window.scrollBy(0, distance);

            if (
              document.body.scrollHeight <=
              window.innerHeight + window.scrollY
            ) {
              clearInterval(scrollInterval);
              resolve();
            }
          }, delay);
        });
      });
    };

    // Scroll to the bottom
    await autoScroll(page);

    // Extract product information
    const products = await page.evaluate(() => {
      const productElements = document.querySelectorAll('.card');
      const productsArray = [];

      productElements.forEach((productElement) => {
        const titleElement = productElement.querySelector('h3');
        const brandElement = productElement.querySelector('.brand');
        const priceElement = productElement.querySelector('.precio');
        const imageElement = productElement.querySelector('.img'); // Image element selector

        let price = 'Precio no disponible';
        if (priceElement) {
          price = priceElement.textContent.trim().replace('.', '');
        }

        const title = titleElement
          ? titleElement.textContent.trim()
          : 'Sin título';
        const brand = brandElement
          ? brandElement.textContent.trim()
          : 'Sin marca';
        const prefix = 'https://www.digitalsport.com.ar/';

        const imageUrl = imageElement
          ? `${prefix}${imageElement.getAttribute('src')}`
          : '';
        // Get image src attribute

        productsArray.push({ title, brand, price, imageUrl }); // Add imageUrl to product object
      });

      return productsArray;
    });

    console.log(products);
    console.log(products.length);

    return products;
  } catch (error) {
    console.error(`Error al extraer productos de la URL ${url}: ${error}`);
    return [];
  } finally {
    await browser.close();
  }
};

module.exports = { scrapeProductsFromPage };
