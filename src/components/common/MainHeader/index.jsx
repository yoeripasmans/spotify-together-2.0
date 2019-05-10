import React from 'react';
import PT from 'prop-types';

import { ExtendedLogo, Header, UserAccountDetails, ProfileImg, AccountLabel } from './styled';

import Anchor from 'common/Anchor';
import getRootUrl from '../../../../config/getRootUrl';

const MainHeader = ({ userData }) => (
  <Header>
    <ExtendedLogo />
    <UserAccountDetails>
      <div>
        <AccountLabel>Account</AccountLabel>
        <div>{userData.displayName || userData.username || 'Guest'}</div>
      </div>
      <ProfileImg src={userData.profilePic || 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png'} />
    </UserAccountDetails>
    <Anchor href={`${getRootUrl}/logout`}>Log out</Anchor>
  </Header>
);

MainHeader.propTypes = {
    userData: PT.object,
};

export default MainHeader;
