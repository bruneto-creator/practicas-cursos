const express = require('express');
const cors = require('cors');
const { PORT } = require('./config');
const { connection } = require('./config.db');
const { seed } = require('./seed');
const profileRoutes = require('./routes/ProfileRoute');
const stateRoutes = require('./routes/StateRoute');
const categoryRoutes = require('./routes/CategoryRoute');
const newRoutes = require('./routes/NewRoute');
const userRoutes = require('./routes/UserRoute');
const authRoutes = require('./routes/AuthRoute');

const app = express();

app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use('/api', profileRoutes, stateRoutes, categoryRoutes, newRoutes, userRoutes, authRoutes);

app.use((error, req, res, next) => {
  console.error(error.message);
  res.status(500).json({ mensaje: 'Error en el servidor' });
});

async function iniciar() {
  await connection.authenticate();
  await seed();
  app.listen(PORT, () => {
    console.log('Servidor escuchando en el puerto ' + PORT);
  });
}

if (require.main === module) {
  iniciar().catch((error) => {
    console.error('No se pudo iniciar la API:', error.message);
    process.exit(1);
  });
}

module.exports = app;
