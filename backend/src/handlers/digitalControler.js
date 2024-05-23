const { chromium } = require('playwright');

const scrapeProductsFromPage = async (url) => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  try {
    await page.goto(url, { waitUntil: 'domcontentloaded' });

    // Esperar a que los elementos estén presentes en la página
    await page.waitForSelector('.card');

    // Función para hacer scroll automático
    const autoScroll = async (page) => {
      await page.evaluate(async () => {
        await new Promise((resolve) => {
          // Definir la distancia y el intervalo del scroll
          const distance = 100;
          const delay = 100;

          // Función de scroll
          const scrollInterval = setInterval(() => {
            // Scroll hacia abajo
            window.scrollBy(0, distance);

            // Verificar si se ha llegado al final de la página
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

    // Realizar scroll automático hasta el final de la página
    await autoScroll(page);

    // Extraer la información de los productos
    const products = await page.evaluate(() => {
      const productElements = document.querySelectorAll('.card');
      const productsArray = [];

      productElements.forEach((productElement) => {
        const titleElement = productElement.querySelector('h3');
        const brandElement = productElement.querySelector('.brand');
        const priceElement = productElement.querySelector('.precio');

        let price = 'Precio no disponible';
        if (priceElement) {
          // Remover el punto de los valores de precio
          price = priceElement.textContent.trim().replace('.', '');
        }

        const title = titleElement
          ? titleElement.textContent.trim()
          : 'Sin título';
        const brand = brandElement
          ? brandElement.textContent.trim()
          : 'Sin marca';

        productsArray.push({ title, brand, price });
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
