import React from 'react';
import Anchor from 'common/Anchor';
import getRootUrl from '../../../../config/getRootUrl';

const Login = () => (
  <>
    <Anchor href={`${getRootUrl}/auth/spotify`}>Login with Spotify</Anchor>
  </>
);

export default Login;
