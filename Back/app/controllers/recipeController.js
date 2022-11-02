
const  Recipe  = require('../models/recipe');

const controller = {

	getAllRecipes: async (req, res) => {

		try {
			const recipesrecipe = await Recipe.findAll();
			console.log(recipesrecipe);
			res.status(200).json(recipesrecipe);

		} catch (error) {
			console.error(error);
			res.status(500).json({ message: error.message });
		}
	},

	getOneRecipeById: async (req, res) => {

		try {		
			const id = req.params.id;
			const recipe = await Recipe.findByPk(id);

			if (!recipe) { // Si `card` == null || undefined || false
				const error = new Error(`Recipe not found with id ${id}`);
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
			const { title, ingredientsrecipe, description, steps, cookingTime, difficulty, rate, picture } = req.body;

			if (!title) {
				const error = new Error(`'title' property is missing`);
				return res.status(400).json({ message: error.message });
			}
			if (!ingredientsrecipe) {
				const error = new Error(`'Ingredientsrecipe' property is missing`);
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
				ingredientsrecipe,
                description,
				steps
			});

			if (cookingTime) {
				newRecipe.cookingTime = cookingTime;
			}
            if (difficulty) {
                newRecipe.difficulty = difficulty;
            }
            if (rate) {
                newRecipe.rate = rate;
            }
            if (picture) {
                newRecipe.picture = picture;
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

			const { title, ingredientsList, description, steps, cookingTime, difficulty, rate, picture } = req.body;
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
			if (rate) {
				recipe.rate = rate;
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
				const error = new Error(`List with id ${recipeId} does not exist.`);
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