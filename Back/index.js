
const express = require('express');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT ?? 3001;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

const router = require('./app/router');
app.use(router);

app.listen(PORT, () => {
    console.log(`Run on port ${PORT}`);
});

