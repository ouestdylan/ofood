
const fetch = require('node-fetch');

const backUrl = "http://localhost:3030/";

const mainController = {

    async homePage(req, res) {
        
        try {
            let response = await fetch(backUrl + "recipes")
            let recipes = await response.json();

            //Là tu récupéres le tableau trier par ordre décroissant.   
            let bestFivesRecipes = recipes.sort((a, b) => b.rate - a.rate);
            bestFivesRecipes = bestFivesRecipes.slice(0, 5);

            let difficultyRecipe = recipes.filter((recipe) => recipe.difficulty.toLowerCase() === "facile");
            difficultyRecipe = difficultyRecipe.slice(0, 5);

            // feature servant a générer les recettes aléatoires
            const RANDOM_RECIPES_NUMBER = 5
            let randomRecipes = []
            for (let index = 0; index < RANDOM_RECIPES_NUMBER ; index++) {
                const recipe = recipes[Math.floor(Math.random() * recipes.length)];
                const isAlreadySelected = randomRecipes.findIndex(element => element.id === recipe.id);
                 
                if (isAlreadySelected === -1) {
                    randomRecipes.push(recipe);
                } else {
                    index--
                }
            }

            //Et plus tard dans le render : 
            res.render('home', {
                bestFivesRecipes, difficultyRecipe, randomRecipes
            });
        } catch (error) {
            console.trace(error);
        }
    },

    async recipesPage(req, res) {

        try {
            let response = await fetch(backUrl + "recipes")
            let recipes = await response.json();

            res.render('recipes', { recipes });

        } catch (error) {
            console.trace(error);
        }
    },

    async recipeDetailsPage(req, res) {

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
        data.userId = req.session.user.id;
        if (req.file) {
            data.picture = req.file.filename;
        }

        let recipe;
        try {
            const response = await fetch(backUrl + "recipes", {
                method:"POST",
                body:JSON.stringify(data),
                headers: {'Content-Type': 'application/json'}
            });

            recipe = await response.json()
            res.redirect(`/recettes/${recipe.id}/${recipe.title}`);

        } catch (error) {
            console.log(error);
        }
    },

    async dashboardPage(req, res) {

        try {
            let response = await fetch(backUrl + "dashboardRecipes")
            let dashboardRecipes = await response.json();

            res.render('dashboard', {dashboardRecipes});

        } catch (error) {
            console.trace(error);
        }
    },

    async deleteRecipeById(req, res) {

        const recipeId = req.params.id;
        try {
            let response = await fetch(backUrl + "recipes/" + recipeId, {
                method: "DELETE"
            });

            let responseMessage= await response.json();
            console.log(responseMessage);
            req.session.message = responseMessage.message;

            res.redirect('/admin/dashboard');

        } catch (error) {
            console.trace(error);
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