const { Sequelize } = require("sequelize")
const connection = require("../connection")
const User = require("./User")

const Task = connection.define('task', {
    type: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false
    },
    customer_name:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    customer_adress:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    customer_phone:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    status:{
        type: Sequelize.STRING,
        allowNull: false,
    }
})

Task.belongsTo(User)

Task.sync({force: false})

module.exports = Task