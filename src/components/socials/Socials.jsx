import React from "react"
import {socialIcons} from "./data"

export default function Socials(){
    return (
        <div className="social-icons">
            {socialIcons.map(function(socIcon){
                const {id, url, icon} = socIcon;
                return (
                    <a 
                        key={id}
                        href={url}
                        target="_blank"
                        rel="noreferrer">
                        {icon}
                    </a>
                )
            })}
        </div>
    )
}