import io from 'socket.io-client';

const socket = io('http://localhost:3001');

const configureSocket = (dispatch) => {
  // make sure our socket is connected to the port
  socket.on('connect', () => {
    console.log('connected');
  });

  socket.on('disconnect', () => { socket.disconnect(); });
  return socket;
};

export default configureSocket;
