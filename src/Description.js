import React from 'react';

export default function Description(props) {
  const { description } = props;
  if (!description) return <h3>Loading...</h3>;
  return (
    <div>
      <p>{description}</p>
    </div>
  );
}
