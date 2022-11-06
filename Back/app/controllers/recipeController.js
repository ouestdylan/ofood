
const  { Recipe }  = require('../models');

const controller = {

	getAllRecipes: async (req, res) => {

		try {
			const recipes = await Recipe.findAll();
			console.log(recipes);
			res.status(200).json(recipes);

		} catch (error) {
			console.error(error);
			res.status(500).json({ message: error.message });
		}
	},

	getRecipeById: async (req, res) => {

		try {		
			const recipeId = req.params.id;
			const recipe = await Recipe.findByPk(recipeId);

			if (!recipe) {
				const error = new Error(`Recipe not found with id ${recipeId}`);
				return res.status(404).json({ message: error.message });
			}

			res.status(200).json(recipe);
			
		} catch (error) {
			console.error(error);
			res.status(500).json({ message: error.message });
		}
	},

	addNewRecipe: async (req, res) => {

		try {
			const { title, ingredientsList, description, steps, cookingTime, difficulty, picture, userId } = req.body;

			if (!title) {
				const error = new Error(`'title' property is missing`);
				return res.status(400).json({ message: error.message });
			}
			if (!ingredientsList) {
				const error = new Error(`'IngredientsList' property is missing`);
				return res.status(400).json({ message: error.message });
			}
            if (!description) {
				const error = new Error(`'Description' property is missing`);
				return res.status(400).json({ message: error.message });
			}
			if (!steps) {
				const error = new Error(`'Description' property is missing`);
				return res.status(400).json({ message: error.message });
			}

			const newRecipe = Recipe.build({
				title,
				ingredientsList,
                description,
				steps
			});

			if (cookingTime) {
				newRecipe.cookingTime = cookingTime;
			}
            if (difficulty) {
                newRecipe.difficulty = difficulty;
            }
            if (picture) {
                newRecipe.picture = picture;
            }
			if (userId) {
				newRecipe.userId = userId;
			}

			await newRecipe.save();
			res.status(201).json(newRecipe);
			
		} catch (error) {
			console.error(error);
			res.status(500).json({ message: error.message });
		}
	},

	updateRecipeById: async (req, res) => {

		try {
			const recipeId = req.params.id;
			const recipe = await Recipe.findByPk(recipeId);

			if (!recipe) {
				const error = new Error(`Recipe with id ${recipeId} does not exist.`);
				return res.status(404).json({ message: error.message });
			}

			const { title, ingredientsList, description, steps, cookingTime, difficulty, picture } = req.body;
			console.log(req.body);
			
			if (title) {
				recipe.title = title;
			}
			if (ingredientsList) {
				recipe.ingredientsList = ingredientsList;
			}
			if (description) {
				recipe.description = description;
			}
			if (steps) {
				recipe.steps = steps;
			}
			if (cookingTime) {
				recipe.cookingTime = cookingTime;
			}
			if (difficulty) {
				recipe.difficulty = difficulty;
			}
			if (picture) {
				recipe.picture = picture;
			}

			await recipe.save();
			res.status(200).json(recipe);

		} catch (error) {
			console.error(error);
			res.status(500).json({ message: error.message });
		}
	},

	deleteRecipeById: async (req, res) => {

		try {	
			const recipeId = req.params.id;
			const recipe = await Recipe.findByPk(recipeId);
			if (!recipe) {
				const error = new Error(`Recipe with id ${recipeId} does not exist.`);
				return res.status(404).json({ message: error.message });
			}
			await recipe.destroy();
			res.status(200).json(recipe);

		} catch (error) {
			console.error(error);
			res.status(500).json({ message: error.message });
		}
	}

};

module.exports = controller;