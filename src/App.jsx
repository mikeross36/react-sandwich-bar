import React from "react"
import {BrowserRouter as Router} from "react-router-dom"
import Header from "./components/header/Header"
import Offer from "./components/offer/Offer"
import Tabs from "./components/tabs/Tabs"
import Slider from "./components/slider/Slider"
import SeasonOffer from "./components/season/SeasonOffer"
import Footer from "./components/footer/Footer"
import Copyright from "./components/copyright/Copyright"

export default function App(){
    return (
        <Router>
            <Header />
            <Offer />
            <Slider />
            <SeasonOffer />
            <Tabs />
            <Footer />
            <Copyright />
        </Router>
    )
}

if(undefined) {
    undefined.accept()
}