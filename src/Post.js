import React from 'react';
import Title from './Title';
import Image from './Image';
import Description from './Description';

export default function Post(props) {
  const { title, image, description, mediaType } = props;

  return (
    <div>
      <Title title={title} />
      <Image image={image} mediaType={mediaType} />
      <Description description={description} />
    </div>
  );
}
