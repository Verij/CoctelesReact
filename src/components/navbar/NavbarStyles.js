import styled from "styled-components";

export const NavbarContainerStyled = styled.nav`
position: relative;
display: flex;
align-items: center;
justify-content: space-between;
width: 1700px;
background-color: white;
height: auto;
padding-left: 200px;
`;

export const NavbarLists = styled.ul`
  display: flex;
  align-items: center;
  gap: 50px;

@media (max-width: 1024px) {
  flex-flow: column nowrap;
  

    
    li{
      display: flex;
      border-bottom: 2px solid white;
      color:white;
      justify-content: center;
      width: 200px;
  }
  }
`;

export const NavbarListsContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 40px;

@media (max-width: 1024px) {
  flex-direction: column;
  position: fixed;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
      top:calc(0vh + 120px);
      left:0;
      gap: 30px;
  height: 500px;
  width: 300px;
  background: radial-gradient(circle at 24.1% 68.8%, rgb(50, 50, 50) 0%, rgb(0, 0, 0) 99.4%);
  transition: transform 0.3s;
  }
`;


export const CartNavStyled = styled.div`
display: flex;
align-items: center;
justify-content: left;
padding-left: 5px;
gap: 10px;
position: fixed;
left: 88.5%;
cursor: pointer;
background-color: white;
border: 4px solid darkblue;
border-radius: 10px;
width: 450px;
  &:hover {
  background-color: lightblue;
  }


@media (max-width: 1024px) {
p{
  display: none;
}
  }
`;

export const UserContainer = styled.div`
display: flex;
  
  align-items: center;
  justify-content: center;
  gap: 10px;
  background-color: white;

  margin-right: 50px;

  @media (max-width: 1024px) {
  flex-direction: column;
  width: 80%;
  padding: 15px;
  background-color: #F0F0F0;
  margin-right: 0px;
    border: 10px double black;
    

p{
  color:black;
  }
  }
`;

export const LogOutStyled = styled.span`
font-size: 18px;
color: darkblue;
cursor: pointer;
`;

export const UserTag = styled.p`
display: flex;
align-items: center;
height: 30px;
width: auto;
padding: 10px;
border-right: 1px solid;
`;