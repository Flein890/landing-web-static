import React from 'react'
import { ServiceInfo,ServiceTitle,ServiceParagraph,ServiceStyled } from './ServicesStyled'

function Services() {
  return (
    <ServiceStyled>
      <ServiceInfo>
        <ServiceTitle>Our Services</ServiceTitle>
        <ServiceParagraph>We feel very strong about our skills when it comes to planning, designing and coding applications. Here is what we love to do!</ServiceParagraph>
      </ServiceInfo>
    </ServiceStyled>
  )
}

export default Services
