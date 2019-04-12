import io from 'socket.io-client';
import getRootUrl from '../config/getRootUrl';

const socket = io(getRootUrl);

const configureSocket = (dispatch) => {
  // make sure our socket is connected to the port
  socket.on('connect', () => {
  });

  socket.on('disconnect', () => { socket.disconnect(); });
  return socket;
};

export default configureSocket;
