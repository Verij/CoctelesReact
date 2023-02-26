import styled from "styled-components";

export const StyledLogin = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient( 105.3deg,  rgba(30,39,107,1) 21.8%, rgba(77,118,221,1) 100.2% );
`;



export const LoginContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Comfortaa', cursive;
  margin-top: 75px;
`;

export const LoginFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  width: 380px;
  height: auto;
  padding-top: 30px;
  border-radius: 0 15px 15px 0;
  box-shadow: -3px -3px 9px #aaa9a9a2,
  3px 3px 7px rgba(147, 149, 151, 0.671);
  @media (max-width: 768px) {
  width: 330px;
  }
`;



export const LoginInputStyled = styled.input`
  width: 300px;
  padding: 1.5rem 2rem;
  color: white;
  background: rgba(105, 105, 105, 0);
  border-radius: 15px;
  outline: none;
  caret-color: white;
  
`;


export const RegisterLink = styled.span`
font-size: 0.8rem;
color: white;
border: 2px solid rgba(255, 255, 255, 0.438);
padding: 15px;
border-radius: 13px;
  &:hover {
  background-color: white;
  color: black;
  }
`;

export const ButtonLogin = styled.button`
  margin: 25px 0 0 0;
  width: 80%;
  height: 50px;
  color: rgb(238, 226, 226);
  font-size: 18px;
  font-weight: 600;
  border: 2px solid rgba(255, 255, 255, 0.438);
  border-radius: 8px;
  background: rgba(105, 105, 105, 0);
  margin-top: 20px;
  margin-bottom: 20px;
  outline: none;
  cursor: pointer;
  border-radius: 8px;
    &:hover {
  background-color: white;
  color: black;
  }
        &:active {
        border: 2px solid black;
        font-size: 0.95rem;
  }
`;