import React from 'react';
import PT from 'prop-types';
import { BackgroundImageContainer, Img } from './styled';

const BackgroundImage = ({ currentTrack }) => (
  <BackgroundImageContainer>
    <Img imgsrc={currentTrack} />
  </BackgroundImageContainer>
);

BackgroundImage.propTypes = {
  currentTrack: PT.string,
};

export default BackgroundImage;
