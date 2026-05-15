const express = require('express');
const router = express.Router();
const controller = require('../controller/pedidocontroller');

// Asegúrate que estos nombres coincidan EXACTAMENTE con los de tu pedidocontroller.js
router.post('/', controller.registrarNota); 
router.get('/lista', controller.listarNotas); 

module.exports = router;