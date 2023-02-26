import React from 'react';
import { CantidadContenedor, ItemsCantidad, ItemsContenedorDerecha, ItemsImagen, ItemsNombre, ItemsPrecio, QuitarBtn, RestaBtn, SumaBtn } from './CartMenuRenderStyles';
import { Fijado } from '../cartmenu/CartMenuStyles';
import { useDispatch } from 'react-redux';
import * as cartActions from '../../redux/cart/cart-actions'



export const CartMenuRender = (props) => {
  const {nombre, precio, imagen, cantidad, id} = props;
  const dispatch = useDispatch();

    const esMenos = cantidad > 1;
    

  return (
    <>
    {/* Mando la id para comparar y eliminar el item en especifico */}
    <QuitarBtn onClick={() => dispatch(cartActions.removerItem(id))}>X</QuitarBtn>
    <Fijado>
    <ItemsImagen src={imagen} alt='logoimg' />
    <ItemsContenedorDerecha>
      <ItemsNombre>{nombre}</ItemsNombre>
      <ItemsPrecio>${precio}</ItemsPrecio>
      <CantidadContenedor>
        <p>Cant:</p>
        {/* Para evitar que se pueda seguir restando mas alla del 1 */}
        <RestaBtn {...(esMenos ? { onClick: () => dispatch(cartActions.restarCant({nombre, precio, imagen, cantidad, id}))} : {})}>-</RestaBtn>
        <ItemsCantidad>{cantidad}</ItemsCantidad>
        <SumaBtn onClick={() => dispatch(cartActions.agregarProducto({nombre, precio, imagen, cantidad, id}))}>+</SumaBtn>
      </CantidadContenedor>
    </ItemsContenedorDerecha>
    </Fijado>
    </>
  )
}
