import React from 'react'
import { Button } from '../globalcomponents/GlobalComponents'
import { CardProducto, CardInfo, CardPrecioSpan, CardButtonContainer } from './CardProductosStyles'
import { useDispatch, useSelector } from 'react-redux';
import * as cartActions from '../../redux/cart/cart-actions';
import { useNavigate } from 'react-router-dom';


export const CardProduct = (props) => {
  const {nombre, precio, imagen,  origen, descripcion, cantidad, id} = props;

  const navigate = useNavigate()
  const dispatch = useDispatch()
  let isLogged = useSelector(state => state.user.currentUser);

const handleAdd = () =>{
  //si esta logeado, envia como payload las props a renderizar. Si no esta logeado, lo envia a la pagina del login
  if(isLogged){
  dispatch(cartActions.agregarProducto({nombre, precio, imagen, cantidad, id}));
  }else{
    navigate('/login');
  }
 };


  return (<>
    <CardProducto>
      
      <img src={imagen} alt='bebida' />

      <CardInfo>
        
      <h1>{nombre}</h1>
      <h2>{origen}</h2>
      <p>{descripcion}</p>
      
      <CardButtonContainer>
        <CardPrecioSpan>${precio}</CardPrecioSpan>
        <Button  onClick={handleAdd} background={'darkorchid'}>Agregar</Button>
      </CardButtonContainer>

      </CardInfo>

    </CardProducto>
      </>
  
  )
}
