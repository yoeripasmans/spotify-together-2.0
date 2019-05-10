import React from 'react';
import PT from 'prop-types';
import styled from 'styled-components';
import ActiveUsersHeader from './ActiveUsersHeader';
import ActiveUserItem from './ActiveUserItem';

const Section = styled.section`
  width: 100%;
  margin: 3rem 0;
`;

const Ul = styled.ul`
  padding: 0;
  display: grid;
  column-gap: 25px;
  row-gap: 25px;
  grid-gap: 25px;
  grid-template-columns: repeat(auto-fill, minmax(6em, 1fr));
  height: 8rem;
  overflow: hidden;
`;

const ActiveUsers = ({ userData }) => (
  <Section>
    <ActiveUsersHeader userAmount={userData.length} />
    <Ul>
      {userData.map(({ spotifyId, displayName, username, profilePic }) => (
          <ActiveUserItem key={spotifyId} name={displayName} username={username} profilePic={profilePic} />
      ))}
    </Ul>
  </Section>
);

ActiveUsers.propTypes = {
  userData: PT.array,
};

export default ActiveUsers;
