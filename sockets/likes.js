let counter = {
  feliz: 0,
  triste: 0,
  surpreso: 0,
  indiferente: 0,
};

const likes = (io) => {
  io.on('connection', (sockets) => {
    console.log('entrou');
    sockets.emit('sendCounter', { counter })
    sockets.on('increaseCounter', (eventId) => {
      counter = Object.assign(counter, eventId)
      io.emit('sendCounter', { counter })
    });
  });
};
module.exports = likes;
