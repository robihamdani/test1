const Sequelize = require('sequelize');
const db = require('../config/config');

const Orang = db.define('orang', {
    _id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4
    },
    nama: { type: Sequelize.STRING },
}, { freezeTableName: true })


module.exports = Orang;