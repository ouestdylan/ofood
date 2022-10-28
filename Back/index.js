//require('dotenv').config(); // Essentiel pour que les variables d'environnement présentent dans le .env soient chargées
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

//app.set('views', './app/views'); //Dossier de nos vues
//app.set('view engine', 'ejs'); //Notre moteur de vue

//app.use(express.static('./public')); // Notre dossier public est servi en statique


app.use((req, res) => {
    res.status(404).render('404'); // Enchainement
});

app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
});