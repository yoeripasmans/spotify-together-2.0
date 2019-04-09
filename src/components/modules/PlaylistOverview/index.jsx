import React from 'react';
import PT from 'prop-types';
import { connect } from 'react-redux';
import Anchor from 'common/Anchor';
import getRootUrl from '../../../../config/getRootUrl';

import { getPlaylists } from 'ducks/playlists';

class PlaylistOverview extends React.Component {
  componentDidMount() {
    this.props.getPlaylists();
  }

  render() {
    const { playlistData, userData } = this.props;

    return (
      <>
        <p>Welkom {userData.displayName}</p>
        <Anchor href={`${getRootUrl}/logout`}>Logout</Anchor>
        {playlistData.map((playlist) =>
          <li key={playlist._id}>{playlist.name}</li>
        )}
      </>
    );
  }
}

PlaylistOverview.propTypes = {
  userData: PT.object,
  getPlaylists: PT.func,
  playlistData: PT.array,
};
export default connect((state) => ({
  playlistData: state.playlists.playlistsData,
  userData: state.user.userData,
}), { getPlaylists })(PlaylistOverview);
