import React from 'react'
import doc from '/images/doc.png'
import computer from '/images/computer.png'
import pencil from '/images/pencil.png'
import { CardButton,Bubble,BubbleImg,CardTitle,CardParagraph,InfoContainer,ServiceStyled,ServiceInfo,ServiceTitle,ServiceParagraph,CardsContainer, Card } from './ServicesStyled'

function Services() {
  return (
    <ServiceStyled>
      <ServiceInfo>
        <ServiceTitle>Our Services</ServiceTitle>
        <ServiceParagraph>We feel very strong about our skills when it comes to planning, designing and coding applications. Here is what we love to do!</ServiceParagraph>
      </ServiceInfo>
      <CardsContainer>
          <Card>     
            <InfoContainer>
                <Bubble>
                  <BubbleImg src={doc} alt='document image' />
                </Bubble>
                <CardTitle>Businesss & Product Concept</CardTitle>
                <CardParagraph>Analyse business and product concepts at Start-up 
                  Workshops or ongoing Projects Audits and prepare a viable and sensible 
                  product roadmap for achieving a perfect market fit.
                </CardParagraph>
            </InfoContainer>
            <CardButton>Learn More</CardButton>
          </Card>
          <Card>     
            <InfoContainer>
                <Bubble>
                  <BubbleImg src={computer} alt='computer image' />
                </Bubble>
                <CardTitle>Web & Mobile Development</CardTitle>
                <CardParagraph>Plan, develop and test high-quality web-applications 
                  using AngularJS, NodeJS, JavaScript, Typescript, HTML5 and SASS/CCS3
                  frameworks and native mobile languages.
                </CardParagraph>
            </InfoContainer>
            <CardButton>Learn More</CardButton>
          </Card>
          <Card>     
            <InfoContainer>
                <Bubble>
                  <BubbleImg src={pencil} alt='pencil image' />
                </Bubble>
                <CardTitle>UX & UI Design</CardTitle>
                <CardParagraph>Sketch information architecture and simple mock-ups, 
                  convert them into clickable prototypes and finish with usable 
                  interface designs to deliver a good and reliable user experience.
                </CardParagraph>
            </InfoContainer>
            <CardButton>Learn More</CardButton>
          </Card>
         

      </CardsContainer>
    </ServiceStyled>
  )
}

export default Services
