const bcrypt = require('bcryptjs');
const { connection } = require('./config.db');
const { Profile } = require('./models/ProfileModel');
const { Category } = require('./models/CategoryModel');
const { State } = require('./models/StateModel');
const { User } = require('./models/UserModel');
require('./models/NewModel');

async function seed() {
  await connection.sync();

  const [admin] = await Profile.findOrCreate({ where: { nombre: 'Administrador' } });
  await Profile.findOrCreate({ where: { nombre: 'Contribuidor' } });

  await Category.findOrCreate({ where: { nombre: 'Tecnología' }, defaults: { descripcion: 'Noticias sobre tecnología' } });
  await Category.findOrCreate({ where: { nombre: 'Deportes' }, defaults: { descripcion: 'Noticias deportivas' } });
  await Category.findOrCreate({ where: { nombre: 'Cultura' }, defaults: { descripcion: 'Noticias de arte y cultura' } });

  await State.findOrCreate({ where: { nombre: 'Yucatán' }, defaults: { abreviacion: 'YUC' } });
  await State.findOrCreate({ where: { nombre: 'Campeche' }, defaults: { abreviacion: 'CAMP' } });
  await State.findOrCreate({ where: { nombre: 'Quintana Roo' }, defaults: { abreviacion: 'QROO' } });

  const user = await User.findOne({ where: { correo: 'admin@apinews.com' } });
  if (!user) {
    await User.create({
      perfil_id: admin.id,
      nombre: 'Usuario',
      apellidos: 'Administrador',
      nick: 'admin',
      correo: 'admin@apinews.com',
      contraseña: await bcrypt.hash('admin123', 10)
    });
  }
}

if (require.main === module) {
  seed().then(() => {
    console.log('Datos iniciales creados');
    return connection.close();
  }).catch((error) => {
    console.error(error.message);
    process.exit(1);
  });
}

module.exports = { seed };
