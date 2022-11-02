
const  User = require('../models/user');

const userController = {

	getAllRecipes: async (req, res) => {

		try {
			const recipesList = await Recipe.findAll();
			console.log(recipesList);
			res.status(200).json(recipesList);

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
			const data = req.body;

			if (!data.title) {
				const error = new Error(`'title' property is missing`);
				return res.status(400).json({ message: error.message });
			}
			if (!data.ingredientsList) {
				const error = new Error(`'IngredientsList' property is missing`);
				return res.status(400).json({ message: error.message });
			}
            if (!data.description) {
				const error = new Error(`'Description' property is missing`);
				return res.status(400).json({ message: error.message });
			}

			const newRecipe = Recipe.build({
				title,
				ingredientsList,
                description
			});

			if (data.cookingTime) {
				newRecipe.cookingTime = data.cookingTime;
			}
            if (data.difficulty) {
                newRecipe.difficulty = data.difficulty;
            }
            if (data.rate) {
                newRecipe.rate = data.rate;
            }
            if (data.picture) {
                newRecipe.picture = data.picture;
            }

			await newRecipe.save();
			res.status(201).json(newRecipe);
			
		} catch (error) {
			console.error(error);
			res.status(500).json({ message: error.message });
		}
	}

};

module.exports = userController;