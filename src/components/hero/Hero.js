import React from 'react';
import { HeroContainer, HeroTexto, HeroTitulo, HeroParrafo, StyledHero, HeroImagen } from './HeroStyles';
import ImagenHero from '../../images/heroimages/hero-imagen.jpg';

const Hero = () => {
  return (
    <StyledHero>
      <HeroContainer>
        <HeroTexto>
          <HeroTitulo>Licoreria para todo lo gustelis</HeroTitulo>
          <HeroParrafo>Veni a probar nuestros tragos para terminar su dia.
            <br />
            Ya haya sido un dia productivo o de descanso, tenemos el coctel apropiado para la ocasion.
            <br />
            Esperamos que disfrute de su estadia.
          </HeroParrafo>
        </HeroTexto>
        <HeroImagen src={ImagenHero} alt='heroimg' />
      </HeroContainer>
    </StyledHero>
    
  )
};

export default Hero;
