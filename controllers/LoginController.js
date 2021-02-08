const Users = require("../database/models/User")
const bcrypt = require('bcrypt');
const saltRounds = 10;

class LoginController{
    
    async create(req, res){
        var {email, password} = req.body

        bcrypt.hash(password, saltRounds, (err, hash) => {
            
            if(err){
                console.log(err)
                res.status(500)
                res.json({erro: err})
            }
            Users.create({email, password: hash}).then((user) => {
                res.status(201)
                res.json(user)
            }).catch(err => {
                console.log(err)
                res.status(500)
                res.json({erro: err})
            })
            
        });
    }
}

module.exports = new LoginController()