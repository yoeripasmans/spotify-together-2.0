import React from 'react';
import PT from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { getAllPlaylists } from 'ducks/allPlaylists';

class PlaylistOverview extends React.Component {
  componentDidMount() {
    if (!this.props.allPlaylistsLoaded) {
      this.props.getAllPlaylists();
    }
  }

  render() {
    const { playlists } = this.props;

    return (
      <>
        {playlists.map((playlist) =>
          <Link to={`playlist/${playlist._id}`} key={playlist._id}>{playlist.name}</Link>
        )}
      </>
    );
  }
}

PlaylistOverview.propTypes = {
  getAllPlaylists: PT.func,
  playlists: PT.array,
  allPlaylistsLoaded: PT.bool,
};

export default connect((state) => ({
  playlists: state.playlistOverview.playlists,
  allPlaylistsLoaded: state.playlistOverview.allPlaylistsLoaded,
}), { getAllPlaylists })(PlaylistOverview);
