const dashboardController = {

    // Je donne un nom à ma méthode présente dans la fonction, ca sera home puisque on parle de la page d'accueil

    dashboard: function (request, response) {

        response.render('dashboard');

    }

};

// Je vais devoir importer le module pour, ensuite, le mettre dans le serveur !

module.exports = dashboardController;