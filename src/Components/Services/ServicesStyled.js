import styled from 'styled-components'

export const ServiceStyled = styled.div`
display:flex;
flex-direction:column;
width: 100%;
margin-top: 100px;
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
gap: 20px;
margin-top: 30px;
`
export const Card = styled.div`
display: flex;
justify-content: center;
align-items: center;
background-color: #fff;
padding: 30px;
border-radius: 5px;
width: 1/3 * 100%;
box-shadow: 0 0 10px rgba(0,0,0,0.1);

`

export const Bubble = styled.div`
width: 40px;
height: 40px;
background-color:#3871FF ;
border-radius:50%;

`


