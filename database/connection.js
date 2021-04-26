const { Sequelize } = require("sequelize")
const sequelize = require("sequelize")

const connection = new Sequelize('workflow','root','root',{
    host:'localhost',
    dialect:'mysql'
})

module.exports = connection