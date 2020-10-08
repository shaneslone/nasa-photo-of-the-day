import React from 'react';
import styled from 'styled-components'

const StyledTitle = styled.h2`
  color: ${pr => pr.theme.primaryColor};
  text-align:center;
  font-size:2rem;
`;



export default function Title(props) {
  const { title } = props;
  if (!title) return <h3>Loading...</h3>;
  return <StyledTitle>{title}</StyledTitle>;
}
