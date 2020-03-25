const express = require('express');
const sessionController   = require('./controller/Session');
const ongController       = require('./controller/Ong');
const incidentsController = require('./controller/Incidents');
const profileController   = require('./controller/Profile');

const routes = express.Router();

routes.post('/sessions', sessionController.create);

routes.get('/ongs', ongController.index);
routes.post('/ongs', ongController.create);

routes.get('/incidents', incidentsController.index);
routes.post('/incidents', incidentsController.create);
routes.delete('/incidents/:id', incidentsController.delete);

routes.get('/profile', profileController.index);

module.exports = routes;