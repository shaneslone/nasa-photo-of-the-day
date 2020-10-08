import React from 'react';
import styled from 'styled-components'

const StyledDes = styled.div`
  color: ${pr => pr.theme.primaryColor};
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
