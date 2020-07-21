import React from 'react'
import styled from 'styled-components';

const StyledTeamMember = styled.div `
    
    display: flex;
    flex-direction: column;
    width: 50%;
    text-align: center;
    margin: 3%;
    border: 3px solid red;

    h3 {
        color: red;
        font-size: 3rem;
    }

    h4 {
        font-size: 2.5rem
    }

`

export default function TeamMember(props) {
    const { info } = props;


    return (
        <StyledTeamMember className='member-container'>
            <h3>{info.name}</h3>
            <h4>Age: {info.age}</h4>
            <h4>Location: {info.location}</h4>
        </StyledTeamMember>
    )
}