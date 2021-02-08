const { Sequelize } = require("sequelize")
const connection = require("../connection")

const User = connection.define('users', {
    email:{
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    password:{
        type: Sequelize.STRING,
        allowNull: false
    }
})

User.sync({force: false}).then(() => {
    console.log('Tabela users criada')
})

module.exports = User