import styled from "styled-components"
import assetBackground from "../../../assets/background/assetBackground.jpg"

export const BackGroundPicture = styled.div`
background-image: url(${assetBackground}) ;
background-size:contain;
background-position: right	;
background-repeat: no-repeat;
background-color: #283345;



`

export const LayoutStyled = styled.div`
display:flex;
flex-direction:column;
align-items:center;
max-width: 1200px;
margin: 0 auto;
`