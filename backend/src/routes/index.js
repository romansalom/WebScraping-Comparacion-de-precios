// En tu archivo de rutas, por ejemplo, routes/index.js
const express = require('express');
const cors = require('cors');
const moovRouters = require('./moovRoutes.js');
const gridRouters = require('./gridRoutes.js');
const digitalRouters = require('./digitialRoute.js');

const router = express.Router();

// Habilitar CORS para todas las solicitudes
router.use(cors());

// Aquí puedes agregar tus rutas
// Asegúrate de que el primer argumento sea la ruta base, por ejemplo '/moov'
router.use('/moov', moovRouters);
router.use('/grid', gridRouters);
router.use('/digital', digitalRouters);

// Exportar el router
module.exports = router;
