require('dotenv').config();

const express = require('express');
const app = express();
const router = require('./router/router');

const PORT = process.env.PORT || 3000;

app.use(router);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
