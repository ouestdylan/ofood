
const fetch = require('node-fetch');

const backUrl = "http://localhost:3000/";

const mainController = {

    homePage: async(req, res) => {

        try {
            let result =  await fetch(backUrl+"recipes")
            let recipes = await result.json();

            console.log(recipes);
            res.render('home',{recipes});
            
        } catch (error) {
            console.log(error);
        }
    },

    recipesPage: async(req, res) => {

        try {
            let result =  await fetch(backUrl+"recipes")
            let recipes = await result.json();

            console.log(recipes);
            res.render('recipes',{recipes});
            
        } catch (error) {
            console.log(error);
        }
    },

    recipePage: async(req, res) => {
        const recipeId = req.params.id
        try {
            let result =  await fetch(backUrl+"recipes/"+recipeId)
            let recipe = await result.json();

            console.log(recipe);
            res.send(recipe)
            //res.render('home',{recipe});
            
        } catch (error) {
            console.log(error);
        }
    }

};

module.exports = mainController;