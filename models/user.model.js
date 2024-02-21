const { DataTypes } = require('sequelize'); // Debe estar siempre en cada tabla
const sequelize = require('../db')

const UserModel = sequelize.define('user', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    age: {
        type: DataTypes.INTEGER
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
})


module.exports =  UserModel
// Atraves de modelo podemos comprobar las tablas, tambien crear nuevas tablas (create) con las validaciones y podemos realizar las queries.