const express = require('express');

// Je dis à mon code que je veux que Express passe sur le routeur de mon serveur

const router = express.Router();

// Je vais chercher tous les controlleurs que j'ai fait jusque à présents pour lier les concepts entre eux

const homeController = require('./controllers/homeController');
const connexionController = require('./controllers/connexionController');
const dashboardController = require('./controllers/dashboardController');

router.get('/', homeController.home);
router.get('/connexion', connexionController.connexion);
router.get('/dashboard', dashboardController.dashboard);






module.exports = router;