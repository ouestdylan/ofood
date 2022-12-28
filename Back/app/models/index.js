const User = require('./user');
const Recipe = require('./recipe');

// Association Recipe et User

User.hasMany(Recipe, {
	as: 'recipes',
	foreignKey: 'user_id',
});

Recipe.belongsTo(User, {
	as: 'user',
	foreignKey: 'user_id',
});

module.exports = { Recipe, User };