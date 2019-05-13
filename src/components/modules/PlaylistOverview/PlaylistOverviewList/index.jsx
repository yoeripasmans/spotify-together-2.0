import React from 'react';
import PT from 'prop-types';

import {
  StyledLink,
  List,
  PlaylistItem,
  PlaylistImg,
  PlaylistImgPlaceholder,
  PlaylistLabel,
} from './styled';

const PlaylistOverviewList = ({ playlistData }) => (
  <List>
    {playlistData.map((playlist) =>
      <PlaylistItem key={playlist._id}>
        <StyledLink to={`playlist/${playlist._id}`}>
          {playlist.tracks.length > 0 ? (
            <PlaylistImg src={playlist.tracks[0].album.images[1].url} />
          ) : <PlaylistImgPlaceholder />}
          <PlaylistLabel>{playlist.name}</PlaylistLabel>
        </StyledLink>
      </PlaylistItem>
    )}
  </List>
);

PlaylistOverviewList.propTypes = {
  playlistData: PT.array,
};

export default PlaylistOverviewList;
