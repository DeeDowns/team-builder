import React from 'react'

export default function TeamMember(props) {
    const { info } = props;

    return (
        <div>
            <h2>{info.name}</h2>
        </div>
    )
}