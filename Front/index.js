const path = require('path');
const express = require('express');
const router = require('./router');
// on récupère le module pour créer des sessions


const port = process.env.PORT || 3000;

const app = express();

// permet de récupérer les post via un middlware

// on rajoute la gestion des sessions
app.set('view engine', 'ejs');
app.set('views', './Front/views');

app.use(express.static(path.join(__dirname, './public')))

app.get('/', (request, response) => {
   // génère un nombre aléatoire entre 1 et 6, bornes comprises.  
   
   // puis nous allons demander à Express de répondre en utilisant la fonction render
   response.render('home', {
   });
 });

app.use(router);

app.listen(port, _ => {
   console.log(`http://localhost:${port}`);
});