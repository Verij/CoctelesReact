import React from 'react'
import { Navbar } from '../navbar/Navbar';
import { Logo, StyledHeader } from './HeaderStyles';
import logoImagen from '../../images/headerlogo/header-logo.png'

const Header = () => {
  return (
    <>
    <StyledHeader>
      <Logo src={logoImagen} alt='logo'/>
      <Navbar />
    </StyledHeader>
    </>
  )
};

export default Header;
