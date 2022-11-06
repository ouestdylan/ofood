const { Model, DataTypes } = require('sequelize');
const sequelize = require('../dbconnexion/database');

class User extends Model {};

User.init({
	email: {
		type: DataTypes.STRING,
		allowNull: false
	},
	username: {
		type: DataTypes.STRING,
		allowNull: false
	},
	password: {
		type: DataTypes.STRING,
		allowNull: false
	},
	isAdmin: {
		type: DataTypes.BOOLEAN,
	}
}, {
	sequelize,
	tableName: 'user',
});

module.exports = User;