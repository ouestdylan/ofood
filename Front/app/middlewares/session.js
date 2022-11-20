
const sessionMd = (req, res, next) => {

    if (req.session.user) {
        res.locals.user = req.session.user;
    }
    if (res.locals.message) {
        res.locals.message = null;
    } else {
        res.locals.message = req.session.message;
    }
    
    next()
}

module.exports = sessionMd;