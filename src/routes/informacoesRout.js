const express = require('express');

const informacoesController = require('../controllers/informacoesController');

const Router = express.Router();

Router.get('/1', informacoesController.getInformacoes)
Router.post('/', informacoesController.createInformacoes)
Router.delete('/1', informacoesController.deleteInformacoes)
Router.put('/1', informacoesController.updateInformacoes)

module.exports = Router