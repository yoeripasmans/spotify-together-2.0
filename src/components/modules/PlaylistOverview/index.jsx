import React from 'react';
import PT from 'prop-types';
import { connect } from 'react-redux';

import { getAllPlaylists } from 'ducks/allPlaylists';

import PlaylistOverviewList from './PlaylistOverviewList';
import Header from 'common/Header';

import isEmpty from 'lodash/isEmpty';

class PlaylistOverview extends React.Component {
  componentDidMount() {
    if (!this.props.allPlaylistsLoaded) {
      this.props.getAllPlaylists();
    }
  }

  render() {
    const { playlistData } = this.props;

    if (isEmpty(playlistData)) return null;

    return (
      <>
        <Header content="All playlists" />
        <PlaylistOverviewList playlistData={playlistData} />
      </>
    );
  }
}

PlaylistOverview.propTypes = {
  getAllPlaylists: PT.func,
  playlistData: PT.array,
  allPlaylistsLoaded: PT.bool,
};

export default connect((state) => ({
  playlistData: state.playlistOverview.playlists,
  allPlaylistsLoaded: state.playlistOverview.allPlaylistsLoaded,
}), { getAllPlaylists })(PlaylistOverview);
