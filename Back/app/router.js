const express = require('express');
const router = express.Router();

const recipeController = require('./controllers/recipeController');
const userController = require('./controllers/userController');

router.get('/recipes', recipeController.getAllRecipes);
router.get('/recipes/:id', recipeController.getRecipeById);

router.post('/recipes', recipeController.addNewRecipe);
//router.patch('/recipes/:id', recipeController.updateRecipeById);
router.delete('/recipes/:id', recipeController.deleteRecipeById);

router.post('/user', userController.isAdmin);
router.post('/login', userController.loginAction);
router.post('/signup', userController.signupAction);

module.exports = router;

