import React from 'react'
import { Formik } from 'formik';
import { ButtonLogin, LoginFormContainer, RegisterLink, StyledLogin } from './LoginStyles';
import LoginIcon from './LoginIcon';
import { Link } from 'react-router-dom';
import { CocktailImagen, ContainerImg, Form } from '../../components/formcomponents/FormComponentsStyles';
import { InputText } from '../../components/formcomponents/InputText';
import * as Yup from 'yup';
import { useNavigate } from "react-router-dom";
import { createUserProfileDocument, signInUser } from '../../firebase/firebase-utils';
import CocktailIMG from '../../images/cocktailIMG.png';


const Login = () => {
  const navigate = useNavigate();
  return (
    <StyledLogin>
    <ContainerImg><CocktailImagen src={CocktailIMG} alt='cocktailimg'/></ContainerImg>
      <LoginFormContainer>
      <LoginIcon />
        <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={
          Yup.object({
            email: Yup.string().email("e-mail invalido").required("Required"),
            password: Yup.string().min(8,"Contraseña demasiado corta").max(15,"Contraseña demasiado larga").required("Required"),
          })
        }
        onSubmit={async values => {
          try {
            const{user} = await signInUser(values.email, values.password);
            createUserProfileDocument(user)
            
            
          } catch (error) {
            if (error.code === 'auth/wrong-password') {
              alert('password incorrecto');
            }
            if (error.code === 'auth/user-not-found') {
              alert('no existe usuario');
            }
          }
        }}>
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
              placeholder="******" />
              <ButtonLogin type="submit">Ingresar</ButtonLogin>
              <Link to='/register'><RegisterLink >¿No tenes cuenta? <span style={{color: "lightgreen"}}>Registrate</span></RegisterLink></Link>
              
            </Form>
            )}
        </Formik>
      </LoginFormContainer>
    </StyledLogin>
  )
}

export default Login;