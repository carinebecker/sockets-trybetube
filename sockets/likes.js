module.exports = (io) => {
  io.on('connection', (sockets) => {
    console.log('entrou');
    let counter = {
      feliz: 0,
      triste: 0,
      surpreso: 0,
      indiferente: 0,
    };
    console.log(counter)
    sockets.emit('sendCounter', { counter })

    sockets.on('increaseCounter', (eventId) => {
      console.log(eventId);
    });
  });
};
