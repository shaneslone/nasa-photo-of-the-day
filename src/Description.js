import React from 'react';
import styled from 'styled-components'

const StyledDes = styled.div`
  color: ${pr => pr.theme.primaryColor};
  margin: 0;
  font-size: 1.2rem;
  padding: 1%;
`;

export default function Description(props) {
  const { description } = props;
  if (!description) return <h3>Loading...</h3>;
  return (
    <StyledDes>
      <p>{description}</p>
    </StyledDes>
  );
}
