const express = require('express');
const userRoutes = require('./routes/UserRoute');

const app = express();

app.use(express.json());
app.use('/api', userRoutes);

app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000');
});
