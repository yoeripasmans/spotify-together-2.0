import React from 'react';
import PT from 'prop-types';
import styled from 'styled-components';
import TrackTable from './TrackTable';
import QueueHeader from './QueueHeader';

const Section = styled.section`
  width: 100%;
  margin: 2em 0;
`;

const Queue = ({ tracks, tableHandler }) => (
  <Section>
    <QueueHeader />
    <TrackTable
      tracks={tracks}
      buttonType="RemoveTrack"
      tableHandler={tableHandler}
    />
  </Section>
);

Queue.propTypes = {
  tracks: PT.array,
  tableHandler: PT.func,
};

export default Queue;
