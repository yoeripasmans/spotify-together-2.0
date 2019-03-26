const express = require('express');
const path = require('path');
const compress = require('compression');
const cors = require('cors');
const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);

app.use(cors());
app.use(compress());
app.use(express.static(path.resolve(__dirname)));

const port = process.env.PORT || 3001;

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'));
});

io.on('connection', (socket) => {
  console.log('connect');
});

server.listen(port, () => {
  console.info(`Listening on port ${port}`);
});
