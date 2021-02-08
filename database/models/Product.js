const { Sequelize, DataTypes } = require("sequelize")
const connection = require("../connection")

const Product = connection.define('products', {
    name:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    brand:{
        type: DataTypes.STRING,
        allowNull: false
    },
    amount: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    category:{
        type: DataTypes.TEXT,
        allowNull: false
    }
})

Product.sync({force: false}).then(() => {
    console.log('Tabela products criada')
})

module.exports = Product