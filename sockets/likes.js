module.exports = (io) => {
  io.on('connection', (sockets) => {
    console.log('entrou');
  });
}