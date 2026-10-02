const { DataTypes } = require('sequelize');
const { connection } = require('../config.db');

const Profile = connection.define('profile', {
  nombre: { type: DataTypes.STRING, allowNull: false, unique: true },
  activo: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: true }
});

module.exports = { Profile };
