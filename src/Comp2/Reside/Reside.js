import React from 'react'
import Header from "../Header/Header"
import Hero from "../Hero/Hero"
// import Logo from "../LogoHolder/LogoHold"
import FlowerVase from '../FlowerVase/FlowerVase'
import NewProduct from '../NewP/NewProduct'
import Flower from '../Flowers/Flower'
import BestS from '../BestSell/BestS'
import SlideMainHold from '../SliderComp/SlideMainCon'

const Reside = () => {
  return (
    <div>
        <Header/>
        <Hero/>
        {/* <Logo/> */}
        <FlowerVase/>
        <NewProduct/>
        <Flower/>
        <BestS/>
        <SlideMainHold/>
    </div>
  )
}

export default Reside