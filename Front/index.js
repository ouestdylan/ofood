const express = require('express');
const router = require('./app/router');
// on récupère le module pour créer des sessions



const port = process.env.PORT || 3000;

const app = express();

app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(express.static(path.join(__dirname, './Css')))

app.use(router);

app.listen(port, _ => {
   console.log(`http://localhost:${port}`);
});