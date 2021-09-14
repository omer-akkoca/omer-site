import React from 'react'

export default function SocialMediaIcon({icon,link}) {
    return (
        <a href={link} target="_blank" rel="noreferrer">
            <i className={icon}></i>
        </a>
    )
}
