const Task = require("../database/models/Task")
const status = require('../enums/Status')

class TaskController{

    async create(req, res){

        var {type, customer_name, customer_adress, customer_phone} = req.body
        Task.create({type, customer_name, customer_adress, customer_phone, status: status.NOT_INITIATED}).then(task => {
            res.status(201)
            res.json(task)
        }).catch(err => {
            console.log(err)
            res.status(500)
            res.json({erro: err})
        })
    }

    async getAll(req, res){
        Task.findAll({raw: true}).then(result => {
            res.status(200)
            res.json(result)
        }).catch(err => {
            console.log(err)
            res.status(500)
            res.json(err)
        })
    }
}

module.exports = new TaskController()