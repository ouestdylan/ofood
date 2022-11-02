const express = require('express');
const router = express.Router();

const controller = require('./controller');

router.get('/', controller.getAllRecipes);
router.get('/recipes/:id', controller.getOneRecipeById);

router.post('/recipes', controller.addNewRecipe);


module.exports = router;