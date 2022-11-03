require('dotenv').config();

const express = require('express');
const app = express();
const router = require('./app/router');

const PORT = process.env.PORT ?? 3001;

app.use(express.json());

app.use(router);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});

