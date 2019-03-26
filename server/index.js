const express = require('express');
require('dotenv').config();
const path = require('path');
const mongoose = require('mongoose');
const compress = require('compression');
const cors = require('cors');
const passport = require('passport');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const routes = require('./routes');
const session = require('express-session');
require('./controllers/auth.js')();

mongoose.connect(process.env.dbURI, { useNewUrlParser: true });

app.use(cors());
app.use(compress());
app.use(express.static(path.resolve(__dirname)));

app.use(session({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));
// Initialize Passport!  Also use passport.session() middleware, to support
// persistent login sessions (recommended).
app.use(passport.initialize());
app.use(passport.session());

const port = process.env.SERVER_PORT || 3001;

app.use('/', routes);

io.on('connection', (socket) => {
  console.log('connect');
});

server.listen(port, () => {
  console.info(`Listening on port ${port}`);
});
