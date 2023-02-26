import React from 'react';
import {useField} from 'formik';
import { ErrorMsg, InputLabel, InputStyled } from './FormComponentsStyles';
import { useState } from 'react';

export const InputText = ({...props}) => {

  //Hago la validacion para el formik
  const [field, meta] = useField(props);
  const [show] = useState(false);
  return (
    <div><InputLabel htmlFor={props.name}>
    {props.label}</InputLabel>
    {props.type !== "password" && <InputStyled {...field} {...props}/>}

  {props.type === "password" &&(
    <InputStyled
    {...field}
    {...props}
    type={show ? "text" : "password"}
    />)}
    {meta.touched && meta.error ? (
      <ErrorMsg>{meta.error}</ErrorMsg>
    ): (
      <ErrorMsg style={{visibility: "hidden"}}>.</ErrorMsg>
    )}
    </div>
  )
}
