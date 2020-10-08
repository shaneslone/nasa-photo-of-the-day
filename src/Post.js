import React from 'react';
import Title from './Title';
import Image from './Image';
import Description from './Description';
import styled from 'styled-components';

const StyledPost = styled.div`
border: 1px solid ${pr => pr.theme.secondaryColor};
margin: 1%;
padding: 1%;
display: flex;
flex-direction: column;
align-items: center;
`;

export default function Post(props) {
  const { title, image, description, mediaType, theme } = props;

  return (
    <StyledPost>
      <Title title={title} theme={theme} />
      <Image image={image} mediaType={mediaType} theme={theme} />
      <Description description={description} theme={theme} />
    </StyledPost>
  );
}
