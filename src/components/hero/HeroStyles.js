import styled from "styled-components";
import { Section } from "../globalcomponents/GlobalComponents";
import heroBackground from '../../images/heroimages/hero-background.jpg'


export const StyledHero = styled(Section)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  height: 70vh;
  background-image: url(${heroBackground});
`;

export const HeroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 80%;
  width: 90vw;
  padding: 10px;
  padding-top: 20px;
  @media(max-width: 768px) {
  justify-content: space-around;
padding: 5px;
padding-top: 10px;

}
`;

export const HeroImagen = styled.img`
height: 100%;
width: 340px;
@media(max-width: 768px) {
width: 150px;
}
`;

export const HeroTexto = styled.div`
    color: white;
    max-width: 400px;
@media(max-width: 1024px) {
max-width: 260px;
}
@media(max-width: 768px) {
  max-width: 160px;
  }
`;

export const HeroTitulo = styled.h2`
  margin-bottom: 60px;
  line-height: 1.35em;
  letter-spacing: 0.1em;
  font-size: 3.0rem;
  color: rgb(228, 191, 97);
@media(max-width: 1024px) {
font-size: 2.5rem;
}
  @media(max-width: 768px) {
font-size: 1.7rem;
}
`;

export const HeroParrafo = styled.p`
  line-height: 1.3em;
  font-size: 1.4rem;
  color: white;
  @media(max-width: 1024px) {
font-size: 1.4rem;
}
    @media(max-width: 768px) {
font-size: 1.1rem;
}
`;