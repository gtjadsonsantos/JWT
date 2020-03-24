const jwt = require('jsonwebtoken')

module.exports = (req, res, next)=>{
    
    try {
        
        jwt.verify(req.headers.authorization.split(" ")[1] , process.env.SECRET_TOKEN)
        next()
    } catch (error) {
        res.status(401).send({status: "not authorized"})
    }
}