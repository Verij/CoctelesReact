import React from 'react'
import { Routes as ReactDomRoutes, Route } from 'react-router-dom';
import { Confirm } from '../../pages/confirm/Confirm';
import { Home } from '../../pages/home/Home';
import  Login  from '../../pages/login/Login';
import  Register  from '../../pages/register/Register';
import { Protected } from '../protected/Protected';
export const Routes = () => {
  return (
    <ReactDomRoutes>
      <Route path='/' element={<Home />}/>
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/confirm' element={<Protected redireccionar='/'>
      <Confirm />
      </Protected>} />
    </ReactDomRoutes>
  )
}
