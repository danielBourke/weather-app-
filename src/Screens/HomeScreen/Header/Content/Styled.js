import styled from "styled-components";

export const TempContainer = styled.div`
  display: flex;
`;
export const TempToggle = styled.div`
  display: flex;
  margin-left: 20px;
  justify-content: space-around;
  height: 40px;
  width: 160px;
`;
export const Tempselector = styled.span`
  font-size: 40px;
  cursor: pointer;
`;

export const HeaderItemWrapper = styled.div`
  padding: 20;
  width: 100vw;
  height: 100%;
  flex-grow: 1;
  margin-top: auto;
  margin-bottom: auto;

  @media (min-width: 950px) {
    width: 50vw;
  }
`;

export const HeaderInfoSection = styled.div`
  max-width: 100%;
  background-color: white;
  border-radius: 10px;
  padding: 10px;
  color: #404040;
  margin: auto;
  text-align: center;
  @media (min-width: 950px) {
    margin: auto;
    max-width: 50%;

    text-align: left;
  }
`;

export const HeaderOneTxt = styled.h1`
  color: #404040;
  font-size: 55px;
  @media (min-width: 950px) {
    margin: auto;
  }
`;
