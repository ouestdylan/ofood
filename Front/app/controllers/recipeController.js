const recipeController = {

    // Je donne un nom à ma méthode présente dans la fonction, ca sera home puisque on parle de la page d'accueil

    recipe: function (request, response) {

        response.render('recipe');

    }

};

// Je vais devoir importer le module pour, ensuite, le mettre dans le serveur !

module.exports = recipeController;