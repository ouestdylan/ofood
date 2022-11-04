
const fetch = require('node-fetch')

const Controller = {

    home: async function (request, response) {

        let recipe =  await fetch(
            "http://localhost:3000/recipes"
        )
        let main = await recipe.json();


        // console.log(main);

        response.render('home',{main});


    },
};

// Je vais devoir importer le module pour, ensuite, le mettre dans le serveur !

module.exports = Controller;