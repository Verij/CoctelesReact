import styled from "styled-components";





export const ItemsContenedorDerecha = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const ItemsNombre = styled.span`
  display: block;
  margin-bottom: 15px;
  font-size: 1.25rem;
`;

export const ItemsPrecio = styled.span`
  color: darkblue;
`;

export const CantidadContenedor = styled.div`
  display: flex;
  height: auto;
  width: 120px;
  gap: 5px;
`;

export const ItemsCantidad = styled.span`
display: flex;
justify-content: center;
  font-size: 1.1rem;
  width: 15px;

`;

export const ItemsImagen = styled.img`
float: left;
margin-right: 20px;
width: 75px;
`;


export const RestaBtn = styled.button`
  height: 20px;
  width: 20px;
  cursor: pointer;
  border-radius: 6px;
  color: white;
  background-color: darkblue;
`;

export const SumaBtn = styled.button`
  height: 20px;
  width: 20px;
  cursor: pointer;
  border-radius: 6px;
  color: white;
  background-color: darkblue;
`;

export const QuitarBtn = styled.button`
margin-top: 10px;
margin-bottom: 2px;
border-radius: 50%;
height: 20px;
width: 20px;
background-color: rgb(230, 56, 56);
color: rgb(223, 223, 223);
border: none;
  &:hover {
  opacity: 0.98;
  color: black;
  }
  &:active {
    background-color: black;
  }
`;
