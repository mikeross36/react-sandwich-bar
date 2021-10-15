import React from "react"

export default function Copyright(){
    return (
        <div className="copyright" style={copyStyle}>
            <p style={pStyle}>&copy;Copyright 2020 DodaDesign All rights reserved</p>
        </div>
    )
}

const copyStyle = {
    width: "100vw",
    height: "auto",
    textAlign: "center",
    background: "#375c3c"
}

const pStyle = {
    padding: ".6rem",
    color: "white",
    fontSize: ".8rem"
}