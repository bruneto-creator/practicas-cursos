const bcrypt = require('bcryptjs');
const { User } = require('../models/UserModel');
const { Profile } = require('../models/ProfileModel');

async function getUsers(req, res) {
  res.json(await User.findAll({ include: [{ model: Profile, as: 'perfil' }], attributes: { exclude: ['contraseña'] } }));
}

async function getUser(req, res) {
  const user = await User.findByPk(req.params.id, { attributes: { exclude: ['contraseña'] } });
  if (!user) return res.status(404).json({ mensaje: 'Usuario no encontrado' });
  res.json(user);
}

async function createUser(req, res) {
  const datos = { ...req.body, contraseña: await bcrypt.hash(req.body.contraseña, 10) };
  const user = await User.create(datos);
  const resultado = user.toJSON();
  delete resultado.contraseña;
  res.status(201).json(resultado);
}

async function updateUser(req, res) {
  const user = await User.findByPk(req.params.id);
  if (!user) return res.status(404).json({ mensaje: 'Usuario no encontrado' });
  const datos = { ...req.body };
  if (datos.contraseña) datos.contraseña = await bcrypt.hash(datos.contraseña, 10);
  await user.update(datos);
  const resultado = user.toJSON();
  delete resultado.contraseña;
  res.json(resultado);
}

async function deleteUser(req, res) {
  const user = await User.findByPk(req.params.id);
  if (!user) return res.status(404).json({ mensaje: 'Usuario no encontrado' });
  await user.update({ activo: false });
  res.json({ mensaje: 'Usuario desactivado' });
}

module.exports = { getUsers, getUser, createUser, updateUser, deleteUser };
