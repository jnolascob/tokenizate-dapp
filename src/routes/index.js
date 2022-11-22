const express = require('express');
const tokenController = require('../controllers/tokenController');

const Router = express.Router();

// Aqui puede configurar el Router
Router.post('/token', tokenController.createToken);

module.exports = Router;

