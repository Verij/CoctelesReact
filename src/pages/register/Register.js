import React from 'react';
import { Form as FormikForm, Formik } from 'formik';
import { Button } from '../../components/globalcomponents/GlobalComponents';
import {  StyledRegister, RegisterFormContainer, ButtonRegister } from './RegisterStyles';
import LoginIcon from '../login/LoginIcon';
import { CocktailImagen, ContainerImg, Form} from '../../components/formcomponents/FormComponentsStyles';
import { InputText } from '../../components/formcomponents/InputText';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import { signupUser } from '../../redux/user/user-actions';
import { useNavigate } from "react-router-dom";
import { createUser, signInWithGoogle } from '../../firebase/firebase-utils';
import CocktailIMG from '../../images/cocktailIMG.png';




const Register = () => {


  const navigate = useNavigate();
  return (
    <StyledRegister>
      
      <ContainerImg><CocktailImagen src={CocktailIMG} alt='cocktailimg'/></ContainerImg>
      <RegisterFormContainer>
        <LoginIcon/>
        <Formik  initialValues={{
          name: '',
          email: '',
          password: '',
        }}
        validationSchema={
          Yup.object({
            email: Yup.string().email("e-mail invalido").required("Required"),
            password: Yup.string().min(8,"Contraseña demasiado corta").max(15,"Contraseña demasiado larga").required("Required"),
          })
        }
        onSubmit={async (values, actions) => {
          try{
            await createUser(values.email, values.password, values.name);
          }catch (error){
            if(error.code === 'auth/email-already-in-use'){
              alert('ya esta en uso')
            }
          

          }
          actions.resetForm();
        }}
        >
                    {() =>(
            <Form>
              <InputText 
              name="email"
              type="text"
              label="Email Address"
              placeholder="asd@smail.com"/>
              <InputText
              name="password"
              type="password"
              label="Contraseña"
              placeholder="******"
              />
              <ButtonRegister type="submit">Registrarse</ButtonRegister>
              <ButtonRegister  onClick={signInWithGoogle}>Registrarse con <span style={{color: "burlywood"}}>Google</span></ButtonRegister>
            </Form>
            
            )}
            
        </Formik>
      </RegisterFormContainer>
    </StyledRegister>
  );
};

export default connect(null,{signupUser})(Register);