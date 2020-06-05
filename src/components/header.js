import React from "react";
import styled from "styled-components";

const HeaderStyled = styled.header`
  text-align: center;
  margin-top: 4.5em;

  h1 {
    color: var(--Very-Dark-Blue);
    font-weight: 700;
    font-size: 1.7em;
    line-height: 1;
  }
  h2 {
    color: var(--Grayish-Blue);
    font-weight: normal;
    font-size: 1.6em;
    line-height: 0;
  }
  h3 {
    font-weight: 200;
    font-size: 1em;
  }
`;

const Header = () => {
  return (
    <HeaderStyled>
      <h2> Reliable, efficient delivery</h2>
      <h1>Powered by Technology</h1>
      <h3>
        Our Artificial Intelligence powered tools use millions of project data
        points to ensure that your project is successful
      </h3>
    </HeaderStyled>
  );
};

export default Header;
