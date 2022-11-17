
const { expressjwt: jwt } = require("express-jwt");
const jwtSecret = process.env.JWT_SECRET;

const authorizationMd = jwt({ secret: jwtSecret, algorithms: ['HS256'] });

module.exports = authorizationMd;