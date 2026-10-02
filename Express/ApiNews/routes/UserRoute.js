const express = require('express');
const controller = require('../controllers/UserController');
const { validatorUserCreate, validatorUserUpdate } = require('../validators/UserValidator');
const { validateRequest } = require('../middleware/ValidateRequest');

const api = express.Router();

api.get('/usuarios', controller.getUsers);
api.get('/usuarios/:id', controller.getUser);
api.post('/usuarios', validatorUserCreate, validateRequest, controller.createUser);
api.put('/usuarios/:id', validatorUserUpdate, validateRequest, controller.updateUser);
api.delete('/usuarios/:id', controller.deleteUser);

module.exports = api;
