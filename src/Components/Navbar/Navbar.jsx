import React from 'react'
import { NavbarStyled,HeaderStyled,Active, LinkStyled } from './NavbarStyled'



function Navbar() {
  return (
 <HeaderStyled>
    <Active>compleet labs</Active>
    <NavbarStyled>
      <Active href='#'>Home</Active>
      <LinkStyled href='#'>Services</LinkStyled>
      <LinkStyled href='#'>Technology</LinkStyled>
      <LinkStyled href='#'>Case Studies</LinkStyled>
      <LinkStyled href='#'>About</LinkStyled>
      <Active href='#'><i className="fa-regular fa-credit-card"></i>Hire us</Active>
    </NavbarStyled>
 </HeaderStyled>
  )
}

export default Navbar
