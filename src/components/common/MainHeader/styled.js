import styled from 'styled-components';
import Logo from 'vectors/logo.svg';

export const ExtendedLogo = styled(Logo)`
  width: 180px;
  height: 28px;
`;

export const Header = styled.header`
  max-width: 77em;
  margin: 0 auto;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  height: 4em;
`;

export const UserAccountDetails = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
`;

export const ProfileImg = styled.img`
  border-radius: 50%;
  width: 2.4em;
  align-self: start;
  margin-left: 0.6em;
`;

export const AccountLabel = styled.div`
  text-transform: uppercase;
  opacity: 0.6;
  font-size: 0.7em;
  text-align: right;
  font-weight: 600;
`;
