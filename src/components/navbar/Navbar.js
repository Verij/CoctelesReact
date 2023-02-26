import React from 'react'
import CartIcon from './CartIcon'
import { CartNavStyled, NavbarContainerStyled, NavbarLists, UserContainer, LogOutStyled, UserTag, NavbarListsContainer } from './NavbarStyles'
import { CartMenu } from '../cartmenu/CartMenu'
import { useDispatch, useSelector } from 'react-redux'
import * as cartActions from '../../redux/cart/cart-actions'
import * as burguerActions from '../../redux/burguer/burg-actions'


import { Link, useNavigate } from 'react-router-dom';
import {FaUserCircle} from 'react-icons/fa';
import { auth } from '../../firebase/firebase-utils';
import { BurguerMenu } from '../burguermenu/BurguerMenu'


export const Navbar = () => {



  //defino los UseSelectors, UseNavigate y el dispatch
  const isBurguerMenuOpen = useSelector(state => state.burguer.showing);
  const toggleCarrito = useSelector(state => state.cart.hidden);
  const currentUsers = useSelector(state => state.user.currentUser);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  //algunos handlers para los onClick
  
  // Cierra el burguer y togglea el carrito
  const handleToggleCart = () =>{
  dispatch(cartActions.toggleCart());
  dispatch(burguerActions.cerrarBurguer());
  }

  const handleLogOut = () =>{
    dispatch(cartActions.limpiarCart());
    auth.signOut();
  }


  return (
    <NavbarContainerStyled>
      {!toggleCarrito && (<CartMenu onClick={()=>dispatch(cartActions.toggleCart())}/>)}

      <NavbarListsContainer open={isBurguerMenuOpen}>
      <NavbarLists>
        <Link to='/'>
          <li>Home</li>
        </Link>
        <Link to='login'>
          <li>Login</li>
        </Link>
        <Link to='register'>
          <li>Register</li>
        </Link>
      </NavbarLists>

      <UserContainer >
        <FaUserCircle size={30}/>
        {/* Si el usuario no esta logeado, que me navegue hacia la pagina del login */}
        {!currentUsers ?
            (<p onClick={()=>currentUsers
      ? navigate('/')
      : navigate('/login')}><span style={{cursor: 'pointer'}}>iniciar sesion</span></p>)
      // Si el usuario no esta logeado, en vez de aparecerme su mail, me va a aparecer 'iniciar sesion' y 'logOut'
      :<UserTag>{currentUsers?.email}</UserTag>}
        
        {currentUsers && (<LogOutStyled onClick={handleLogOut}>LogOut</LogOutStyled>)
        }
      </UserContainer>

      </NavbarListsContainer>
      {/* Burguer Menu para el responsive */}
      <BurguerMenu  />
      
      {/* El icono del cart con su handle para abrirlo */}
      <CartNavStyled onClick={handleToggleCart}>
        <CartIcon />
            <p>Carrito</p>
      </CartNavStyled>
      </NavbarContainerStyled>
  )
}
