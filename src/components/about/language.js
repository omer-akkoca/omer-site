import React from 'react'

const Language = ({language}) => {

    const {id, src, name} = language;

    return (
        <div key={id}>
            <img
                style={{width: "40px", height: "auto"}}
                alt=""
                src={src}
            />
            <p>{name}</p>
        </div>
    )
}

export default Language;