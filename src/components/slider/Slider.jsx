import React from "react"
import {slides} from "./data"
import {FaAngleDoubleLeft, FaAngleDoubleRight} from "react-icons/fa"

export default function Slider(){
    const [currentSlide, setCurrentSlide] = React.useState(0)

    const previousSlide = function(){
        setCurrentSlide(currentSlide === 0 ? slides.length -1 : currentSlide -1)
    };

    const nextSlide = function(){
        setCurrentSlide(currentSlide === slides.length -1 ? 0 : currentSlide +1)
    };

    React.useEffect(function(){
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
    },[currentSlide])

    return (
        <section className="slider" id="slider">
            <div className="slider-wrapper">
                {slides.map(function(slide, index){
                    const {id, image, name, title, description} = slide;
                    let position = "next-slide";
                    if(index === currentSlide){
                        position = "active-slide";
                    }
                    else if(index === currentSlide -1 || (currentSlide === 0 && index === slides.length -1)) {
                        position = "prev-slide";
                    }
                    return (
                        <article key={id} className={`slide ${position}`}>
                            <img src={image} alt={name}/>
                                <div>
                                    <h4 className="title">{title}</h4>
                                    <span className="description">{description}</span>
                                </div>
                        </article>
                    )
                })}
            </div>
            <button className="prev-btn"
                onClick={previousSlide}>
                <FaAngleDoubleLeft />
            </button>
            <button className="next-btn"
                onClick={nextSlide}>
                <FaAngleDoubleRight />
            </button>
        </section>
    )
}