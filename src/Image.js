import React from 'react';

export default function Image(props) {
  const { image, mediaType } = props;
  if (!image) return <h3>Loading...</h3>;
  if (mediaType === 'video') return <iframe src={image} allowFullScreen />;
  return (
    <div>
      <img src={image} alt='NASA photo of the day' />
    </div>
  );
}
