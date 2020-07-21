import React from 'react'

export default function TeamMember(props) {
    const { info } = props;
    

    return (
        <div>
            <h3>{info.name}</h3>
        </div>
    )
}