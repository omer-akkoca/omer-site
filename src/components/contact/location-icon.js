import React from 'react'

export default function LocationIcon({icon, text}) {
    return (
        <div className="location-element">
            <i className={icon}/>
            <span>{text}</span>
        </div>
    )
}
