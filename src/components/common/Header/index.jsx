import React from 'react';
import PT from 'prop-types';
import styled from 'styled-components';

const StyledHeader = styled.header`
  margin-bottom: 1em;
`;

const Header = ({ content }) => (
  <StyledHeader>
    <h3>{content}</h3>
  </StyledHeader>
);

Header.propTypes = {
  content: PT.string,
};

export default Header;
