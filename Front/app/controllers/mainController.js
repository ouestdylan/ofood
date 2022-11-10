
const fetch = require('node-fetch');

const backUrl = "http://localhost:3000/";

const mainController = {

    homePage: async (req, res) => {

        try {
            let result = await fetch(backUrl + "recipes")
            let recipes = await result.json();
            //Là tu récupéres le tableau trier par ordre décroissant.
            let bestFivesRecipes = recipes.sort((a,b) => b.rate - a.rate);
            bestFivesRecipes = bestFivesRecipes.slice(0,5);
            
            const filterRecipes = recipes.filter(recipe => recipe.rate > 7).slice(0, 5)

            res.render('home', { recipes: filterRecipes });

            let difficultyRecipe = recipes.filter((recipe) => recipe.difficulty.toLowerCase() === "facile");
            difficultyRecipe = difficultyRecipe.slice(0, 5);

            let randomRecipe = recipes.sort((a) => a - Math.random())[0];
            // randomRecipe = randomRecipe.slice(0, 3);

        
//Et plus tard dans le render : 
res.render('home', {
    bestFivesRecipes, difficultyRecipe, randomRecipe
});
        } catch (error) {
            console.trace(error);
            res.status(404).render('404');
          }
    },

    recipesPage: async (req, res) => {

        try {
            let result = await fetch(backUrl + "recipes")
            let recipes = await result.json();

            console.log(recipes);
            res.render('recipes', {recipes});
            

            res.render('recipes', { recipes });

        } catch (error) {
            console.trace(error);
            res.status(404).render('404');
          }
    },

    recipePage: async (req, res) => {

        console.log(req.session);
        console.log(res.locals);
        const recipeId = req.params.id
        try {
            let result = await fetch(backUrl + "recipes/" + recipeId)
            let recipe = await result.json();
            console.log(recipe)
            res.render('recipe', { recipe });

        } catch (error) {
            console.trace(error);
            res.status(404).render('404');
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
    }


};

module.exports = mainController;