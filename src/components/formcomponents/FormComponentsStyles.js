import styled from "styled-components";
import { Form as FormikForm } from 'formik';

export const colors={
  main: "white",
  red: "red",
}

export const Form = styled(FormikForm)`
  background-color: none;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  width: 75%;
  max-width: 400px;
  height: 430px;
  border-radius: 50px;
  padding: 0.5rem;
`;

export const InputLabel = styled.label`
color:#EEEE9B;
`;

export const InputStyled = styled.input`

  padding-left: 45px;
  font-size: 18px;
  height: 60px;
  width: 300px;
  padding: 1rem 1.5rem;
  margin-top: 8px;
  color: white;
  background: rgba(105, 105, 105, 0);
  outline: none;
  border: 1px solid rgba(255, 255, 255, 0.438);
  border-radius: 15px;
  outline: none;
  caret-color: white;
  ${(props) => props.invalid && `background-color: ${colors.red}; color:${colors.primary}`}
`;

export const ErrorMsg = styled.div`
font-size: 11px;
color: red;
margin-top: 5px;
margin-bottom: 10px;
text-align: left;
`;


//parte izquierda del login y register

export const ContainerImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  height: 500px;
  width: 350px;
  padding: 1.5rem 2rem;
  border-right: 5px solid white;
  color: white;
  border-radius: 15px 0 0 15px;
      @media (max-width: 768px) {
    display: none;

  }
`;

export const CocktailImagen = styled.img`
width: 240px;
`;