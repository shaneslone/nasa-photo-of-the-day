import React from 'react';
import styled from 'styled-components'

const StyledHeader = styled.div`
    color: ${pr => pr.theme.primaryColor};
    display: flex;
    justify-content: center;
    margin: 0;
    padding: 0;

h1{
    font-size: 4rem;
}
`;


export default function Headers(props){
    const { selectedDate, setSelectedDate } = props
    return (
        <StyledHeader>
        <h1>🚀 NASA Photo of the Day 🚀</h1>
       </StyledHeader>
    )
}