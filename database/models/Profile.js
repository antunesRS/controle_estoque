const { Sequelize } = require("sequelize")
const connection = require("../connection")

const Profile = connection.define('profile', {
    
    name:{
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    }
})

Profile.sync({force: false});

module.exports = Profile