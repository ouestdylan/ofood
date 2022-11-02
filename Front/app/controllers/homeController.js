const homeController = {

    // Je donne un nom à ma méthode présente dans la fonction, ca sera home puisque on parle de la page d'accueil

    home: function (request, response) {
    
        response.render('home');

    }

};

// Je vais devoir importer le module pour, ensuite, le mettre dans le serveur !

module.exports = homeController;