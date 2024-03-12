const Sequelize = require('sequelize');

const sequelize = new Sequelize('appointment-booking', 'root', 'Pgoen201gssbr$', {
    dialect: 'mysql', 
    host: 'localhost'
});

module.exports = sequelize;