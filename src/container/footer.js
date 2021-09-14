import React from 'react'

export function FooterContainer() {

    const footer_style = {
        width : "100%",
        textAlign : "center",
        padding : "15px",
        backgroundColor : "#000",
        color : "#fff",
        fontSize : "12px",
        letterSpacing : "2px"
    }

    return (
        <div className="footer" style={footer_style}>
            Created by Ömer Akkoca at 2021        
        </div>
    )
}
