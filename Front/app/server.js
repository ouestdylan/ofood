// Dans un premier temps, je vais avoir besoin de plusieurs modules pour créer le serveur. Pour commencer, nous allons prendre Express et EJS.

// Je part les chercher en l'indiquant dans mon code.

const express = require ('express');

// J'ai besoin du routeur que j'ai crée, je part donc le chercher dans le code

const router = require ('./router');

// J'assigne le module à mon application qui va permettre de faire tourner le site vitrine

const app = express();

// Je vais faire appel à la méthode PATH d'Express pour distribuer les fichiers statiques dans mon application

const path = require ('path');

// J'assigne à mon serveur express le port de mon choix, ici on va prendre le port 3005

const PORT = 3005;

// Je récupère toutes les vues que j'ai fait. Avec Express, on indique le moteur et ce qu'on cherche

app.set("view engine", "ejs");

// J'indique que mes views sont dans le dossier views de mon projet

app.set("views", path.join(__dirname, './views'));

// Avec la méthode static d'express, je part chercher l'intégralité du CSS

app.use(express.static(path.join(__dirname, './static')));

// Le CSS se délivre bien sur toutes les pages, c'est super !

// Je met mon serveur en mode écoute sur le bon port et en mettant un message pour faciliter la maintenance du projet

// Le serveur doit passer sur le routeur, je l'indique également dans le code source

app.use(router);

app.listen(PORT, function (request, response) {

    console.log(`Le serveur tourne sur le port ${PORT}`)

});

// Le serveur est fait, pour continuer la séparation des concepts, je termine la création du router dans le bon fichier.