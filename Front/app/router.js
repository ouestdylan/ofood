
const express = require('express');

const router = express.Router();

const mainController = require('./controllers/mainController');
const userController = require('./controllers/userController');
const userMiddleware = require('./middlewares/userMiddleware');

router.use(userMiddleware.sessionVerification);

router.get('/', mainController.homePage);

router.get('/recettes', mainController.recipesPage);
router.get('/recettes/:id/:title', mainController.recipeDetailsPage);

router.get('/connexion', userController.loginPage);
router.post('/connexion', userController.loginAction);

//router.get('/dashboard', userController.dashboardPage);

router.get('/presentation', mainController.presentationPage);
router.get('/cgu', mainController.cguPage);
router.get('/contact', mainController.contactPage);

router.get('/admin/ajouterunerecette', mainController.recipeFormPage);
router.post('/admin/ajouterunerecette', mainController.addNewRecipe);

router.get('/deconnexion', userController.disconnect);

module.exports = router;