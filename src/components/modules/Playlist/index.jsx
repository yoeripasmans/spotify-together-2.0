import React from 'react';
import PT from 'prop-types';
import { connect } from 'react-redux';
import { socket } from 'components/Root';

import { getPlaylist, resetPlaylistData } from 'ducks/playlist';

import PlaylistHeader from './PlaylistHeader';
import ActiveUsers from './ActiveUsers';

import isEmpty from 'lodash/isEmpty';

class Playlist extends React.Component {
  componentDidMount() {
    this.userJoinedPlaylist = false;
    this.props.getPlaylist(this.props.match.params.id);
    this.beforeUnloadListener();
  }

  componentDidUpdate(prevState) {
    if (!this.userJoinedPlaylist && !isEmpty(this.props.userData) && !isEmpty(this.props.playlistData)) {
      socket.emit('USER_JOIN_PLAYLIST', this.props.playlistData, this.props.userData);
      this.userJoinedPlaylist = true;
    }
  }

  componentWillUnmount() {
    socket.emit('USER_LEAVE_PLAYLIST', this.props.playlistData, this.props.userData);
    this.props.resetPlaylistData();
  }

  beforeUnloadListener = () => {
    window.addEventListener('beforeunload', (e) => {
      e.preventDefault();
      if (this.userJoinedPlaylist) {
        socket.emit('USER_LEAVE_PLAYLIST', this.props.playlistData, this.props.userData);
      }
    });
  };

  render() {
    const { playlistData } = this.props;

    if (isEmpty(playlistData)) return null;

    return (
      <>
        <PlaylistHeader name={playlistData.name} createdBy={playlistData.createdBy} tracks={playlistData.tracks} />
        <ActiveUsers userData={playlistData.activeUsers} />
      </>
    );
  }
}

Playlist.propTypes = {
  getPlaylist: PT.func,
  playlistData: PT.object,
  match: PT.object,
  userData: PT.object,
  resetPlaylistData: PT.func,
};
export default connect((state) => ({
  playlistData: state.playlist.playlistData,
  isUserLoading: state.user.loading,
  userData: state.user.userData,
}), { getPlaylist, resetPlaylistData })(Playlist);
