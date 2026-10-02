const { DataTypes } = require('sequelize');
const { connection } = require('../config.db');

const Category = connection.define('category', {
  nombre: { type: DataTypes.STRING, allowNull: false, unique: true },
  descripcion: { type: DataTypes.STRING, allowNull: false, unique: true },
  activo: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: true }
});

module.exports = { Category };
