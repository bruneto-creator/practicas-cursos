const { State } = require('../models/StateModel');

async function getStates(req, res) {
  res.json(await State.findAll());
}

async function createState(req, res) {
  res.status(201).json(await State.create(req.body));
}

async function updateState(req, res) {
  const state = await State.findByPk(req.params.id);
  if (!state) return res.status(404).json({ mensaje: 'Estado no encontrado' });
  res.json(await state.update(req.body));
}

async function deleteState(req, res) {
  const state = await State.findByPk(req.params.id);
  if (!state) return res.status(404).json({ mensaje: 'Estado no encontrado' });
  res.json(await state.update({ activo: false }));
}

module.exports = { getStates, createState, updateState, deleteState };
