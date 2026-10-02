const { Category } = require('../models/CategoryModel');

async function getCategories(req, res) {
  res.json(await Category.findAll());
}

async function getCategory(req, res) {
  const category = await Category.findByPk(req.params.id);
  if (!category) return res.status(404).json({ mensaje: 'Categoría no encontrada' });
  res.json(category);
}

async function createCategory(req, res) {
  res.status(201).json(await Category.create(req.body));
}

async function updateCategory(req, res) {
  const category = await Category.findByPk(req.params.id);
  if (!category) return res.status(404).json({ mensaje: 'Categoría no encontrada' });
  res.json(await category.update(req.body));
}

async function deleteCategory(req, res) {
  const category = await Category.findByPk(req.params.id);
  if (!category) return res.status(404).json({ mensaje: 'Categoría no encontrada' });
  res.json(await category.update({ activo: false }));
}

module.exports = { getCategories, getCategory, createCategory, updateCategory, deleteCategory };
