
const fetch = require('node-fetch');

const backUrl = "http://localhost:3000/";

const mainController = {

    testPage: async (req, res) => {

        try {
            let response = await fetch(backUrl + "recipes")
            let recipes = await response.json();

            res.render('test', { recipes });

        } catch (error) {
            console.trace(error);
        }
    },

    homePage: async (req, res) => {

        try {
            let response = await fetch(backUrl + "recipes")
            let recipes = await response.json();
            //Là tu récupéres le tableau trier par ordre décroissant.
            let bestFivesRecipes = recipes.sort((a, b) => b.rate - a.rate);
            bestFivesRecipes = bestFivesRecipes.slice(0, 5);

            let difficultyRecipe = recipes.filter((recipe) => recipe.difficulty.toLowerCase() === "facile");
            difficultyRecipe = difficultyRecipe.slice(0, 5);

            let aleatoireTest = recipes.sort((a, b) => b.rate - a.rate);
            aleatoireTest = aleatoireTest.slice(0, 3);

            //Et plus tard dans le render : 
            res.render('home', {
                bestFivesRecipes, difficultyRecipe, aleatoireTest
            });
        } catch (error) {
            console.trace(error);
        }
    },

    recipesPage: async (req, res) => {

        try {
            let response = await fetch(backUrl + "recipes")
            let recipes = await response.json();

            res.render('recipes', { recipes });

        } catch (error) {
            console.trace(error);
        }
    },

    recipeDetailsPage: async (req, res) => {

        const recipeId = req.params.id
        try {
            let response = await fetch(backUrl + "recipes/" + recipeId)
            let recipe = await response.json();
            res.render('recipeDetailsPage', { recipe });

        } catch (error) {
            console.trace(error);
        }
    },
    recipeFormPage(req, res) {
        res.render('addRecipeForm')
    },

    async addNewRecipe(req, res) {
        
        let data = req.body;
        let recipe;
        try {
            const response = await fetch("backUrl/" + recipes, {
                method:"POST",
                body:JSON.stringify(data),
                headers: {'Content-Type': 'application/json'}
            });

            recipe = await response.json()

            res.render('/recipe', { recipe });

        } catch (error) {
            console.log(error);
        }
    },

    presentationPage: (req, res) => {
        res.render('presentation');
    },

    cguPage: (req, res) => {
        res.render('cgu');
    },

    contactPage: (req, res) => {
        res.render('contact');
    },

};

module.exports = mainController;