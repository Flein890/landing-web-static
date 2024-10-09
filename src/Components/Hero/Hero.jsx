import React from 'react'
import Button from 'react-bootstrap/Button'
import { HeroStyled,HeroContainer,ButtonsContainer,Title,Paragraph } from './HeroStyled'
import { Buttonn,ButtonBlue } from './HeroStyled'

function Hero() {
  return (
    <HeroStyled>
      <HeroContainer>
        <Title>We build beautiful and reliable web solution</Title>
        <Paragraph>We strongly believe that communication, trust and transparency are the essential elements of successful business relationships. Ready for the journey?</Paragraph>
      </HeroContainer>
      <ButtonsContainer>
        <Buttonn>Learn More</Buttonn>
        <ButtonBlue>Our projects</ButtonBlue>
      </ButtonsContainer>
    </HeroStyled>
  )
}

export default Hero

