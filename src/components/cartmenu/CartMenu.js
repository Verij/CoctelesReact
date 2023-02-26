import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CartMenuRender } from '../cartmenurender/CartMenuRender';
import { Acomodador } from '../globalcomponents/GlobalComponents';
import CartIcon from '../navbar/CartIcon';
import { MenuCarrito, MenuCarritoContainer, MenuCarritoHeader, NumeroCarrito, TotalNumero, TotalTexto, BotonCompra, ContenedorRenderizadoCarrito, CerrarCartBTN } from './CartMenuStyles';
import * as cartActions from '../../redux/cart/cart-actions';
import { useNavigate } from 'react-router-dom';



export const CartMenu = () => {

  //traigo los items del state
  const itemsAgregados = useSelector(state => state.cart.items);
  //verifico si esta logeado
  let isLogged = useSelector(state => state.user.currentUser);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  //handle del compra para que solo pueda usar el boton si esta logeado
  const handleCompra = () =>{
  if(isLogged){
    navigate('/confirm');
    dispatch(cartActions.toggleCart());
  }else{
    return;
  }
 };

  const total = itemsAgregados.reduce((acc, cur) => acc + cur.precio * cur.cantidad, 0);
  return (
    <MenuCarrito>
      <MenuCarritoContainer>
        <MenuCarritoHeader>
          <CerrarCartBTN onClick={() => dispatch(cartActions.toggleCart())}>cerrar</CerrarCartBTN>
          <Acomodador>
          
          <CartIcon />
          <NumeroCarrito>{itemsAgregados.length}</NumeroCarrito>
          </Acomodador>
          <Acomodador>
          <TotalTexto>Total: ${total}</TotalTexto>
          <TotalNumero />
          </Acomodador>
        </MenuCarritoHeader>
        <ContenedorRenderizadoCarrito>
          
          {itemsAgregados.map(item =>(
            <CartMenuRender key={item.id} {...item} />
          ))} 
          
          </ContenedorRenderizadoCarrito>
        <BotonCompra onClick={handleCompra}>Comprar</BotonCompra>
      </MenuCarritoContainer>
    </MenuCarrito>
  )
}
