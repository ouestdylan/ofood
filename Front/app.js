require('dotenv').config();
const router = require('./router');

// un peu de config
const PORT = process.env.PORT || 5000;
const express = require('express');
const app = express();



app.get('/', function(req, res){
  res.render('home')});

// on importe le router


// permet de récupérer les post via un middlware

// on rajoute la gestion ejs
app.set('views', './Front/views');
app.set('view engine', 'ejs');

// css 

app.use(express.static(__dirname + '../public'));




app.use(router);


app.listen(PORT, _ => {
   console.log(`http://localhost:${PORT}`);
});