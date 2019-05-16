import React from 'react';
import PT from 'prop-types';

import { Button, ScPlusIcon, ScCrossIcon } from './styled';
import { Tr, Td, TrackImg, UserImg, UserName } from '../styled';

const TrackRow = ({
  track,
  tableHandler,
  buttonType,
}) => {
  let ButtonSvg = null;
  if (buttonType === 'AddTrack') {
      ButtonSvg = <ScPlusIcon />;
  }
  if (buttonType === 'RemoveTrack') {
      ButtonSvg = <ScCrossIcon />;
  }

  return (
    <Tr>
      <Td><TrackImg src={track.album.images[1].url} alt={track.name} /></Td>
      <Td>{track.name}</Td>
      <Td>{track.artists[0].name}</Td>
      <Td>
          <UserImg src={track.addedBy.profilePic || 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png'} />
          <UserName>{track.addedBy.displayName || track.addedBy.username}</UserName>
      </Td>
      <Td><Button onClick={() => tableHandler(track)}>{ButtonSvg}</Button></Td>
    </Tr>
  );
};

TrackRow.propTypes = {
  track: PT.object,
  tableHandler: PT.func,
  buttonType: PT.string,
};

export default TrackRow;
