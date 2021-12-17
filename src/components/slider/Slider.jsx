import React from "react"
import {useEffect} from "react"
import {slides} from "./data"
import {FaAngleDoubleLeft, FaAngleDoubleRight} from "react-icons/fa"

export default function Slider({currentSlide, setCurrentSlide, goPrevSlide, goNextSlide}){

    useEffect(function(){
        let slider = setInterval(function(){
            setCurrentSlide(function(slide){
                let activeSlide = slide + 1;
                if(activeSlide > slides.length -1){
                    activeSlide = 0;
                }
                return activeSlide;
            })
        },3000)
        return function(){
            clearInterval(slider)
        }
    },[currentSlide, setCurrentSlide])

    return (
        <section className="slider" id="slider">
            <div className="slider-wrapper" data-testid="slider-wrapper">
                {slides.map(function(slide, index){
                    const {id, image, title, description} = slide;

                    let position = "next-slide"
                    if(index === currentSlide){
                        position = "active-slide"
                    }
                    else if(index === currentSlide - 1 || (currentSlide === 0 && index === slides.length -1)){
                        position = "prev-slide"
                    }
                    return (
                        <article key={id} className={`slide ${position}`}>
                            <img src={image} alt="slide pic" />
                            <div>
                                <h4 className="title">{title}</h4>
                                <span className="description">{description}</span>
                            </div>
                        </article>
                    )
                })}
            </div>
            <button className="prev-btn"
                onClick={goPrevSlide}>
                <FaAngleDoubleLeft />
            </button>
            <button className="next-btn"
                onClick={goNextSlide}>
                <FaAngleDoubleRight />
            </button>
        </section>
    )
}