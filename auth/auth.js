const jwt = require("jsonwebtoken");

const JWTSecret = "k5XX5dtHl2jJqm48c83mq0EG53mzHLrrR65TuVVNuTSR1RdMmyJaKGTlWsxr8ZH";

const auth = function auth(req, res, next){
    const authToken = req.headers['authorization'];

    if(authToken != undefined){

        const bearer = authToken.split(' ');
        var token = bearer[1];

        jwt.verify(token,JWTSecret,(err, data) => {
            if(err){
                res.status(401);
                res.json({err:"Token inválido!"});
            }else{

                req.token = token;
                req.loggedUser = {id: data.id,email: data.email};
                next();
            }
        });
    }else{
        res.status(401);
        res.json({err:"Token inválido!"});
    } 
}

module.exports = auth