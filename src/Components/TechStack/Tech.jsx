import React from 'react'
import { TechContainer,TextTech,TechBg,TechTitle,Paragraph,TechImages,TechImg,ImgContainer } from './TechStyled'
import html from "/tech/html.png"
import css from "/tech/css.png"
import node from "/tech/node.png"
import python from "/tech/python.png"
import sass from "/tech/sass.png"
import angular from "/tech/angular.png"

function Tech() {
  return (
    <TechBg>
    <TechContainer>
    <TextTech>
        <TechTitle>We use cutting edge technology</TechTitle>
        <Paragraph>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur, suscipit
         perferendis facere perspiciatis dolor excepturi facilis sequi. Cumque quis omn
         is adipisci eligendi, rerum sapiente delectus voluptates harum laboriosam reiciendis.
         lias!</Paragraph>
    </TextTech>
    <TechImages>
      <ImgContainer>
        <TechImg src={html} alt="html" />
        <TechImg src={sass} alt="sass" />
        <TechImg src={angular} alt="angular" />
      </ImgContainer>
      <ImgContainer>
        <TechImg src={css} alt="css" />
        <TechImg src={node} alt="node" />
        <TechImg src={python} alt="python" />
      </ImgContainer>
    </TechImages>
    </TechContainer>
    </TechBg>
  )
}

export default Tech
