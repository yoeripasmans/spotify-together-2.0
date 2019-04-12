import React from 'react';
import PT from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Anchor from 'common/Anchor';
import getRootUrl from '../../../../config/getRootUrl';

import { getAllPlaylists } from 'ducks/playlistOverview';

class PlaylistOverview extends React.Component {
  componentDidMount() {
    this.props.getAllPlaylists();
  }

  render() {
    const { playlists, userData } = this.props;

    return (
      <>
        <p>Welkom {userData.displayName}</p>
        <Anchor href={`${getRootUrl}/logout`}>Logout</Anchor>
        {playlists.map((playlist) =>
          <Link to={`playlist/${playlist._id}`} key={playlist._id}>{playlist.name}</Link>
        )}
      </>
    );
  }
}

PlaylistOverview.propTypes = {
  userData: PT.object,
  getAllPlaylists: PT.func,
  playlists: PT.array,
};

export default connect((state) => ({
  playlists: state.playlistOverview.playlists,
  userData: state.user.userData,
}), { getAllPlaylists })(PlaylistOverview);
