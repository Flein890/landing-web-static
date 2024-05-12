import Hero from "../Hero/Hero";
import Navbar from "../Navbar/Navbar";
import Services from "../Services/Services";
import React from 'react'
import { LayoutStyled, BackGroundPicture } from "./LayoutStyled";

function AuxComponent() {
  return (
    <BackGroundPicture>
      <LayoutStyled>
      <Navbar/>
      <Hero />
      <Services />
     </LayoutStyled>
    </BackGroundPicture>
    
  )
}

export default AuxComponent
