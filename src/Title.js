import React from 'react';

export default function Title(props) {
  const { title } = props;
  if (!title) return <h3>Loading...</h3>;
  return <h2>{title}</h2>;
}
