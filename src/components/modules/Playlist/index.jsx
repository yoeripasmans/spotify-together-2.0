import React from 'react';
import PT from 'prop-types';
import { connect } from 'react-redux';

import { getPlaylist } from 'ducks/playlist';

class Playlist extends React.Component {
  componentDidMount() {
    this.props.getPlaylist(this.props.match.params.id);
  }

  render() {
    const { playlistData } = this.props;

    return (
      <>
        <p>{playlistData.name}</p>
      </>
    );
  }
}

Playlist.propTypes = {
  getPlaylist: PT.func,
  playlistData: PT.object,
  match: PT.object,
};
export default connect((state) => ({
  playlistData: state.playlist.playlistData,
}), { getPlaylist })(Playlist);
