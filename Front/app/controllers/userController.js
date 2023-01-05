
const jsonwebtoken = require('jsonwebtoken');
const fetch = require('node-fetch');

const backUrl = "http://localhost:3030/";

const userController = {

    loginPage(req, res) {
        res.render('loginPage');
    },

    async loginAction(req, res) {

        const jwtSecret = process.env.JWT_SECRET;
        const data = req.body;

        try {
            const response =  await fetch(backUrl+"login", {
                method: "POST",
                body: JSON.stringify(data),
                headers: {'Content-Type': 'application/json'}
            });

            const result = await response.json();

            if (result.errorMessage) {
                req.session.message = result.errorMessage;
                return res.redirect('/connexion');

            } else {
                const jwtContent = { userId: result.id};
                const jwtOptions = {
                    algorithm: 'HS256',
                    expiresIn: '1h'
                };
                const token = {
                    logged: true,
                    token: jsonwebtoken.sign(jwtContent, jwtSecret, jwtOptions)
                };

                req.session.user = token;
                req.session.user.username = result.username;
    
                res.redirect('/');
            }
            
        } catch (error) {
            console.trace(error);
        }
    },

    disconnect(req, res) {
        req.session.destroy();
        res.redirect('/');
    }
};

module.exports = userController;