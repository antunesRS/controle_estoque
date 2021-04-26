const Users = require("../database/models/User")
const jwt = require("jsonwebtoken")
const bcrypt = require('bcrypt');
const JWTSecret = "k5XX5dtHl2jJqm48c83mq0EG53mzHLrrR65TuVVNuTSR1RdMmyJaKGTlWsxr8ZH";

class AuthController{
    async doLogin(req,res){
        console.log(req)

        var {email, password} = req.body;

    if(email != undefined){

        Users.findOne({
            where: {email: email}
        }).then(user => {

            if(user != undefined){

                bcrypt.compare(password, user.password, function(err, result) {
                    if(result){
                        jwt.sign({id: user.id, email: user.email}, JWTSecret, {expiresIn:'48h'},(err, token) => {
                            if(err){
                                res.status(400);
                                res.json({err:"Falha interna"});
                            }else{
                                res.status(200);
                                res.json({token: token});
                            }
                        })
                    }
                    else{
                        res.status(401);
                        res.json({err: "Credenciais inválidas!"});
                    }
                });
                
            }else{
                res.status(404);
                res.json({err: "O E-mail enviado não existe na base de dados!"});
            }
        }).catch(err => {
            console.log(err)
            res.json({erro: "ocorreu um erro durante o login"})
        })

    }else{
        res.status(400);
        res.send({err: "O E-mail enviado é inválido"});
    }
    }
}

module.exports = new AuthController()