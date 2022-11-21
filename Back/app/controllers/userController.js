
const  { User }  = require('../models');
const bcrypt = require('bcrypt');
const emailValidator = require('email-validator');

const userController = {

	async loginAction(req, res) {

        try {
            // on récupère l'user
            const foundUser = await User.findOne({
                where: {
                    email: req.body.email
                }
            })
            // si il existe
            if (foundUser) {
               // comparer son mdp
                bcrypt.compare(req.body.password, foundUser.password).then(function(result) {
                    if (result) {
                        const userData = {
                            id: foundUser.dataValues.id,
                            username: foundUser.dataValues.username
                        }

                        return res.status(200).json(userData)

                    } else {
                        return res.status(401).json({ errorMessage: "Email ou mot de passe invalide"});
                    }
                })

            } else {
                return res.status(401).json({ errorMessage: "Email ou mot de passe invalide"});
            }
            
        } catch(error) {
            res.json(error)
        }
    
    },

    async isAdmin(req, res) {

        try {
            const foundUser = await User.findOne({
                where: {
                    id: req.body.userId
                }
            })

            if (foundUser) {
                const userData = {
                    isAdmin: foundUser.dataValues.isAdmin
                }
                return res.status(200).json(userData)

            } else {
                return res.status(401).json({ errorMessage: "Utilisateur non trouvé"});
            }

        } catch (error) {
            res.json(error);
        }
    },

    async signupAction(req, res) {

        try {
            const foundUser = await User.findOne({
                where: {
                    email: req.body.email
                }
            })
            if (foundUser) {
                throw new Error('401, invalid email or password');
            }
            if (!emailValidator.validate(req.body.email)) {
                throw new Error('Email not valid');
            }
            if (req.body.password !== req.body.passwordConfirm) {
                throw new Error('Password and passwordConfirm does not match');
            }
            bcrypt.hash(req.body.password, 10, function(err, hashedPassword) {
                if (err) {
                    throw new Error(err);
                }
                User.create({email: req.body.email, username: req.body.username, password: hashedPassword});
            });

            res.status(200).json({ message: "Your profil has been created, you must to login now."})
            

        } catch(error) {
            res.json(error.message);
        }
    }

};

module.exports = userController;