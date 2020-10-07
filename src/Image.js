import React from 'react';

export default function Image(props) {
  const { image } = props;
  if (!image) return <h3>Loading...</h3>;
  return (
    <div>
      <img src={image} alt='NASA photo of the day' />
    </div>
  );
}
