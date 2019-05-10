import io from 'socket.io-client';
import getRootUrl from '../../config/getRootUrl';

import { updatePlaylist } from './../ducks/playlist';

const socket = io.connect(getRootUrl, {
  'force new connection': true,
  'reconnectionAttempts': 'Infinity',
  'timeout': 10000,
  'transports': ['websocket'],
});

const configureSocket = (dispatch) => {
  socket.on('USER_JOIN_PLAYLIST', (playlistData) => {
    dispatch(updatePlaylist(playlistData));
  });

  socket.on('USER_LEAVE_PLAYLIST', (playlistData) => {
    dispatch(updatePlaylist(playlistData));
  });

  socket.on('disconnect', () => {
    socket.disconnect();
  });

  return socket;
};

export default configureSocket;
