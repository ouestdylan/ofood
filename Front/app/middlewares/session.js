
const sessionMd = (req, res, next) => {

    if (req.session.user) {
        res.locals.user = req.session.user;
    }
    
    res.locals.message = req.session.message;
    req.session.message = null;
    
    next()
}

module.exports = sessionMd;