import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BurguerMenuStyled, Bar } from './BurguerMenuStyles';
import * as burguerActions from '../../redux/burguer/burg-actions';
import * as cartActions from '../../redux/cart/cart-actions';

export const BurguerMenu = () => {
  const isBurguerMenuOpen = useSelector(state => state.burguer.showing);


  const dispatch = useDispatch();

  //manda los dispatch para cerrar el carrito y togglear el burguer menu
  const handleOpen = () =>{
  dispatch(burguerActions.toggleBurguer())
  dispatch(cartActions.cerrarCart())
  }

  return (<>
    <BurguerMenuStyled open={isBurguerMenuOpen} onClick={handleOpen}>
      <Bar open={isBurguerMenuOpen}/>
      <Bar open={isBurguerMenuOpen}/>
      <Bar open={isBurguerMenuOpen}/>
    </BurguerMenuStyled>
    </>
  )
}
