const express = require('express');
const DevDAO = require('./controllers/DevDAO');
const LikeController = require('./controllers/LikeDAO');
const DislikeController = require('./controllers/DislikeDAO');

const routes = express.Router();

routes.get('/devs', DevDAO.index);
routes.post('/devs', DevDAO.store);
routes.post('/devs/:devId/likes', LikeController.store);
routes.post('/devs/:devId/dislikes', DislikeController.store);

module.exports = routes;