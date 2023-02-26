import styled from "styled-components";


//parte del header del carrito (ARRIBA)
export const MenuCarrito = styled.div`
  position: fixed;
  margin: auto;
  width: 90%;
  top: 15%;
  left: 3%;
`;

export const MenuCarritoContainer = styled.div`
  margin: 10px 0;
  float: right;
  background: rgb(255, 255, 255);
  width: 320px;
  position: relative;
  border-radius: 3px;
  padding: 20px;
  &:after {
  bottom: 100%;
  left: 95%;
  border: solid transparent;
  content: " ";
  height: 0;
  width: 0;
  position: absolute;
  border-bottom-color: white;
  border-width: 8px;
  margin-left: -8px;
  }
`;

export const MenuCarritoHeader = styled.div`
  display: flex;
  border-bottom: 1px solid #E8E8E8;
  padding-bottom: 15px;
  justify-content: space-between;
`;

export const NumeroCarrito = styled.span`
  background-color: darkblue;
  border-radius: 10px;
  color: white;
  font-size: 12px;
  padding: 3px 7px;
  margin-left: 5px;
  text-align: center;
`;

export const TotalTexto = styled.span`
color: #ABB0BE;
font-weight: 600;
`;

export const TotalNumero = styled.span`
  color: darkblue;
`;

export const CerrarCartBTN = styled.button`
border-color: white;
border: 2px solid white;
border-radius: 15%;
background-color: darkblue;
color: white;
size: 20px;
padding: 8px;

  &:hover {
    color: gold;
  }

  &:active {
  border: 2px solid black;
  opacity: 0.98;

  }

`;

//parte de renderizado (MEDIO)
export const ContenedorRenderizadoCarrito = styled.ul`
padding-top: 20px;
  overflow-y: scroll;
  height: 380px;
  padding-right:16px;
li{
  margin-bottom: 20px;
  list-style: none;
  padding: 10px;
  background-color: #B1D4E0;
  height: 130px;
  border: 2px solid black;
}
@media (max-width: 768px) {
    height: 200px
  }
`;

export const Fijado = styled.li`

height: auto;
`
//parte de ABAJO
export const BotonCompra = styled.button`
  background: darkblue;
  color: white;
  text-align: center;
  padding: 12px;
  text-decoration: none;
  display: block;
  border-radius: 3px;
  font-size: 1.3rem;
  margin: 25px 0 15px 0;
  width: 100%;

  &:hover {
  opacity: 0.98;
  color: gold;
  }
`;

