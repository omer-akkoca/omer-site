import React from 'react'

export function PageTopContainer({bg,text,button}) {

    const handleScroll = () => {
        const page_top_width = document.querySelector(".page-top").offsetHeight;
        window.scrollTo(0,page_top_width - 50)
    }

    return (
        <div className="page-top">
            <div className="page-top-img" style={{backgroundImage: `url("${bg}")`}}></div>
            <div className="content">
                    <p>{text}</p>
                    <button onClick={handleScroll}>{button}</button>
            </div>
        </div>
        )
}
