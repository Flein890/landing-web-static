import styled from "styled-components"

export const HeaderStyled = styled.header`
display:flex;
justify-content:space-between;
width: 100%;
align-items:center;
margin-top: 50px;
margin-bottom: 100px; //provisional
position: relative;

@media (max-width: 976px) {
    padding: 0px 25px;
}


`

export const NavbarStyled = styled.nav`
display:flex;
gap: 30px;
@media (max-width: 976px) {
    display: none;
}

`

export const NavbarResponsive = styled.nav`
display:flex;
gap: 15px;
flex-direction:column;
display: none;
position: absolute;
right: 25px;
top: 50px;
direction: rtl;
background: rgba( 255, 255, 255, 0.3 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 1.5px );
-webkit-backdrop-filter: blur( 1.5px );
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 );
padding: 15px;
@media (max-width: 976px) {
    display: flex;
};
/* transform: translateX(100%); */
`

export const Active = styled.a`
color: #fff;
text-decoration:none;
display:flex;
gap: 5px;
align-items:center;`

export const LinkStyled = styled.a`
text-decoration:none;
display:flex;
gap: 5px;
align-items:center;
color: #aaa;
`

export const Toggle = styled.button`
border-radius: 5px;
border: 1px solid #fff;
padding: 5px 10px;
background-color: transparent;
display: none;
@media (max-width: 976px) {
    display: block;
}
`