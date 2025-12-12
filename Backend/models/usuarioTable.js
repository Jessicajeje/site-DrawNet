const {DataTypes, ENUM} = require('sequelize');
const sequelize = require('../config/BD');

const Usuario = sequelize.define('Usuario', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false
    },
nivel: {
    type: DataTypes.ENUM(
        'Iniciante',
        'Intermediário',
        'Avançado'
    ),
    allowNull: false
}
}, {
    tableName: 'usuarios'
},
);

module.exports = Usuario;