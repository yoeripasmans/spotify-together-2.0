import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  width: 100%;
  display: flex;
  height: 100%;
  flex-direction: column;

  &:focus, &:hover, &:visited, &:link, &:active {
      text-decoration: none;
  }
`;

export const List = styled.ul`
  margin-top: 1.5em;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(8em, 1fr));
  grid-gap: 2em;
  padding: 0;
`;

export const PlaylistItem = styled.li`
  height: 100%;
  width: 100%;
  list-style-type: none;
`;

export const PlaylistImg = styled.img`
  width: 100%;
  border-radius: 4px;
`;

export const PlaylistImgPlaceholder = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, #31f7f4 0%, #6f8fce 100%);
  border-radius: 4px;
`;

export const PlaylistLabel = styled.span`
  margin-top: 0.5em;
`;
