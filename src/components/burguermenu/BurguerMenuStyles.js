import styled from "styled-components";



export const BurguerMenuStyled = styled.div`
@media (max-width: 1024px) {
  
display:flex;
justify-content:space-around;
flex-flow: column nowrap;
align-items: center;
border-radius: 4px;
width: 2rem;
height: 2rem;
position: fixed;
top: 44px;
right: 135px;
cursor: pointer;
background-color: ${({open}) => open ? 'black' : 'lightgray'};
  }
`;


export const Bar = styled.div`
width: 80%;
height: 0.25rem;
background-color: ${({open}) => open ? 'lightgrey' : 'black'};
`;
