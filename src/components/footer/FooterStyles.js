import styled from "styled-components";
import { Section } from "../globalcomponents/GlobalComponents";
import FooterBackgroundIMG from "../../images/footer-backgroundIMG.jpg";
import { TextSpan } from "../globalcomponents/GlobalComponents";

export const FooterSection = styled(Section)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  height: 30vh;
  background-image: url(${FooterBackgroundIMG});
`;

export const FooterContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 40px;
border-bottom: 1.5px solid white;
`;

export const SocialIconsContainer = styled.div`
display: flex;
gap:20px;
margin-bottom: 20px;
`;

export const FooterTitle = styled.h3`
color: #F0E68C;
font-size: 1.6rem;
@media (max-width: 1024px) {
font-size: 1rem;
margin-bottom: 20px;

  }
`;


export const CopyrightText = styled(TextSpan)`
color: white;
margin-top: 20px;
`;