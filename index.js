const express = require('express');
const app = express();
const http = require('http').createServer(app);

const io = require('socket.io')(http, {
  cors: {
    origin: 'http://localhost:3000',
    method: ['GET', 'POST'],
  },
});

require('./sockets/likes')(io);

app.use('/public', express.static('public'));
http.listen(3000, () => {
  console.log('Rodando na 3000');
});
app.get('/', (_req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
  res.sendFile(__dirname + '/public/index.html');
});
