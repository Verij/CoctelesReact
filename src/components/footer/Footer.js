import React from 'react'
import { CopyrightText, FooterContainer, FooterSection, FooterTitle, SocialIconsContainer } from './FooterStyles'
import { SocialIcons } from './SocialIcons';

const Footer = () => {
  return (
    <>
    <FooterSection>
      <FooterContainer>
      <FooterTitle>Seguinos en nuestras redes sociales</FooterTitle>

      <SocialIconsContainer>
        <SocialIcons />
      </SocialIconsContainer>
      </FooterContainer>
      <CopyrightText>© XXXX NoDef</CopyrightText>
    </FooterSection>
    </>

  )
};

export default Footer;