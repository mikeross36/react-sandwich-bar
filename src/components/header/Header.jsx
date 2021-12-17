import logo from "../../images/logo.png"
import {links} from "./data"
import {HashLink} from "react-router-hash-link"
import MainBtn from "../mainbtn/MainBtn"
import Socials from "../socials/Socials"

export default function Header({toggleMobMenu, showMobMenu, closeMobMenu}){
    return(
        <header>
            <nav>
                <img src={logo} alt="logo" className="logo"/>
                <button className="menu-btn" onClick={toggleMobMenu} data-testid="menu-btn">
                    <figure className={`burger ${showMobMenu && "open"}`}></figure>
                    <figure className={`burger ${showMobMenu && "open"}`}></figure>
                    <figure className={`burger ${showMobMenu && "open"}`}></figure>
                </button>
                <ul className="desktop-links" data-testid="desktop-links">
                    {links.map(function(link){
                        const {id, url, text} = link;
                        return (
                            <li key={id} 
                                className="desktop-link-item">
                                <HashLink
                                    smooth to={url}>
                                    {text}                      
                                </HashLink> 
                            </li>
                        )
                    })}
                </ul>
            </nav>
            <ul className={`mobile-links ${showMobMenu ? "fade-in" : "fade-out"}`} data-testid="mobile-links">
                {links.map(function(link){
                    const {id, url, text} = link;
                    return (
                        <li key={id} 
                            className="mobile-link-item"
                            onClick={closeMobMenu}>
                            <HashLink
                                smooth to={url}>
                                {text}
                            </HashLink>
                        </li>
                    )
                })}
            </ul>

            <section className="banner">
                <div className={`banner-wrapper ${showMobMenu && "open"}`} data-testid="banner-wrapper">
                    <h1 className="banner-title">Sandwich bar</h1>
                    <h2>restaurant & <br/>take-away food shop</h2>
                    <div className="banner-underline"></div>
                    <a href="https://www.olivemagazine.com/guides/best-ever/best-ever-sandwich-recipes/"
                        target="_blank" rel="noreferrer">
                        <MainBtn />
                    </a>
                </div>
            </section>
            <Socials />
        </header>
    )
}