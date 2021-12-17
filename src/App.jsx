import React, {useState} from "react"
import {BrowserRouter as Router} from "react-router-dom"
import Header from "./components/header/Header"
import Offer from "./components/offer/Offer"
import { slides } from "./components/slider/data"
import Slider from "./components/slider/Slider"
import Tabs from "./components/tabs/Tabs"
import Footer from "./components/footer/Footer"
import Copyright from "./components/copyright/Copyright"
import SeasonOffer from "./components/season/SeasonOffer"

export default function App(){
  const [showMobMenu, setShowMobMenu] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [activeTab, setActiveTab] = useState(1)

  const toggleTab = function(index){
    setActiveTab(index)
  };

  const goPrevSlide = function(){
    setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide -1)
  };

  const goNextSlide = function(){
    setCurrentSlide(currentSlide === slides.length -1 ? 0 : currentSlide +1)
  }

  const toggleMobMenu = function(){
    setShowMobMenu(!showMobMenu)
  };

   const closeMobMenu = function(){
     setShowMobMenu(false)
   };

  return (
    <Router>
      <Header 
        toggleMobMenu={toggleMobMenu}
        showMobMenu={showMobMenu}
        closeMobMenu={closeMobMenu}
      />
      <Offer />
      <Slider 
        currentSlide={currentSlide}
        setCurrentSlide={setCurrentSlide}
        goPrevSlide={goPrevSlide}
        goNextSlide={goNextSlide}
      />
      <SeasonOffer />
      <Tabs 
        activeTab={activeTab}
        toggleTab={toggleTab}
      />
      <Footer />
      <Copyright />
    </Router>
  )
}