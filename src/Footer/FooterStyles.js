import styled from "styled-components";

export const Bg = styled.div`
display: flex;
background-color:#283345;
width: 100%;
justify-content: center;
align-items: center;
padding: 150px 0px 0px 0px;
flex-direction: column;
`
export const FooterStyled = styled.footer`
max-width: 1200px;
display: flex;
gap: 100px;
justify-content: start;
align-items: center;
padding-bottom: 50px;

`

export const TextContainer = styled.div`
display: flex;
flex-direction: column;
gap: 15px;
color: #fff;
font-family: "Circular-Std-300", sans-serif;

`

export const FooterTitle = styled.h4`
font-size: .8em;
color: #fff;

`

export const FooterParagraph = styled.p`
color:#9EA3AB;
font-size: .9em;
`

export const LinksContainer = styled.div`
display: flex;
flex-direction: row;
gap: 30px;
width: 50%;
`
export const LinksA = styled.a`
text-decoration: none;
color:#9EA3AB;
font-family: "Circular-Std-300", sans-serif;
font-size: .9em;

`

export const SocialImg = styled.img`
filter: grayscale(100%);
opacity: .8;
width: 20px;
`

export const NavigationContainer = styled.div`
display: flex;
flex-direction: column;
gap: 15px;
`
export const Navigation = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
`

export const NavigationTitle = styled.h4`
font-size: .7em;
color: #fff;
`
export const CreatedBy = styled.p`
color:#9EA3AB;
font-size: .8em;
align-items: center;
text-align: center;
`