import styled from "styled-components";

export const CardsProductosContenedor = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;


export const CardProducto = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 400px;
  width: 500px;
  margin: 20px;
  border-radius: 7px 7px 7px 7px;
  img {
    display: flex;
    height: 350px;
    width: 250px;
    border-radius: 30px 0 0 30px;
  }
  h1 {
      margin: 0 0 0 38px;
  padding-top: 20px;
  font-size: 32px;
  color: #474747;
  line-height: 2rem;
  }
  h2{
  margin: 5px 0 20px 38px;
  font-size: 12px;
  font-weight: 400;
  text-transform: uppercase;
  color: #d2d2d2;
  letter-spacing: 0.1em;

  }
  p{
  height: 125px;
  margin: 0 10px 0 10px;
  font-family: 'Playfair Display', serif;
  color: #8d8d8d;
  line-height: 1.40em;
  font-size: 14px;
  font-weight: lighter;
  overflow: hidden;
  }
  span{
  display: inline-block;
  height: 10px;
  font-family: 'Suranna', serif;
  font-size: 24px;
  color: #051094;
  
  }
  @media (max-width: 1024px) {
    display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  width: 300px;
  margin: 30px auto;
  border-radius: 7px 7px 7px 7px;
  img{
    width: 250px;
    border-radius: 30px 30px 0 0;
  }

  h1{
    font-size: 28px;
    margin: 0;
  }
  p{
    margin: 0 0 20px 30px;
  }

  h2{
    margin: 10px 0 10px 0;
  }
  }
`;

export const CardTexto = styled.div`
  height: 250px;
  width: 250px;
`;

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 350px;
  width: 250px;
  border-radius: 0px 7px 7px 0px;
  background-color: #ffffff;
    @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 350px;
    width: 250px;
    border-radius: 0px 0px 7px 7px;

  }
`;

export const CardTextoContainer = styled.div`
  height: 250px;
  width: 250px;
`;

export const CardButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 75px;
  width: 250px;
  margin-top: 5px;
  margin-bottom: 10px;
`;

export const CardPrecioSpan = styled.span`
  display: inline-block;
  height: 7px;
  font-size: 30px;
`;


