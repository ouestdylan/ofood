
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
        const data = req.body;
        let result;
        try {
            const response =  await fetch(backUrl+"login", {
                method: "POST",
                body: JSON.stringify(data),
                headers: {'Content-Type': 'application/json'}
            });
            
            result = await response.json();

            req.session.user = result;
            res.redirect('/dashboard');

        } catch (error) {
            console.trace(error);
            res.status(404).render('404');
          }
    },

    disconnect(req, res) {
        req.session.user = false;
        res.redirect('/');
    }
};

module.exports = userController;