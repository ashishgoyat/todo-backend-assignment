const jwt = require('jsonwebtoken');
const jwt_secret = process.env.JWT_SECRET;


function userMiddleware(req, res, next) {
    // Implement user auth logic
    const token = req.headers.authorization;
    if(!token){
        return res.status(401).json({message:"Token missing"});
    }
    try{
        const response = jwt.verify(token,jwt_secret);
        req.userid = response.id;
        next();
    }
    catch(err){
        res.status(403).json({message:"Invalid or Expired token"});
    }
}

module.exports = {userMiddleware};
