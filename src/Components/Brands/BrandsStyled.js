import styled from "styled-components"

export const BrandStyled = styled.div`
display: flex;
flex-direction:column;
background-color:#FFFFFF ;
padding:100px;
color:#fff;
gap: 60px;

@media (max-width: 768px) {
padding: 100px 20px

}

`

export const ImgContainer = styled.div`
display: flex;
flex-direction:row;
justify-content: center;
align-items: center;
gap: 50px;
object-fit: contain;
@media (max-width: 576px) {
    gap: 26px;
}
`

export const Img = styled.img`
max-width: 150px;
filter: grayscale(100%);
opacity: .8;
@media (max-width: 976px) {
    max-width: 100px;
}
`

export const CardsContainer = styled.div`
display: flex;
gap: 30px;
justify-content: center;
font-family: "Circular-Std-300", sans-serif;
height: 250px;
margin-bottom:-150px;
@media (max-width: 976px) {
    flex-direction: column;
    align-items: center;
    justify-content:  center;
    height: 500px;
}
`
export const Card = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: start;
gap: 15px;
background-color: #3871FF;
border-radius: 6px;
/* padding: 40px 25px; */
padding-left: 25px;
width: 600px;
@media (max-width: 976px) {
    padding: 25px 25px;
}
@media (max-width: 768px) {
    width: 100%;
}

`                   
export const Card2 = styled.div`
display: flex;
background-color: #3871FF;
align-items: end;
border-radius: 6px;
width: 600px;
@media (max-width: 768px) {
    width: 100%;
}


`
export const CardContent = styled.div`

display:flex;
flex-direction:column;
gap: 15px;
justify-content: center;
width: 350px;
height: 100%;
padding-left: 25px;
@media (max-width: 576px) {
    padding: 25px 25px;
}
`
export const FirstContent = styled.div`
display:flex;
flex-direction:column;
gap: 15px;
width: 350px;
/* height: 100%; */
@media (max-width: 576px) {
    width: 100%;
}
`

export const ImgPhone = styled.img`
width: 250px;
object-fit: contain;
@media (max-width: 576px) {
    width: 100px;
}
`

export const CardTitle = styled.h3`
font-family: "Circular-Std-300", sans-serif;
font-size: 1.5em;

`

export const CardParagraph = styled.p`
color: #D7E2FF;
font-family: "Circular-Std-300", sans-serif;
font-size: 0.9em;
max-width: 200px;

`

export const CardButton = styled.button`
background-color: transparent;
border: 2px solid #ccc;
border-radius: 3px;
color: #fff;
font-size: 0.9em;
font-family: "Circular-Std-300", sans-serif;
padding: 8px 30px;
width: 150px;
`