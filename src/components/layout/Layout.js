import React from 'react'
import { LayoutStyled } from './LayoutStyles'

export const Layout = ({ children }) => {
  return (<>
    <LayoutStyled>{ children }</LayoutStyled>
    </>
  )
}
