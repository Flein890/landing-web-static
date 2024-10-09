import React from 'react'
import { NavbarStyled,HeaderStyled,Active,Toggle, LinkStyled,NavbarResponsive } from './NavbarStyled'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { toggleNavbar } from '../../Redux/reducers/NavbarReducer'

function Navbar() {
  const isNavbarOpen = useSelector(state => state.navbar.isOpen)

  const dispatch = useDispatch();
  
 

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
   
   {isNavbarOpen &&
    <NavbarResponsive>
      <Active href='#'>Home</Active>
      <LinkStyled href='#'>Services</LinkStyled>
      <LinkStyled href='#'>Technology</LinkStyled>
      <LinkStyled href='#'>Case Studies</LinkStyled>
      <LinkStyled href='#'>About</LinkStyled>
      <Active href='#'><i className="fa-regular fa-credit-card"></i>Hire us</Active>
    </NavbarResponsive>}
    <Toggle  onClick={() => dispatch(toggleNavbar())}><i className="fa-solid fa-bars"></i></Toggle>
 </HeaderStyled>
  )
}

export default Navbar
