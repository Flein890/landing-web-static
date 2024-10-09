import Hero from "../Hero/Hero";
import Navbar from "../Navbar/Navbar";
import Services from "../Services/Services";
import React from 'react'
import { LayoutStyled, BackGroundPicture } from "./LayoutStyled";
import ServiceCards from "../Services/ServiceCards";
import Tech from "../TechStack/Tech";
import Brands from "../Brands/Brands";
import Footer from "../Footer/Footer";

function AuxComponent() {
  return (
    <>
  
  <BackGroundPicture>
      <LayoutStyled>  
         <Navbar/>
         <Hero />
        <Services />
     </LayoutStyled>
      </BackGroundPicture>
      <ServiceCards />
       <Tech />
      <Brands />
    <Footer/>
    </>
  )
}

export default AuxComponent
