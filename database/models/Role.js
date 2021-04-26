const { Sequelize } = require("sequelize")
const connection = require("../connection")

const Role = connection.define('role', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false
    }
})

Role.sync({force: false})

module.exports = Role