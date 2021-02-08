const Product = require("../database/models/Product")

class ProductController{

    async create(req, res){

        var {name, brand, amount, category} = req.body
        Product.create({name, brand, amount, category}).then(product => {
            res.status(201)
            res.json(product)
        }).catch(err => {
            console.log(err)
            res.status(500)
            res.json({erro: err})
        })
    }

    async getAll(req, res){
        Product.findAll({raw: true}).then(result => {
            res.status(200)
            res.json(result)
        }).catch(err => {
            console.log(err)
            res.status(500)
            res.json(err)
        })
    }
}

module.exports = new ProductController()