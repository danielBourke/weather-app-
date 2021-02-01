import styled from "styled-components";
import hero_background from "App/assets/hero_background.png"
export const HeaderWrapper = styled.div`
  background-color: #1d007a;
  height: 100%;
  min-height: 65vh;
  display: flex;
  background-image: url(${hero_background});
  background-size: cover;
  background-position: center;
  flex-direction: column;
  max-width: 2150px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  margin-top: 85px;
  
  @media (min-width: 950px)  {
    flex-direction: row;
    margin-bottom: auto;
  

  }
`;
