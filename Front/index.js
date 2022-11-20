
require('dotenv').config();

const PORT = process.env.PORT ?? 3006;

const express = require ('express');
const app = express();
const session = require('express-session')

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.set('view engine', 'ejs');
app.set('views','static/views');

app.use(express.static('static'));

app.use(session({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: true,
    resave: true,
    cookie: { 
        secure: false,
        maxAge: 60*60*1000
    }
}));

const router = require ('./app/router');
app.use(router);

app.use((req, res) => {
    res.status(404).render('404');
});

app.listen(PORT, () => {
    console.log(`Run on port ${PORT}`);
});
