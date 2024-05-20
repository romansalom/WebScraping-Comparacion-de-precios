const express = require('express');
const cors = require('cors');
const router = require('./src/routes/index.js');
const app = express();
const port = 3000;

// Aquí se habilita CORS para todas las rutas
app.use(cors());
app.use(router);
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
