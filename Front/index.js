
require('dotenv').config();

const PORT = process.env.PORT ?? 3006;

const express = require ('express');
const session = require('express-session');
const cookieParser = require('cookie-parser')
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(cookieParser(process.env.SESSION_SECRET));
app.use(session({
    saveUninitialized: true,
    resave: false,
    secret: process.env.SESSION_SECRET,
    cookie: {secure: false},
    cookie : {
        maxAge: 1000* 60 * 60
    }
}));

app.set('view engine', 'ejs');
app.set('views','static/views');

app.use(express.static('static'));

const router = require ('./app/router');
app.use(router);

app.use((req, res)=>{
    res.status(404).render('404'); // Enchainement
  });

// app.use((req, res) => {
//     res.status(404).render('404');
// });

app.listen(PORT, () => {
    console.log(`Run on port ${PORT}`);
});
