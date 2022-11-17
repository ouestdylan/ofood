
const jsonwebtoken = require('jsonwebtoken');
const fetch = require('node-fetch');

const backUrl = "http://localhost:3000/";

const userController = {

    loginPage(req, res) {
        res.render('loginPage');
    },

    dashboardPage(req, res) {
        res.render('dashboard');
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

            const jwtContent = { userId: result.id};
            const jwtOptions = {
                algorithm: 'HS256',
                expiresIn: '1h'
            };

            const token = {
                logged: true,
                token: jsonwebtoken.sign(jwtContent, jwtSecret, jwtOptions)
            };
            
            //res.header("token", JSON.stringify(token)).redirect('/');
            let formatToken = encodeURIComponent(JSON.stringify(token));
            res.redirect(`/?token=${formatToken}`)
            
        } catch (error) {
            console.trace(error);
        }
    },

    disconnect(req, res) {
        res.redirect('/');
    }
};

module.exports = userController;