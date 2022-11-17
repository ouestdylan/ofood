
const userMiddleware = {
    
    sessionVerification(req, res, next) {
    console.log("mw here", req.session);    
    if (req.session.user) {
        next(); 
    } else {
        return res.status(401).json({error: "You need to login"});
    }
    }
};

module.exports = userMiddleware;