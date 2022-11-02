const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database');

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
	cookingTime: {
		type: DataTypes.INTEGER,
		allowNull: true
	},
    difficulty: {
		type: DataTypes.TEXT,
		allowNull: true
	},
    rate: {
		type: DataTypes.INTEGER,
		allowNull: true
	},
    picture: {
		type: DataTypes.TEXT,
		allowNull: true
	},

}, {
	sequelize: sequelize,
	tableName: 'recipe'
});


module.exports = Recipe;