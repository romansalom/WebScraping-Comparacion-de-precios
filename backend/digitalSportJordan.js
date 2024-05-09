const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  const url =
    'https://www.digitalsport.com.ar/search/?search=zapatillas%20jordan&category[2]=1';
  await page.goto(url);

  // Esperar a que los elementos estén presentes en la página
  await page.waitForSelector('.card');

  // Función para hacer scroll automático
  async function autoScroll(page) {
    await page.evaluate(async () => {
      await new Promise((resolve, reject) => {
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
  }

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

  await browser.close();
})();
