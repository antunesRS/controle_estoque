const { Sequelize } = require("sequelize")
const sequelize = require("sequelize")

const connection = new Sequelize('estoque','root','rootroot',{
    host:'localhost',
    dialect:'mysql'
})

module.exports = connection