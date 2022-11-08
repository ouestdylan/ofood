
const express = require('express');

const router = express.Router();

const mainController = require('./controllers/mainController');
const userController = require('./controllers/userController');

router.get('/accueil', mainController.homePage);

router.get('/recettes', mainController.recipesPage);
router.get('/recettes/:id', mainController.recipePage);

router.get('/connexion', userController.loginPage);
router.post('/connexion', userController.loginAction);
router.get('/dashboard', userController.dashboardPage);

router.get('/presentation', mainController.presentationPage);
router.get('/cgu', mainController.cguPage);

module.exports = router;