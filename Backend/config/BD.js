const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('DrawNet', 'aluno', 'ifpecjbg', {
    host: 'localhost',
    dialect: 'mysql'
});
module.exports = sequelize;