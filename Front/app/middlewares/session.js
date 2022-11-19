
const sessionMd = (req, res, next) => {

    if (req.session.user) {
        res.locals.user = req.session.user
        console.log(req.session.user);
    }
    next()
}

module.exports = sessionMd;