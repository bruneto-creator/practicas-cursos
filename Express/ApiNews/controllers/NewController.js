const { New } = require('../models/NewModel');
const { Category } = require('../models/CategoryModel');
const { State } = require('../models/StateModel');
const { User } = require('../models/UserModel');

const relaciones = [
  { model: Category, as: 'categoria' },
  { model: State, as: 'estado' },
  { model: User, as: 'usuario', attributes: { exclude: ['contraseña'] } }
];

async function getNews(req, res) {
  res.json(await New.findAll({ include: relaciones }));
}

async function getNew(req, res) {
  const noticia = await New.findByPk(req.params.id, { include: relaciones });
  if (!noticia) return res.status(404).json({ mensaje: 'Noticia no encontrada' });
  res.json(noticia);
}

async function createNew(req, res) {
  const noticia = await New.create({ ...req.body, fecha_publicacion: new Date() });
  res.status(201).json(noticia);
}

async function updateNew(req, res) {
  const noticia = await New.findByPk(req.params.id);
  if (!noticia) return res.status(404).json({ mensaje: 'Noticia no encontrada' });
  res.json(await noticia.update(req.body));
}

async function deleteNew(req, res) {
  const noticia = await New.findByPk(req.params.id);
  if (!noticia) return res.status(404).json({ mensaje: 'Noticia no encontrada' });
  res.json(await noticia.update({ activo: false }));
}

module.exports = { getNews, getNew, createNew, updateNew, deleteNew };
