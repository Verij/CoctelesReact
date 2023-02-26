import styled from "styled-components";

//Para ser sincero no use muchos global components, pero la carpeta esta para poder iterar en el futuro en caso de ser necesario

export const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  max-width: 100%;
`;



export const TextSpan = styled.span`
  color: ${props => props.color};
  font-weight: 600;
  font-size: ${props => props.size};
`;

export const Button = styled.button`
  background: ${props => props.background};
  color: ${props => props.color};
  text-align: center;
  padding: 12px;
  text-decoration: none;
  display: block;
  border-radius: 3px;
  font-size: 1.3rem;
  margin: 25px 0 15px 0;    
  cursor: pointer;
  transition: all 0.4s linear;
  border: none;
  border-radius: 10px;
  &:hover {
  opacity: 0.8;
  color: goldenrod;
  }
`;



export const Acomodador = styled.div`

`;