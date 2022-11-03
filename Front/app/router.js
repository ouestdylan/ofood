
const express = require ('express');

// Je dis à mon code que je veux que Express passe sur le routeur de mon serveur

const router = express.Router();

// Je vais chercher tous les controlleurs que j'ai fait jusque à présents pour lier les concepts entre eux

const Controller = require ('./controllers/Controller');


router.get('/',Controller.home);



module.exports = router;
