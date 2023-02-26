import styled from "styled-components";
import CatBackgroundIMG from "../../images/cat-backgroundIMG.jpg"


export const ContenedorCategorias = styled.div`
display: flex;
justify-content: space-evenly;
background-color: #ffffff;
opacity: 1;
background-image: url(${CatBackgroundIMG});
background-size: 64px 64px;
padding: 40px;
@media (max-width: 768px) {
  flex-direction: column;
  gap: 50px; 
  align-items: center;
  }
`;

export const SelectCoctel = styled.select`
  width: 80%;
  height: 35px;
  color: gray;
  padding-left: 5px;
  font-size: 14px;
  margin-top: 10px;
  margin-left: 10px;
  margin-bottom: 10px;

  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
    font-size: 1.5rem;
  }
`;


export const SubContenedorSelect = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
opacity: 1;
background-size: 64px 64px;
`;

export const SelectTitulo = styled.h2`
color: #F0E68C;
`;

export const DescripcionContenedor = styled.div`
height: 250px;
width: 350px;
background-color: #3F301D;
padding: 20px;
box-shadow: inset 0px 5px 12px 0px #251a13;
p{
color: #E1D9D1;
font-size: 1.15rem;
}
`;