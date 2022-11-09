
const fetch = require('node-fetch');

const backUrl = "http://localhost:3000/";

const mainController = {

    homePage: async(req, res) => {

        try {
            let result = await fetch(backUrl + "recipes")
            let recipes = await result.json();
            const filterRecipes =  recipes.filter(recipe => recipe.rate > 7).slice(0, 5)
            
            res.render('home', {recipes:filterRecipes});

        } catch (error) {
            console.log(error);
        }
    },

    recipesPage: async (req, res) => {

        try {
            let result = await fetch(backUrl+"recipes")
            let recipes = await result.json();

            res.render('recipes', {recipes});

        } catch (error) {
            console.log(error);
        }
    },

    recipePage: async (req, res) => {

        console.log(req.session);
        console.log(res.locals);
        const recipeId = req.params.id
        try {
            let result = await fetch(backUrl+"recipes/"+recipeId)
            let recipe = await result.json();

            res.render('recipe', {recipe});
            
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
    }


};

module.exports = mainController;