const express = require('express');
const router = express.Router();

router.get('/', mainController.homePage);

router.get ('/adminpage', mainController.adminPage);
