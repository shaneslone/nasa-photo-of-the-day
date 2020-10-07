import React from 'react';

export default function Image(props) {
  const { image } = props;
  return (
    <div>
      <img src={image} />
    </div>
  );
}
