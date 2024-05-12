import React from 'react'
import arrow from '../../../assets/svgs/arrow.svg'
import Button from 'react-bootstrap/Button'
import { HeroStyled,HeroContainer,ButtonsContainer,Title,Paragraph } from './HeroStyled'


function Hero() {
  return (
    <HeroStyled>
      <HeroContainer>
        <Title>We build beautiful and reliable web solution</Title>
        <Paragraph>We strongly believe that communication, trust and transparency are the essential elements of successful business relationships. Ready for the journey?</Paragraph>
      </HeroContainer>
      <ButtonsContainer>
        <Button style={{borderRadius: '3px',fontSize: '1.2em',padding:'10px 25px'}} size='lg' variant="outline-secondary">Learn More</Button>{' '}
        <Button style={{borderRadius: '3px',fontSize: '1.2em',padding:'10px 25px'}} size='lg'>Our projects</Button>{' '}
      </ButtonsContainer>
    </HeroStyled>
  )
}

export default Hero

