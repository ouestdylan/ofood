const { Model, DataTypes } = require('sequelize');
const sequelize = require('../dbconnexion/database');

//ici on crée une classe Recipe qui hérite du modèle proposé par sequelize
class Recipe extends Model {};

Recipe.init({
	title: {
		type: DataTypes.TEXT,
		allowNull: false
	},
	ingredientsList: {
		type: DataTypes.TEXT,
		allowNull: false
	},
	description: {
		type: DataTypes.TEXT,
		allowNull: false
	},
	steps: {
		type: DataTypes.TEXT,
		allowNull: false
	},
	cookingTime: {
		type: DataTypes.INTEGER,
	},
    difficulty: {
		type: DataTypes.TEXT,
	},
    rate: {
		type: DataTypes.INTEGER,
	},
    picture: {
		type: DataTypes.TEXT,
	},
}, {
	sequelize,
	tableName: 'recipe'
});

module.exports = Recipe;