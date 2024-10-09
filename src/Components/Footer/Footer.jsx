import React from 'react'
import { CreatedBy,Bg,FooterStyled,FooterTitle,NavigationContainer,Navigation,NavigationTitle,FooterParagraph,TextContainer,LinksContainer,LinksA,SocialImg } from './FooterStyles'
import insta from "/social/insta.png"
import linkedin from "/social/linkedin.png"
import whatsapp from "/social/whatsapp.png"



function Footer() {
  return (
    <Bg>
    <FooterStyled>
     <TextContainer>
        <FooterTitle>compleet labs</FooterTitle>
        <FooterParagraph>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Donec ullamcorper nulla.</FooterParagraph>
        <LinksContainer>
            <LinksA href="https://www.instagram.com/francock777/"><SocialImg src={insta} alt="instagram" /></LinksA >
            <LinksA href="www.linkedin.com/in/franco-villanova-07708a288"><SocialImg src={linkedin} alt="linkedin" /></LinksA >
            <LinksA href=""><SocialImg src={whatsapp} alt="whatsapp" /></LinksA >
        </LinksContainer>
     </TextContainer>

     <LinksContainer>
        <NavigationContainer>
            <NavigationTitle>SITEMAP</NavigationTitle>
            <Navigation>
                <LinksA href="">Home</LinksA>
                <LinksA href="">Technology</LinksA>
                <LinksA href="">Services</LinksA>
                <LinksA href="">About</LinksA>
            </Navigation>
        </NavigationContainer>
        <NavigationContainer>
            <NavigationTitle>CASE STUDIES</NavigationTitle>
            <Navigation>
                <LinksA href="">Swiss Airlines</LinksA>
                <LinksA href=""></LinksA>
                <LinksA href=""></LinksA>
                <LinksA href=""></LinksA>
            </Navigation>
        </NavigationContainer>
        <NavigationContainer>
            <NavigationTitle>CONTACT</NavigationTitle>
            <Navigation>
                <LinksA href="">Jobs</LinksA>
                <LinksA href="">Hire Us</LinksA>
            </Navigation>
        </NavigationContainer>

     </LinksContainer>
    
    </FooterStyled>
    <CreatedBy>Franco Villanova 2024.</CreatedBy>
    </Bg>
  )
}

export default Footer
