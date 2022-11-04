
const express = require ('express');
require('dotenv').config();
const path = require ('path');

const app = express();
const PORT = process.env.PORT ?? 3001;

app.set("view engine", "ejs");

app.set("views", path.join(__dirname, './static/views'));

app.use(express.static(path.join(__dirname, './static')));

const router = require ('./app/router');
app.use(router);

app.listen(PORT, () => {
    console.log(`Run on port ${PORT}`);
});
