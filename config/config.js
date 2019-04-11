const Sequelize = require('sequelize');

const db = new Sequelize('kampung', 'root', '', {
    dialect: 'mysql',
    operatorAliases: false
});

db.sync({ force: true })

module.exports = db;