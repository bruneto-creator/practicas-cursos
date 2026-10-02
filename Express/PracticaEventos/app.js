const EventEmitter = require('events');

const myEmitter = new EventEmitter();

myEmitter.on('saludo', (nombre) => {
  console.log(`¡Hola, ${nombre}!`);
});

myEmitter.emit('saludo', 'Juan');
