const express = require('express');
const controller = require('../controllers/StateController');
const { validatorStateRequire, validatorStateOptional } = require('../validators/StateValidator');
const { validateRequest } = require('../middleware/ValidateRequest');

const api = express.Router();

api.get('/estados', controller.getStates);
api.post('/estados', validatorStateRequire, validateRequest, controller.createState);
api.put('/estados/:id', validatorStateOptional, validateRequest, controller.updateState);
api.delete('/estados/:id', controller.deleteState);

module.exports = api;
