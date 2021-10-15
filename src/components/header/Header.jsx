import React from "react"
import logo from "../../images/logo.png"
import {links} from "./data"
import {HashLink} from "react-router-hash-link"
import Socials from "../socials/Socials"

export default function Header(){
    const [showMobMenu, setShowMobMenu] = React.useState(false)

    const toggleMenu = function(){
        setShowMobMenu(!showMobMenu)
    };

    const closeMobMenu = function(){
        setShowMobMenu(false)
    };

    return (
        <header>
            <nav>
                <img src={logo} alt="logo" className="logo" />
                <div className="menu-btn"
                    onClick={toggleMenu}>
                    <span className={`burger ${showMobMenu && "open"}`}></span>
                    <span className={`burger ${showMobMenu && "open"}`} style={{background:"chocolate"}}></span>
                    <span className={`burger ${showMobMenu && "open"}`}></span>
                </div>
                <ul className="links">
                    {links.map(function(link){
                        const {id, url, text} = link;
                        return (
                            <li key={id}
                                className="nav-item">
                                <HashLink
                                    smooth to={url}>
                                    {text}
                                </HashLink>
                            </li>
                        )
                    })}
                </ul>
            </nav>
            <ul className={`${showMobMenu ? "mob-links fade-in" : "mob-links -fade-out"}`}>
                {links.map(function(link){
                    const {id, url, text} = link;
                    return (
                        <li key={id}
                            className="mob-link-item"
                            onClick={closeMobMenu}>
                            <HashLink
                                smooth to={url}
                                style={{zIndex:"10"}}>
                                {text}
                            </HashLink>
                        </li>
                    )
                })}
            </ul>

            <section className="banner">
                <div className={`banner-wrapper ${showMobMenu && "open"}`}>
                    <h1 className="banner-title">Sandwich bar</h1>
                    <h2>restaurant & <br /> take-away food shop</h2>
                    <div className="banner-underline"></div>
                    <a href="https://www.olivemagazine.com/guides/best-ever/best-ever-sandwich-recipes/" 
                        target="_blank"
                        rel="noreferrer" 
                        className="main-button">
                        explore
                    </a>
                </div>
            </section>
            <Socials />
        </header>
    )
}

