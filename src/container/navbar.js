import React, { useState } from 'react'
import "../styles/container/navbar-footer/navbar.css"
import Link from "../components/link"

export function NavbarContainer() {

    const [showMenu,setShowMenu] = useState(false);

    window.addEventListener("scroll", () =>{
        const navbar_container = document.querySelector(".navbar-container");
        if (window.scrollY > 50) {
            navbar_container.classList.add("navbar-scroll-container")
        } else {
            navbar_container.classList.remove("navbar-scroll-container")
        }
    });
    
    return (
        <>
        <div className="navbar-container">
            <Link to="/" className="logo">
                <h2>OA</h2>
            </Link>
            <div className="navbar">
                <ul>
                    <Link to="/"><li>Anasayfa</li></Link>
                    <Link to="/about"><li>Hakkımda</li></Link>
                        <li className="dropdown">
                            İlgi Alanları
                            <ul className="dropdown-menu">
                                <Link to="/places-visited"><li>Ziyaret Edilen Yerler</li></Link>
                                <Link to="/books-read"><li>Okunan Kitaplar</li></Link>
                            </ul>
                        </li>
                    <Link to="/contact"><li>İletişim</li></Link>
                </ul>
            </div>
        </div>

        <div className="responsive-navbar-container">
            <Link to="/" className="logo"><h2>OA</h2></Link>
            <i className="hamburger fas fa-bars"
                onClick={() => showMenu ? setShowMenu(false) : setShowMenu(true)}
            ></i>
            {
                showMenu ? (
                <div className="responsive-navbar">
                    <ul>
                        <Link to="/"><li>Anasayfa</li></Link>
                        <Link to="/about"><li>Hakkımda</li></Link>
                        <Link to="/places-visited"><li>Ziyaret Edilen Yerler</li></Link>
                        <Link to="/books-read"><li>Okunan Kitaplar</li></Link>
                        <Link to="/contact"><li>İletişim</li></Link>
                    </ul>
                </div>) : null
            }
            
        </div>
        </>
    )
}
