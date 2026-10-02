const express = require('express');
const controller = require('../controllers/NewController');
const { validatorNewCreate, validatorNewUpdate } = require('../validators/NewValidator');
const { validateRequest } = require('../middleware/ValidateRequest');
const { auth } = require('../middleware/Auth');

const api = express.Router();

api.get('/noticias', controller.getNews);
api.get('/noticias/:id', controller.getNew);
api.post('/noticias', auth, validatorNewCreate, validateRequest, controller.createNew);
api.put('/noticias/:id', auth, validatorNewUpdate, validateRequest, controller.updateNew);
api.delete('/noticias/:id', auth, controller.deleteNew);

module.exports = api;
