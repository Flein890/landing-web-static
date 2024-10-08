import styled from "styled-components";

export const TechBg = styled.div`
background-color: #3871FF;
width: 100%;
display: flex;
justify-content: center;

`

export const TechContainer = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
max-width: 1200px;
gap: 50px;
padding:200px 0px 150px 0px;
/* background-color:#3871FF ; */
color: #fff;

`
export const TextTech = styled.div`
display: flex;
flex-direction: column;
align-items: start;
justify-content: start;
gap: 30px;
/* width: 700px; */
`
export const TechTitle = styled.h2`
font-size: 2em;
font-family: "Circular-Std-300", sans-serif;
`
export const Paragraph = styled.p`
font-size: 1.2em;
color: #94B3FF;
font-family: "Circular-Std-300", sans-serif;
`
export const TechImages = styled.div`
display: flex;
flex-direction: row;
align-items: end;
justify-content: end;
gap: 50px;
width: 600px;
object-fit: contain;
`

export const ImgContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 20px;
object-fit: contain;
`

export const TechImg = styled.img`
width: 70px;
height: 70px;
object-fit: contain; 
filter: brightness(0%) invert(100%);
`