import React from 'react';
import styled from 'styled-components';

import getRootUrl from '../../../../config/getRootUrl';

import Anchor from 'common/Anchor';
import Logo from 'vectors/logo.svg';

const Header = styled.header`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const ExtendedLogo = styled(Logo)`
  height: 50px;
  margin-bottom: 25px;
`;

const ExtendedAnchor = styled(Anchor)`
  padding: 0.5em 2em;
  border: 1px solid #fff;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  color: #fff;
  text-decoration: none;
`;

const Login = () => (
  <>
    <Header>
      <ExtendedLogo />
      <ExtendedAnchor href={`${getRootUrl}/auth/spotify`}>Login with Spotify</ExtendedAnchor>
    </Header>
  </>
);

export default Login;
