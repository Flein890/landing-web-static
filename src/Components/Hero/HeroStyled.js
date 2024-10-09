import styled from 'styled-components'


export const HeroStyled = styled.div`
display:flex;
flex-direction:column;
gap: 20px;
width: 100%;
margin-top: 100px;
margin-bottom: 100px;
@media (max-width: 976px) {
    padding: 0px 50px;
}
@media (max-width: 576px) {
    margin-top: 0px;
    text-align: center;
}
`

export const HeroContainer = styled.div`
display:flex;
flex-direction:column;
gap: 15px;
max-width: 600px;
`

export const ButtonsContainer = styled.div`
display:flex;
gap: 15px;
@media (max-width: 576px) {
    justify-content: center;

}

`

export const Title = styled.h1`
font-size: 2.7em;
color: #fff;
font-family: "Circular Std bold", sans-serif;
@media (max-width: 576px) {
    font-size: 2em;
}
`

export const Paragraph = styled.p`
font-size: 1.2em;
color: #aaa;
@media (max-width: 576px) {
    font-size: 1em;
}
`
export const ButtonBlue=styled.button`
background-color:#3871FF ;
border: 1px solid #3871FF;
border-radius: 3px;
color: #fff;
font-size: 1.2em;
font-family: "Circular-Std-300", sans-serif;
padding:10px 5px;
width: 150px;
@media (max-width: 576px) {
    font-size: 1em;
    padding:6px 4px;
}
`
export const Buttonn = styled.button`
background-color: transparent;
border: 1px solid #999;
border-radius: 3px;
color: #999;
font-size: 1.2em;
font-family: "Circular-Std-300", sans-serif;
padding:10px 5px;
width: 150px;
@media (max-width: 576px) {
    font-size: 1em;
    padding:6px 4px;
}
`