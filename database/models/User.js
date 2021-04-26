const { Sequelize } = require("sequelize")
const connection = require("../connection")
const Profile = require("./Profile")
const Role = require("./Role")

const User = connection.define('users', {
    name:{
        type: Sequelize.STRING,
        allowNull: false,
        unique: false
    },
    email:{
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    password:{
        type: Sequelize.STRING,
        allowNull: false
    },
    
})

User.belongsTo(Profile)
User.belongsTo(Role)

User.sync({force: false}).then(() => {
    console.log('Tabela users criada')
})

module.exports = User