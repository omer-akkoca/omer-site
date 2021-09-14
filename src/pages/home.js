import React from 'react'
import "../styles/pages/home/home.css"
import { NavbarContainer } from "../container/navbar"
import HomeBg from "../images/pages/home.jpg"
import HomeAvatar from "../images/pages/home-avatar.jpg"


export default function home() {
    return (
        <>
            <NavbarContainer/>
            <div className="home-container" style={{backgroundImage:`url("${HomeBg}")`}}>
                <div className="intro-photo">
                    <img src={HomeAvatar} alt="avatar"></img>
                </div>
                <div className="intro-info">
                    <h1>Ömer AKKOCA</h1>
                    <h3>Yazılım Mühendisi</h3>
                    <h3>Web Geliştirici ve Tasarımcı</h3>
                    <button className="download-cv">CV İndir</button>
                </div>
            </div>
        </>
    )
}
