import styled from 'styled-components'

export const ServiceStyled = styled.div`
display:flex;
flex-direction:column;
width: 100%;
padding-top: 100px;
justify-content: center;
align-items: center;

`
export const ServiceInfo = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
max-width: 650px;
text-align: center;
`
export const ServiceTitle = styled.h2`
color: #fff;
font-size: 2em;`

export const ServiceParagraph = styled.p`
color: #aaa;
font-size: 1.2em;`

// cards

export const CardsContainer = styled.div`
display:flex;
gap: 24px;
margin-top: 30px;
`
export const Card = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
background-color: #fff;
padding:40px 36px;
width: 360px;
border-radius: 3px;
gap: 20px;
width: 1/3 * 100%;
box-shadow: 0 0 10px rgba(0,0,0,0.1);

`
export const InfoContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 16px;
text-align:center`

export const Bubble = styled.div`
width: 60px;
height: 60px;
background-color:#3871FF ;
border-radius:50%;
display: flex;
justify-content: center;
align-items: center;
/* margin-bottom:24px; */

`
export const BubbleImg = styled.img`
width: 60%;
height: 60%;
object-fit: contain;
`

export const CardTitle = styled.h3`
font-size: 1.2em;
margin:0 auto;
`
export const CardParagraph = styled.p`
font-size: 1em;
line-height: 1.6em;
color:#8E8E8E;
font-family: "Circular-Std-300", sans-serif;
`
export const CardButton = styled.button`
background-color: transparent;
border: 2px solid #D8D8D8;
border-radius: 3px;
color: #A5A5A5;
font-size: 0.9em;
/* font-family: "Circular-Std-300", sans-serif; */
padding: 8px 30px;
`