const express = require('express');

const api = express.Router();

const usuarios = [
  { id: 1, nombre: 'Math Jhon', edad: 25 },
  { id: 2, nombre: 'Laura Perez', edad: 20 },
  { id: 3, nombre: 'Carlos Ruiz', edad: 31 },
  { id: 4, nombre: 'Ana Lopez', edad: 23 },
  { id: 5, nombre: 'Luis Torres', edad: 28 }
];

api.get('/usuarios', (req, res) => {
  let resultado = usuarios;

  if (req.query.nombre) {
    resultado = resultado.filter((usuario) =>
      usuario.nombre.toLowerCase().includes(req.query.nombre.toLowerCase())
    );
  }

  if (req.query.edad) {
    resultado = resultado.filter((usuario) => usuario.edad === Number(req.query.edad));
  }

  res.json(resultado);
});

api.get('/usuarios/:id', (req, res) => {
  const usuario = usuarios.find((item) => item.id === Number(req.params.id));

  if (!usuario) {
    return res.status(404).json({ mensaje: 'Usuario no encontrado' });
  }

  res.json(usuario);
});

api.post('/usuarios', (req, res) => {
  const usuario = {
    id: usuarios.length + 1,
    nombre: req.body.nombre,
    edad: Number(req.body.edad)
  };

  usuarios.push(usuario);
  res.status(201).json(usuario);
});

api.delete('/usuarios/:id', (req, res) => {
  const posicion = usuarios.findIndex((usuario) => usuario.id === Number(req.params.id));

  if (posicion === -1) {
    return res.status(404).json({ mensaje: 'Usuario no encontrado' });
  }

  const eliminado = usuarios.splice(posicion, 1);
  res.json(eliminado[0]);
});

module.exports = api;
