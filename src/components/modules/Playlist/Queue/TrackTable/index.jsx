import React from 'react';
import PT from 'prop-types';
import TrackCategoryRow from './TrackCategoryRow';
import TrackRow from './TrackRow';
import { Table } from './styled';

const TrackTable = ({ tracks, buttonType, tableHandler }) => (
  <Table>
    <thead>
      <TrackCategoryRow />
    </thead>
    <tbody>
      {tracks.map((track) => (
          <TrackRow
              key={track.uri}
              track={track}
              buttonType={buttonType}
              tableHandler={tableHandler}
          />
      ))}
    </tbody>
  </Table>
);

TrackTable.propTypes = {
  tracks: PT.array,
  buttonType: PT.string,
  tableHandler: PT.func,
};

export default TrackTable;
