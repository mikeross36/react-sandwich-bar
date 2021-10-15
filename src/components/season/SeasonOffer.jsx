import React from "react"

import season1 from "../../images/season1.jpg"
import season2 from "../../images/season2.jpg"
import season3 from "../../images/season3.jpg"
import season4 from "../../images/season4.jpg"
import season5 from "../../images/season5.jpg"
import season6 from "../../images/season6.jpg"
import season7 from "../../images/season7.jpg"
import season8 from "../../images/season8.jpg"
import season9 from "../../images/season9.jpg"
import season10 from "../../images/season10.jpg"

export default function SeasonOffer(){
    return (
        <section className="season">
            <h2>Our sandwich day</h2>
            <article className="season-offer">
                <img src={season1} alt="season1" />
                <img src={season2} alt="season2" />
                <img src={season3} alt="season3" />
                <img src={season4} alt="season4" />
                <img src={season5} alt="season5" />
                <img src={season6} alt="season6" />
                <img src={season7} alt="season7" />
                <img src={season8} alt="season8" />
                <img src={season9} alt="season9" />
                <img src={season10} alt="season10" />
            </article>
        </section>
    )
}