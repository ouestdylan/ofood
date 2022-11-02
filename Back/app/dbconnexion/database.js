const { Sequelize } = require('sequelize');
require('dotenv').config();

//connexion à la BDD
const sequelize = new Sequelize(process.env.PG_URL, {

	define: {
		// Transformer tous les noms des colonnes du camelCase vers snake_case
		underscored: true,
	}

});

module.exports = sequelize;
