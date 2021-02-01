import React from "react";
import { HeaderWrapper } from "./Styled";
import HeaderContent from "./Content";

const Header = ({ selectedWeather }) => {
  return (
    <>
      <HeaderWrapper>
        <HeaderContent selectedWeather={selectedWeather} />
      </HeaderWrapper>
    </>
  );
};

export default Header;
