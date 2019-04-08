import React from 'react';
import PT from 'prop-types';
import Anchor from 'common/Anchor';
import getRootUrl from '../../../../config/getRootUrl';


class PlaylistOverview extends React.Component {
  state = {

  }

  render() {
    return (
      <>
        <p>Welkom {this.props.userData.displayName}</p>
        <Anchor href={`${getRootUrl}/logout`}>Logout</Anchor>
      </>
    );
  }
}

PlaylistOverview.propTypes = {
  userData: PT.object,
};

export default PlaylistOverview;
