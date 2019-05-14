import React from 'react';
import PT from 'prop-types';
import styled from 'styled-components';

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2em;
`;

const Title = styled.h3`
  margin: 0;
`;

const ActiveUsersHeader = ({ userAmount }) => (
  <Header>
    <Title>{userAmount <= 1 ? `${userAmount} User` : `${userAmount} Users`}</Title>
  </Header>
);

ActiveUsersHeader.propTypes = {
  userAmount: PT.number,
};

export default ActiveUsersHeader;
