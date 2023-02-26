import styled from "styled-components";
import confirmBackground from '../../images/confirm-backgroundIMG.jpg'

export const StyledConfirm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-image: url(${confirmBackground});
`;

export const ConfirmCard = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
height: 400px;
width: 400px;
gap:50px;
background: linear-gradient(135deg, #8a8a8a55 25%, transparent 25%) -32px 0/ 64px 64px, linear-gradient(225deg, #8a8a8a 25%, transparent 25%) -32px 0/ 64px 64px, linear-gradient(315deg, #8a8a8a55 25%, transparent 25%) 0px 0/ 64px 64px, linear-gradient(45deg, #8a8a8a 25%, #d0d0d0 25%) 0px 0/ 64px 64px;
border-radius: 50px;
box-shadow: -3px -3px 9px #aaa9a9a2,
3px 3px 7px rgba(147, 149, 151, 0.671);
`;

export const ConfirmText = styled.p`
display:flex;
height: auto;
width: auto;
justify-content: center;
flex-direction: column;
align-items: center;
text-align: center;
padding: 10px;
color: white;
background: radial-gradient(circle at 24.1% 68.8%, rgb(50, 50, 50) 0%, rgb(0, 0, 0) 99.4%);
border-radius: 10px;
font-size: 2rem;
span{
font-weight: 600;
color:gold;
  }
`;