
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

            try {
                let result =  await fetch(backUrl+"login", {
                    method: "POST",
                    body: req.body
                });
                console.log(result);
                let user = await result.json();
    
                console.log(user);
                res.send(user);
                //res.render('home');
                
            } catch (error) {
                console.log(error);
            }
    },

    disconnect(req, res) {
        req.session.user = false;
        res.redirect('/home');
    }
};

module.exports = userController;