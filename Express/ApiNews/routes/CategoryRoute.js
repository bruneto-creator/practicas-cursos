const express = require('express');
const controller = require('../controllers/CategoryController');
const { validatorCategoryCreate, validatorCategoryUpdate } = require('../validators/CategoryValidator');
const { validateRequest } = require('../middleware/ValidateRequest');

const api = express.Router();

api.get('/categorias', controller.getCategories);
api.get('/categorias/:id', controller.getCategory);
api.post('/categorias', validatorCategoryCreate, validateRequest, controller.createCategory);
api.put('/categorias/:id', validatorCategoryUpdate, validateRequest, controller.updateCategory);
api.delete('/categorias/:id', controller.deleteCategory);

module.exports = api;
