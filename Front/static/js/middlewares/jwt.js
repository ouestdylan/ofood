
const jsonwebtoken = require('jsonwebtoken');
const fetch = require('node-fetch');

const backUrl = "http://localhost:3030/";

async function authorizationMd(req, res, next) {

        //si l'utilisateur n'a pas de session il doit déjà se connecter
    if (!req.session.user) {
        req.session.message = "Vous devez vous connecter";
        return res.redirect('/connexion');

        // une fois connecté on vérifie si son token est valide
    } else {
        const token = req.session.user.token;
        const secretJwt = process.env.JWT_SECRET;
        const verifiedToken = jsonwebtoken.verify(token, secretJwt);
        
        // si le token est valide on vérifie si l'utilisateur à le rôle admin
        if (verifiedToken) {
            try {
                const response =  await fetch(backUrl+"user", {
                    method: "POST",
                    body: JSON.stringify(verifiedToken),
                    headers: {'Content-Type': 'application/json'}
                });
                const user = await response.json();
                    //si l'utilisateur est admin on le laisse passer
                if (user.isAdmin) {
                    req.session.user.id = verifiedToken.userId;
                    next();
                    // Si ce n'est pas un admin on renvoi vers connexion
                } else {
                    req.session.message = "Vous n\'êtes pas autorisé.";
                    return res.redirect('/connexion');
                }

            } catch (error) {
                return res.json(error.message)
            }       
        // si le token n'est pas valide on redirige vers connexion
        } else {
            req.session.message = "Vous devez vous connecter";
            return res.redirect('/connexion');
        }
    }
}

module.exports = authorizationMd;