import React from 'react';
import styled from 'styled-components';

const StyledImg = styled.img`
  margin: 0 auto;
  display: block;
  width: 50%;

  &:hover{
    transform: scale(1.2);
      transition: all 0.5s ease-in-out;
    }
    transition: all 0.5s ease-in-out;
`;

const StyledDiv = styled.div`
 position: relative;
  overflow: hidden;
  width: 50%;
  padding-top: 28.125%;
`;

const StyledIframe = styled.iframe`
 border: 0;
 position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
`;

export default function Image(props) {
  const { image, mediaType } = props;
  if (!image) return <h3>Loading...</h3>;
  if (mediaType === 'video') return <StyledDiv><StyledIframe src={image} allowFullScreen /></StyledDiv>;
  return (
    <div>
      <a href={image}>
      <StyledImg src={image} alt='NASA photo of the day' /></a>
    </div>
  );
}
