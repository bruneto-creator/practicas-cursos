const { Profile } = require('../models/ProfileModel');

async function getProfiles(req, res) {
  res.json(await Profile.findAll());
}

async function createProfile(req, res) {
  res.status(201).json(await Profile.create(req.body));
}

async function updateProfile(req, res) {
  const profile = await Profile.findByPk(req.params.id);
  if (!profile) return res.status(404).json({ mensaje: 'Perfil no encontrado' });
  res.json(await profile.update(req.body));
}

async function deleteProfile(req, res) {
  const profile = await Profile.findByPk(req.params.id);
  if (!profile) return res.status(404).json({ mensaje: 'Perfil no encontrado' });
  res.json(await profile.update({ activo: false }));
}

module.exports = { getProfiles, createProfile, updateProfile, deleteProfile };
