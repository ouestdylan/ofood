
const express = require('express');

const router = express.Router();

const homeController = require('./controllers/Controller');
const connexionController = require('./controllers/connexionController');
const dashboardController = require('./controllers/dashboardController');

router.get('/', homeController.home);
router.get('/connexion', connexionController.connexion);
router.get('/dashboard', dashboardController.dashboard);






module.exports = router;