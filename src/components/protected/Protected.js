import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

//para que no se pueda acceder a la pagina de confirm si no se esta logeado

export const Protected = ({children, redireccionar }) => {

  const { currentUser } = useSelector(state =>state.user);

  return currentUser ? (
    children
  ) : (<Navigate to={redireccionar}
  state ={{redirectedFromConfirm: true,}}/>);
};
