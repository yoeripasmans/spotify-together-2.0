import io from 'socket.io-client';

const socket = io('http://localhost:3001');

const configureSocket = (dispatch) => {
  // make sure our socket is connected to the port
  socket.on('connect', () => {
    console.log('connected');
  });

  // the socket.on method is like an event listener
  // just like how our redux reducer works
  // the different actions that our socket/client will emit
  // is catched by these listeners
  return socket;
};

export default configureSocket;
