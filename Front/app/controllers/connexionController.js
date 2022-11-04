const connexionController = {

    // Je donne un nom à ma méthode présente dans la fonction, ca sera home puisque on parle de la page d'accueil

    connexion: function (request, response) {
    
        response.render('connexion');

    }

};

// Je vais devoir importer le module pour, ensuite, le mettre dans le serveur !

module.exports = connexionController;