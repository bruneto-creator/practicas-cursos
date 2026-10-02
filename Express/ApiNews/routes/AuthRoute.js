const express = require('express');
const { check } = require('express-validator');
const { login } = require('../controllers/AuthController');
const { validateRequest } = require('../middleware/ValidateRequest');

const api = express.Router();

api.post('/login', [check('correo').isEmail(), check('contraseña').notEmpty()], validateRequest, login);

module.exports = api;
