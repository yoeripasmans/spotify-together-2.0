import styled from 'styled-components';
import { Link } from 'react-router-dom';
import AddIcon from 'images/add.png';

export const Header = styled.header`
  display: flex;
  align-items: center;
  margin-bottom: 2em;
`;

export const Title = styled.h3`
  margin: 0;
`;

export const AddTrackButton = styled(Link)`
  background-color: #667780;
  border: none;
  transition: 0.6s ease background-color;
  margin-left: auto;
  padding: 0.5rem;
  position: relative;
  border-radius: 20px;
  display: flex;
  align-items: center;
  min-width: 10rem;
  justify-content: center;
  height: 40px;
  color: #fff;
  height: 1.5rem;
  text-decoration: none;

  &:after {
    content: '';
    margin-left: 1rem;
    height: 1rem;
    width: 1rem;
    background-image: url(${AddIcon});
    background-size: cover;
    background-position: center;
    transition: all 0.3s ease-in-out;
  }
`;
