const express = require('express');
const controller = require('../controllers/ProfileController');

const api = express.Router();

api.get('/perfiles', controller.getProfiles);
api.post('/perfiles', controller.createProfile);
api.put('/perfiles/:id', controller.updateProfile);
api.delete('/perfiles/:id', controller.deleteProfile);

module.exports = api;
