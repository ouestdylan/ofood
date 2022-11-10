
require('dotenv').config();

const PORT = process.env.PORT ?? 3006;

const express = require ('express');
const session = require('express-session');
const userMiddleware = require('./app/middlewares/userMiddleware');
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(session({
    saveUninitialized: false,
    resave: true,
    secret: process.env.SESSION_SECRET
 }));

app.use(userMiddleware);

app.set('view engine', 'ejs');
app.set('views','static/views');

app.use(express.static('static'));

const router = require ('./app/router');
app.use(router);

app.use((req, res)=>{
    res.status(404).render('404'); // Enchainement
  });

app.listen(PORT, () => {
    console.log(`Run on port ${PORT}`);
});
