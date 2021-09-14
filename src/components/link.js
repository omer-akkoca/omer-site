import React from 'react'
import { Link } from "react-router-dom"


export default function ELink({children, ...restProps}) {

    const handleScroolTop = () =>{
        window.scrollTo(0,0);
    }

    return (
        <Link {...restProps} onClick={() => handleScroolTop()}>{children}</Link>
    )
}
