import React from 'react';
import Title from './Title';
import Image from './Image';
import Description from './Description';

export default function Post(props) {
  const { title, image, description, mediaType, theme } = props;

  return (
    <div>
      <Title title={title} theme={theme} />
      <Image image={image} mediaType={mediaType} theme={theme} />
      <Description description={description} theme={theme} />
    </div>
  );
}
