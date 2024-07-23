const express = require('express');

const portfolioController = require('../controllers/portfolioController');

const Router = express.Router();

Router.get('/', portfolioController.getAllPortfolio)
Router.get('/:id', portfolioController.getPortfolioById)
Router.post('/', portfolioController.createPortfolio)
Router.put('/:id', portfolioController.updatePortfolio)
Router.delete('/:id', portfolioController.deletePortfolio)

module.exports = Router