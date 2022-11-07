
const express = require('express');

const router = express.Router();

const homeController = require('./controllers/Controller');
const connexionController = require('./controllers/connexionController');
const dashboardController = require('./controllers/dashboardController');
const recipeController = require('./controllers/recipeController');

router.get('/', homeController.home);
router.get('/connexion', connexionController.connexion);
router.get('/dashboard', dashboardController.dashboard);
router.get('/recipe', recipeController.recipe);




module.exports = router;