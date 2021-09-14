import React from 'react'

export default function Language({language}) {

    const {id, icon, color, name} = language;

    return (
        <div key={id}>
            <i className={icon} style={{color:`${color}`}}/>
            <p>{name}</p>
        </div>
    )
}
