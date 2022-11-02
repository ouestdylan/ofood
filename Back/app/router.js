const express = require('express');
const router = express.Router();

const recipeController = require('./controllers/recipeController');
const userController = require('./controllers/userController');

router.get('/recipes', recipeController.getAllRecipes);
router.get('/recipes/:id', recipeController.getOneRecipeById);
router.post('/recipes', recipeController.addNewRecipe);
router.patch('/recipes/:id', recipeController.updateRecipeById);
router.delete('/recipes/:id', recipeController.deleteRecipeById);

// router.get('/users', userController.getAllUsers);

module.exports = router;