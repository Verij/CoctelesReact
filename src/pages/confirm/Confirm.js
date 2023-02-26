import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '../../components/globalcomponents/GlobalComponents';
import * as cartActions from '../../redux/cart/cart-actions';
import { ConfirmCard, ConfirmText, StyledConfirm } from './ConfirmStyles';


export const Confirm = () => {

  //traigo el estado del current user para
  const currentUsers = useSelector(state => state.user.currentUser)
  const dispatch = useDispatch();
  //una vez que confirme, se despeja el carrito y lo devuelve a la pagina principal
  const handleConfirm = () =>{
    dispatch(cartActions.comprarCart());
    window.location.replace('/');
  }
  return (
    <StyledConfirm>
      <ConfirmCard>
        <ConfirmText>¡Muchas gracias por su compra<span>{currentUsers?.email}</span></ConfirmText>
        <Button background={'darkblue'} color={'lightgrey'} onClick={handleConfirm}>confirmar compra</Button>
      </ConfirmCard>
    </StyledConfirm>
  )
}
