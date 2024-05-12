import React from 'react'
import { Bubble,ServiceStyled,ServiceInfo,ServiceTitle,ServiceParagraph,CardsContainer, Card } from './ServicesStyled'

function Services() {
  return (
    <ServiceStyled>
      <ServiceInfo>
        <ServiceTitle>Our Services</ServiceTitle>
        <ServiceParagraph>We feel very strong about our skills when it comes to planning, designing and coding applications. Here is what we love to do!</ServiceParagraph>
      </ServiceInfo>
      <CardsContainer>
          <Card>
            <div>
                <Bubble>
                <i className="fa-thin fa-newspaper"></i>
                </Bubble>
            </div>
          </Card>
         

      </CardsContainer>
    </ServiceStyled>
  )
}

export default Services
