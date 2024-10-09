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

@media (max-width: 976px) {
    flex-direction: column;
/* padding-right: 50px;
padding-left: 50px; */
}
@media (max-width: 576px) {
    max-width: 350px;
}

`
export const TextTech = styled.div`
display: flex;
flex-direction: column;
align-items: start;
justify-content: start;
gap: 30px;
/* width: 700px; */
@media (max-width: 976px) {
    padding: 0px 50px;
}


`
export const TechTitle = styled.h2`
font-size: 2em;
font-family: "Circular-Std-300", sans-serif;
@media (max-width: 576px) {
    font-size: 1.5em;
}
`
export const Paragraph = styled.p`
font-size: 1.2em;
color: #94B3FF;
font-family: "Circular-Std-300", sans-serif;
@media (max-width: 576px) {
    font-size: 1em;
    direction: rtl;

}
`
export const TechImages = styled.div`
display: flex;
flex-direction: row;
align-items: end;
justify-content: end;
gap: 50px;
width: 600px;
object-fit: contain;
@media (max-width: 976px) {
    justify-content: center;
    align-items: center;
    width: 100%;
}
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