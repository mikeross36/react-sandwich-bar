import React from "react"
import {offers} from "./data.jsx"

export default function Offer(){
    return (
        <section className="offers" id="offers">
            <div className="title">
                <h1 className="title-text">what do we offer...</h1>
                <div className="title-underline"></div>
            </div>
            <div className="offer-wrapper">
                {offers.map(function(offer){
                    const {id, image, title, price, text} = offer;
                    return (
                        <article className="offer" key={id}>
                            <img src={image} alt={title} className="img-box" />
                            <div className="offer-info">
                                <div>
                                    <h4>{title}</h4>
                                    <h4>{price}</h4>
                                </div>
                                <p className="text">{text}</p>
                            </div>
                        </article>
                    )
                })}
            </div>
        </section>
    )
}