import React from 'react'
import airbnb from "/images/Airbnb.png"
import google from "/images/google.png"
import itNews from "/images/IT-News-Africa.png"
import tnw from "/images/tnw.png"
import nike from "/images/Logo_NIKE.png"
import phone from "/images/phone.png"
import { BrandStyled,ImgContainer,Img,CardsContainer,FirstContent,Card,Card2,CardContent,ImgPhone, CardParagraph, CardTitle,CardButton } from './BrandsStyled'

function Brands() {
  return (
    <BrandStyled>
        <ImgContainer>
             <Img src={tnw} alt="tnw" />
             <Img src={google} alt="google" />
             <Img src={nike} alt="Nike" />
        </ImgContainer>
        <ImgContainer>
             <Img src={airbnb} alt="airbnb" />
             <Img src={itNews} alt="ItNewsAfrica" />
             </ImgContainer>

        <CardsContainer>
            <Card>
                <FirstContent>
                <CardTitle>Get in touch with us</CardTitle>
                <CardParagraph>Maecenas sed diam eget risus varius blandit sit amet non magna.</CardParagraph>
                <CardButton>Hire Us</CardButton>
                </FirstContent>
                
            </Card>
            <Card2>
                <CardContent>
                  <CardTitle>Our Projects</CardTitle>
                  <CardParagraph>Maecenas sed diam eget risus varius blandit sit amet non magna.</CardParagraph>
                <CardButton>See Projects</CardButton>
                </CardContent>
                 <ImgPhone src={phone} alt="Phone Stadistic" />
            </Card2>
        </CardsContainer>
    </BrandStyled>
  )
}

export default Brands
