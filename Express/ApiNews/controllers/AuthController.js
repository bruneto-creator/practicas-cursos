const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { User } = require('../models/UserModel');
const { JWT_SECRET } = require('../config');

async function login(req, res) {
  const user = await User.findOne({ where: { correo: req.body.correo, activo: true } });

  if (!user || !(await bcrypt.compare(req.body.contraseña, user.contraseña))) {
    return res.status(401).json({ mensaje: 'Correo o contraseña incorrectos' });
  }

  const token = jwt.sign({ id: user.id, perfil_id: user.perfil_id }, JWT_SECRET, { expiresIn: '2h' });
  res.json({ token });
}

module.exports = { login };
